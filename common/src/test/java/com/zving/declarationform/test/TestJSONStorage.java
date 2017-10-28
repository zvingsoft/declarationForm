package com.zving.declarationform.test;

import java.util.Date;

import com.zving.declarationform.storage.IStorage;
import com.zving.declarationform.storage.StorageUtil;

/**
 * @author 王育春
 * @mail wyuch@zving.com
 * @date 2017年10月19日
 */
public class TestJSONStorage {

	public static void main(String[] args) {
		IStorage jsonStorage = StorageUtil.getInstance();
		jsonStorage.add(Person.class, new Person("wang", new Date()));
		Person p = jsonStorage.find(Person.class, new Person(null, null)).get(0);
		System.out.println(p.getBirthday());
	}

	public static class Person {
		String name;
		Date birthday;

		public Person() {

		}

		public Person(String name, Date birthday) {
			this.name = name;
			this.birthday = birthday;
		}

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public Date getBirthday() {
			return birthday;
		}

		public void setBirthday(Date birthday) {
			this.birthday = birthday;
		}
	}
}
