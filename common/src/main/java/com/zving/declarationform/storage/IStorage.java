package com.zving.declarationform.storage;

import java.util.List;

/**
 * 数据存取
 * 
 * @author 王育春
 * @mail wyuch@zving.com
 * @date 2017年10月19日
 */
public interface IStorage {
	/**
	 * 返回与bean中非null字段的值一致的第一个对象
	 */
	<T> T get(Class<T> clazz, T bean);

	/**
	 * 返回与bean中非null字段的值一致的所有对象
	 */
	<T> List<T> find(Class<T> clazz, T bean);

	/**
	 * 加入一个对象
	 */
	<T> void add(Class<T> clazz, T bean);

	/**
	 * 更新一个对象
	 */
	<T> void update(Class<T> clazz, T bean);

	/**
	 * 删除一个对象
	 */
	<T> void delete(Class<T> clazz, T bean);
}
