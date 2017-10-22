package com.zving.declarationform.model;

/**
 * @author 王育春
 * @mail wyuch@zving.com
 * @date 2017年10月17日
 */
public class Company {
	long id;// 组织机构代码
	String name;// 公司名称
	String address;// 公司地址
	String postCode;// 单位邮编
	String phone;// 单位电话

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPostCode() {
		return postCode;
	}

	public void setPostCode(String postCode) {
		this.postCode = postCode;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}
}
