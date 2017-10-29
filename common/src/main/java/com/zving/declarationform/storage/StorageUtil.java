package com.zving.declarationform.storage;

/**
 * @author 王育春
 * @mail wyuch@zving.com
 * @date 2017年10月19日
 */
public class StorageUtil {
	static IStorage instance = null;

	public static IStorage getInstance() {
		if (instance == null) {
			String address = System.getenv("mysql_address");
			String address2 = System.getProperty("mysql_address");
			if (address != null || address2 != null) {
				System.out.println("Init MysqlStorage");
				instance = new MysqlStorage();
			} else {
				System.out.println("Init JSONStorage");
				instance = new JSONStorage();
			}
		}
		return instance;
	}

	static Class<?>[] basicTypes = new Class<?>[] { int.class, float.class, double.class, short.class, long.class, String.class, char.class,
			Integer.class, Float.class, Double.class, Short.class, Long.class, boolean.class, Boolean.class };

	public static boolean isBasicType(Class<?> clazz) {
		for (Class<?> c : basicTypes) {
			if (c == clazz) {
				return true;
			}
		}
		return false;
	}
}
