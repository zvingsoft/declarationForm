package com.zving.declarationform.model;

/**
 * 通用TCC锁
 * 
 * @author 王育春
 * @mail wyuch@zving.com
 * @date 2017年10月27日
 */
public class TCCLock {
	String type;// 锁类型
	String relaId;// 关联对象
	String lockedValue;// 锁定值
	long formId;// 报关单ID

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getRelaId() {
		return relaId;
	}

	public void setRelaId(String relaId) {
		this.relaId = relaId;
	}

	public String getLockedValue() {
		return lockedValue;
	}

	public void setLockedValue(String lockedValue) {
		this.lockedValue = lockedValue;
	}

	public long getFormId() {
		return formId;
	}

	public void setFormId(long formId) {
		this.formId = formId;
	}
}
