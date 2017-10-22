package com.zving.declarationform.processingtrade.model;

/**
 * @author zhaochangjin
 * @mail zhaochangjin@zving.com
 * @date 2017年10月20日
 */
public class ProcessingTrade {
	long id;
	String SKU;// 货号
	double amount; // 限额
	double used;// 己用量
	long processCompany;// 接单企业ID
	String processCompanyName;// 接单企业名称，冗余字段
	String commissionedCompnayName;// 委托企业名称

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getSKU() {
		return SKU;
	}

	public void setSKU(String sKU) {
		SKU = sKU;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public double getUsed() {
		return used;
	}

	public void setUsed(double used) {
		this.used = used;
	}

	public long getProcessCompany() {
		return processCompany;
	}

	public void setProcessCompany(long processCompany) {
		this.processCompany = processCompany;
	}

	public String getProcessCompanyName() {
		return processCompanyName;
	}

	public void setProcessCompanyName(String processCompanyName) {
		this.processCompanyName = processCompanyName;
	}

	public String getCommissionedCompnayName() {
		return commissionedCompnayName;
	}

	public void setCommissionedCompnayName(String commissionedCompnayName) {
		this.commissionedCompnayName = commissionedCompnayName;
	}

}
