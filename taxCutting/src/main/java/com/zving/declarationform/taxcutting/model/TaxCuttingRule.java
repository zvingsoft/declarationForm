package com.zving.declarationform.taxcutting.model;

public class TaxCuttingRule {
	String id;
	String SKU;// 货号
	int topLmit;// 上限
	float rate;// 优惠税率
	String policypapertitle;
	String policypapercontent;
	String startTime;// 减免生效起始时间
	String endTime;// 减免生效结束时间

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getSKU() {
		return SKU;
	}

	public void setSKU(String sKU) {
		SKU = sKU;
	}

	public int getTopLmit() {
		return topLmit;
	}

	public void setTopLmit(int topLmit) {
		this.topLmit = topLmit;
	}

	public float getRate() {
		return rate;
	}

	public void setRate(float rate) {
		this.rate = rate;
	}

	public String getPolicypapertitle() {
		return policypapertitle;
	}

	public void setPolicypapertitle(String policypapertitle) {
		this.policypapertitle = policypapertitle;
	}

	public String getPolicypapercontent() {
		return policypapercontent;
	}

	public void setPolicypapercontent(String policypapercontent) {
		this.policypapercontent = policypapercontent;
	}

	public String getStartTime() {
		return startTime;
	}

	public void setStartTime(String startTime) {
		this.startTime = startTime;
	}

	public String getEndTime() {
		return endTime;
	}

	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}
}
