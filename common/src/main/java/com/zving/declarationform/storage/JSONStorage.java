package com.zving.declarationform.storage;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map.Entry;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.locks.ReentrantLock;
import java.util.stream.Collectors;

import org.apache.commons.beanutils.BeanMap;
import org.apache.commons.beanutils.BeanUtils;

import com.fasterxml.jackson.databind.JavaType;
import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * 将数据存储成JSON，开发时临时使用
 * 
 * @author 王育春
 * @mail wyuch@zving.com
 * @date 2017年10月19日
 */
public class JSONStorage implements IStorage {
	ConcurrentHashMap<Class<?>, List<?>> map = new ConcurrentHashMap<>();
	ReentrantLock lock = new ReentrantLock();

	public JSONStorage() {
		new File("appdata/json/").mkdirs();
	}

	@SuppressWarnings("unchecked")
	<T> List<T> getList(Class<T> clazz) {
		if (map == null) {
			lock.lock();
			try {
				if (map == null) {
				}
			} finally {
				lock.unlock();
			}
		}

		if (map.containsKey(clazz)) {
			return (List<T>) map.get(clazz);
		} else {
			lock.lock();
			try {
				if (!map.containsKey(clazz)) {
					ObjectMapper om = new ObjectMapper();
					JavaType type = om.getTypeFactory().constructParametricType(ArrayList.class, clazz);
					try {
						File f = new File("appdata/json/" + clazz.getName());
						if (f.exists()) {
							List<T> list = om.readValue(f, type);
							map.put(clazz, list);
							return list;
						}
					} catch (IOException e) {
						e.printStackTrace();
					}
				}
			} finally {
				lock.unlock();
			}
		}
		List<T> list = new ArrayList<T>();
		map.put(clazz, list);
		return list;
	}

	<T> void write(Class<T> clazz) {
		List<T> list = getList(clazz);
		ObjectMapper om = new ObjectMapper();
		try {
			om.writeValue(new File("appdata/json/" + clazz.getName()), list);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Override
	public <T> T get(Class<T> clazz, T bean) {
		List<T> arr = find(clazz, bean);
		if (arr != null && arr.size() > 0) {
			return arr.get(0);
		}
		return null;
	}

	@Override
	public <T> List<T> find(Class<T> clazz, T bean) {
		List<T> list = getList(clazz);
		if (bean == null) {
			return list;
		}
		BeanMap map1 = new BeanMap(bean);
		bean.getClass().getDeclaredMethods();
		return list.stream().filter(item -> {
			BeanMap map2 = new BeanMap(item);
			for (Entry<?, ?> e : map1.entrySet()) {
				if (e.getValue() != null && e.getValue() != map2.get(e.getKey())) {
					return false;
				}
			}
			return true;
		}).collect(Collectors.toList());
	}

	@Override
	public <T> void add(Class<T> clazz, T bean) {
		List<T> list = getList(clazz);
		list.add(bean);
		write(clazz);
	}

	@Override
	public <T> void update(Class<T> clazz, T bean) {
		T dest = get(clazz, bean);
		try {
			BeanUtils.copyProperties(bean, dest);
		} catch (Exception e) {
			e.printStackTrace();
		}
		write(clazz);
	}

	@Override
	public <T> void delete(Class<T> clazz, T bean) {
		getList(clazz).remove(bean);
		write(clazz);
	}

}
