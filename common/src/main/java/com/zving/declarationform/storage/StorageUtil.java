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
			String address = "";// System.getenv("mysql_address");
			if (address != null) {
				System.getProperties().put("mysql_address", "localhost:3306");
				System.getProperties().put("mysql_user", "root");
				System.getProperties().put("mysql_password", "zcms");
				instance = new MysqlStorage();
			} else {
				instance = new JSONStorage();
			}
		}
		return instance;
	}
}
