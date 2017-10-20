package com.zving.declarationform.processingtrade.model;

/**
 * @author zhaochangjin
 * @mail zhaochangjin@zving.com
 * @date 2017年10月20日
 */
public class ProcessingTrade {

	String number;
	String processCorp;
	String commissionedCorp;

	public String getNumber() {
		return number;
	}

	public void setNumber(String number) {
		this.number = number;
	}

	public String getProcessCorp() {
		return processCorp;
	}

	public void setProcessCorp(String processCorp) {
		this.processCorp = processCorp;
	}

	public String getCommissionedCorp() {
		return commissionedCorp;
	}

	public void setCommissionedCorp(String commissionedCorp) {
		this.commissionedCorp = commissionedCorp;
	}

}
