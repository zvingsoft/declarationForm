package com.zving.declarationform.license.model;

/**
 * 许可证
 * 
 * @author 王育春
 * @mail wyuch@zving.com
 * @date 2017年10月18日
 */
public class License {
	long id;// 许可证序列号
	String sku;// 许可的商品货号
	double count;// 许可的数量
	String companyId;// 颁发给哪个单位
	String licenseKey;// 许可证号
	String companyName;// 进口商
	String consignee;// 收货人
	String consignor;// 发货人
	String tradeMode;// 贸易方式
	String exportingCountry;// 出口国
	String importedCountry;// 进口国
	String countryOfOrigin;// 原产国家
	String portOfClearance;// 报关口岸
	String sourceOffOreignExchange;// 外汇来源
	String paymentMethod;// 付款方式
	String endUser;// 最终用户
	String finalPurpose;// 最终用途
	String goodsName;// 商品名称
	String goodsCode;// 商品编号
	String shippingType;// 运输方式
	String expirationDateOfLicense;// 许可证截止日期
	String certificationDate;// 发证日期
	String memo;// 备注
	String type;// 类型
	String status;// 状态

	public String getSku() {
		return sku;
	}

	public void setSku(String sku) {
		this.sku = sku;
	}

	public double getCount() {
		return count;
	}

	public void setCount(double count) {
		this.count = count;
	}

	public String getCompanyId() {
		return companyId;
	}

	public void setCompanyId(String companyId) {
		this.companyId = companyId;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getLicenseKey() {
		return licenseKey;
	}

	public void setLicenseKey(String licenseKey) {
		this.licenseKey = licenseKey;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public String getConsignee() {
		return consignee;
	}

	public void setConsignee(String consignee) {
		this.consignee = consignee;
	}

	public String getConsignor() {
		return consignor;
	}

	public void setConsignor(String consignor) {
		this.consignor = consignor;
	}

	public String getTradeMode() {
		return tradeMode;
	}

	public void setTradeMode(String tradeMode) {
		this.tradeMode = tradeMode;
	}

	public String getExportingCountry() {
		return exportingCountry;
	}

	public void setExportingCountry(String exportingCountry) {
		this.exportingCountry = exportingCountry;
	}

	public String getImportedCountry() {
		return importedCountry;
	}

	public void setImportedCountry(String importedCountry) {
		this.importedCountry = importedCountry;
	}

	public String getCountryOfOrigin() {
		return countryOfOrigin;
	}

	public void setCountryOfOrigin(String countryOfOrigin) {
		this.countryOfOrigin = countryOfOrigin;
	}

	public String getPortOfClearance() {
		return portOfClearance;
	}

	public void setPortOfClearance(String portOfClearance) {
		this.portOfClearance = portOfClearance;
	}

	public String getSourceOffOreignExchange() {
		return sourceOffOreignExchange;
	}

	public void setSourceOffOreignExchange(String sourceOffOreignExchange) {
		this.sourceOffOreignExchange = sourceOffOreignExchange;
	}

	public String getPaymentMethod() {
		return paymentMethod;
	}

	public void setPaymentMethod(String paymentMethod) {
		this.paymentMethod = paymentMethod;
	}

	public String getEndUser() {
		return endUser;
	}

	public void setEndUser(String endUser) {
		this.endUser = endUser;
	}

	public String getFinalPurpose() {
		return finalPurpose;
	}

	public void setFinalPurpose(String finalPurpose) {
		this.finalPurpose = finalPurpose;
	}

	public String getGoodsName() {
		return goodsName;
	}

	public void setGoodsName(String goodsName) {
		this.goodsName = goodsName;
	}

	public String getGoodsCode() {
		return goodsCode;
	}

	public void setGoodsCode(String goodsCode) {
		this.goodsCode = goodsCode;
	}

	public String getShippingType() {
		return shippingType;
	}

	public void setShippingType(String shippingType) {
		this.shippingType = shippingType;
	}

	public String getExpirationDateOfLicense() {
		return expirationDateOfLicense;
	}

	public void setExpirationDateOfLicense(String expirationDateOfLicense) {
		this.expirationDateOfLicense = expirationDateOfLicense;
	}

	public String getCertificationDate() {
		return certificationDate;
	}

	public void setCertificationDate(String certificationDate) {
		this.certificationDate = certificationDate;
	}

	public String getMemo() {
		return memo;
	}

	public void setMemo(String memo) {
		this.memo = memo;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
}
