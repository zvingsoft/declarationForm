package com.zving.declarationform.cottonquota.model;

import java.util.Date;

/**
 * 棉花配额
 * 
 * @author liwenbin
 * @mail lwb@zving.com
 * @date 2017年10月20日
 */
public class CottonQuota {
	private long id; // 主键
	private long companyId;// 公司ID
	private String companyName;// 公司名称，这是一个冗余字段
	private double quota;// 配额
	private double used;// 己用配额
	private Date addTime;// 添加时间
	private String addUser;// 添加人
	private Date modifyTime;// 修改时间
	private String modifyUser;// 修改人

	private String number;// 编号
	private double application;// 申请配额
	private String auditStatus;// 审核状态

	public String getNumber() {
		return number;
	}

	public void setNumber(String number) {
		this.number = number;
	}

	public double getApplication() {
		return application;
	}

	public void setApplication(double application) {
		this.application = application;
	}

	public String getAuditStatus() {
		return auditStatus;
	}

	public void setAuditStatus(String auditStatus) {
		this.auditStatus = auditStatus;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public long getCompanyId() {
		return companyId;
	}

	public void setCompanyId(long companyId) {
		this.companyId = companyId;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public double getQuota() {
		return quota;
	}

	public void setQuota(double quota) {
		this.quota = quota;
	}

	public double getUsed() {
		return used;
	}

	public void setUsed(double used) {
		this.used = used;
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

}
