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
			if (address != null) {
				System.out.println("Init MysqlStorage");
				instance = new MysqlStorage();
			} else {
				System.out.println("Init JSONStorage");
				instance = new JSONStorage();
			}
		}
		return instance;
	}
}
