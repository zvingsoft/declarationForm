package com.zving.declarationform.storage;

import java.util.List;

/**
 * @author 王育春
 * @mail wyuch@zving.com
 * @date 2017年10月22日
 */
public class MysqlStorage implements IStorage {

	@Override
	public <T> T get(Class<T> clazz, T bean) {
		return null;
	}

	@Override
	public <T> List<T> find(Class<T> clazz, T bean) {
		return null;
	}

	@Override
	public <T> void add(Class<T> clazz, T bean) {
	}

	@Override
	public <T> void update(Class<T> clazz, T bean, T newBean) {
	}

	@Override
	public <T> void delete(Class<T> clazz, T bean) {
	}

}
