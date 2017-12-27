package com.zving.declarationform.model;

import java.util.Date;

/**
 * @author 王育春
 * @mail wyuch@zving.com
 * @date 2017年10月17日
 */
public class Company {
	private long id;// 组织机构代码
	private String name;// 公司名称
	private String address;// 公司地址
	private String postCode;// 单位邮编
	private String phone;// 单位电话

	private String fax;// 单位传真
	private String bankCreditRating;// 银行信用评级
	private Date addTime;// 添加时间
	private String addUser;// 添加人
	private Date modifyTime;// 修改时间
	private String modifyUser;// 修改人

	public String getFax() {
		return fax;
	}

	public void setFax(String fax) {
		this.fax = fax;
	}

	public String getBankCreditRating() {
		return bankCreditRating;
	}

	public void setBankCreditRating(String bankCreditRating) {
		this.bankCreditRating = bankCreditRating;
	}

	public Date getAddTime() {
		return addTime;
	}

	public void setAddTime(Date addTime) {
		this.addTime = addTime;
	}

	public String getAddUser() {
		return addUser;
	}

	public void setAddUser(String addUser) {
		this.addUser = addUser;
	}

	public Date getModifyTime() {
		return modifyTime;
	}

	public void setModifyTime(Date modifyTime) {
		this.modifyTime = modifyTime;
	}

	public String getModifyUser() {
		return modifyUser;
	}

	public void setModifyUser(String modifyUser) {
		this.modifyUser = modifyUser;
	}

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
