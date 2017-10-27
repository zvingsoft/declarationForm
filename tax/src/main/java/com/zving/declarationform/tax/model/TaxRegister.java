package com.zving.declarationform.tax.model;

import java.util.List;

/**
 * 缴税登记
 * 
 * @author 徐俊豪
 * @mail xujunhao@zving.com
 * @date 2017年10月26日
 */
public class TaxRegister {
	long id;//id
	String taxNumber;//缴税单号
	String taxUser;//缴税人
	double taxAmount;//缴税金额
	String registerDate;//缴税时间
	String registerStatus;//缴税状态
	String registerStatusName;//缴税状态名称
	
	List<Long> declarationIds ;//报关单编号

	
	public List<Long> getDeclarationIds() {
		return declarationIds;
	}

	public void setDeclarationIds(List<Long> declarationIds) {
		this.declarationIds = declarationIds;
	}

	public String getRegisterStatusName() {
		return registerStatusName;
	}

	public void setRegisterStatusName(String registerStatusName) {
		this.registerStatusName = registerStatusName;
	}

	public String getRegisterDate() {
		return registerDate;
	}

	public void setRegisterDate(String registerDate) {
		this.registerDate = registerDate;
	}

	public String getRegisterStatus() {
		return registerStatus;
	}

	public void setRegisterStatus(String registerStatus) {
		this.registerStatus = registerStatus;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTaxNumber() {
		return taxNumber;
	}

	public void setTaxNumber(String taxNumber) {
		this.taxNumber = taxNumber;
	}

	public double getTaxAmount() {
		return taxAmount;
	}

	public void setTaxAmount(double taxAmount) {
		this.taxAmount = taxAmount;
	}

	public String getTaxUser() {
		return taxUser;
	}

	public void setTaxUser(String taxUser) {
		this.taxUser = taxUser;
	}
	
	
}
