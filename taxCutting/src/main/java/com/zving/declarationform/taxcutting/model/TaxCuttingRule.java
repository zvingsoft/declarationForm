package com.zving.declarationform.taxcutting.model;

public class TaxCuttingRule {
	String id;
	String sku; // 货号
	int topLmit; // 上限
	float rate; // 优惠税率
	String policyPaperTitle; // 政策文件标题
	String policyPaperContent; // 政策文件内容
	String startTime;// 减免生效起始时间
	String endTime;// 减免生效结束时间
	String validityDate; // 有效期

	public String getValidityDate() {
		return validityDate;
	}

	public void setValidityDate(String validityDate) {
		this.validityDate = validityDate;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getSku() {
		return sku;
	}

	public void setSku(String sku) {
		this.sku = sku;
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

	public String getPolicyPaperTitle() {
		return policyPaperTitle;
	}

	public void setPolicyPaperTitle(String policyPaperTitle) {
		this.policyPaperTitle = policyPaperTitle;
	}

	public String getPolicyPaperContent() {
		return policyPaperContent;
	}

	public void setPolicyPaperContent(String policyPaperContent) {
		this.policyPaperContent = policyPaperContent;
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
