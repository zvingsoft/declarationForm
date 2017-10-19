package com.zving.declarationform.storage;

/**
 * 数据存取
 * 
 * @author 王育春
 * @mail wyuch@zving.com
 * @date 2017年10月19日
 */
public interface IStorage {
	<T> T get(Class<T> clazz, T bean);

	<T> T[] find(Class<T> clazz, T bean);

	<T> T add(Class<T> clazz, T bean);

	<T> T update(Class<T> clazz, T bean);

	<T> T delete(Class<T> clazz, T bean);
}
