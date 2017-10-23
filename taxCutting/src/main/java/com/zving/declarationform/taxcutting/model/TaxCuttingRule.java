package com.zving.declarationform.taxcutting.model;

public class TaxCuttingRule {
	String id;
	String sku; // 货号
	String largeType; // 减免税大类
	String largeTypeName;
	String smallType; // 减免税小类
	String smallTypeName;
	String way; // 减免税方式
	String wayName;
	int topLmit; // 上限
	float rate; // 优惠税率
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

	public String getLargeType() {
		return largeType;
	}

	public void setLargeType(String largeType) {
		this.largeType = largeType;
	}

	public String getLargeTypeName() {
		return largeTypeName;
	}

	public void setLargeTypeName(String largeTypeName) {
		this.largeTypeName = largeTypeName;
	}

	public String getSmallType() {
		return smallType;
	}

	public void setSmallType(String smallType) {
		this.smallType = smallType;
	}

	public String getSmallTypeName() {
		return smallTypeName;
	}

	public void setSmallTypeName(String smallTypeName) {
		this.smallTypeName = smallTypeName;
	}

	public String getWay() {
		return way;
	}

	public void setWay(String way) {
		this.way = way;
	}

	public String getWayName() {
		return wayName;
	}

	public void setWayName(String wayName) {
		this.wayName = wayName;
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

	public String getValidityDate() {
		return validityDate;
	}

	public void setValidityDate(String validityDate) {
		this.validityDate = validityDate;
	}

}
