package com.zving.declarationform.storage;

/**
 * @author 王育春
 * @mail wyuch@zving.com
 * @date 2017年10月19日
 */
public class StorageUtil {
	public static IStorage getInstance() {
		return new JSONStorage();
	}
}
