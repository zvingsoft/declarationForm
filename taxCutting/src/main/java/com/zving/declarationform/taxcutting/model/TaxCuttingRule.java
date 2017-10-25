package com.zving.declarationform.taxcutting.model;

public class TaxCuttingRule {
	String id;
	String sku; // 货号
	String skuName;// 货品名称
	double count; // 可用数量
	double topLmit; // 上限
	double rate; // 优惠税率
	String policyPaperTitle; // 政策文件标题
	String policyPaperContent; // 政策文件内容
	String startTime;// 减免生效起始时间
	String endTime;// 减免生效结束时间
	String validityDate; // 有效期
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
	public String getSkuName() {
		return skuName;
	}
	public void setSkuName(String skuName) {
		this.skuName = skuName;
	}
	public double getCount() {
		return count;
	}
	public void setCount(double count) {
		this.count = count;
	}
	public double getTopLmit() {
		return topLmit;
	}
	public void setTopLmit(double topLmit) {
		this.topLmit = topLmit;
	}
	public double getRate() {
		return rate;
	}
	public void setRate(double rate) {
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
	public String getValidityDate() {
		return validityDate;
	}
	public void setValidityDate(String validityDate) {
		this.validityDate = validityDate;
	}

	
}
