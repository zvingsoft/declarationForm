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
	String SKU;// 许可的商品货号
	double count;// 许可的数量
	String companyId;// 颁发给哪个单位
	String licenseKey;// 许可证号
	String importAndExportcode;//
	String companyName;// 进口商
	String consignee;// 收货人
	String exportingCountry;// 出口国
	String countryOfOrigin;// 原产国家
	String portOfClearance;
	String tradeMode;// 贸易方式
	String shippingType;
	String goodsTypeIds;
	String goodsTypes;
	String companyAddress;
	String companyType;
	String legalRepresentative;
	String competentDepartment;
	String registeredCapital;
	String certificationDate;
	String type;
	String status;

	public String getSKU() {
		return SKU;
	}

	public void setSKU(String sKU) {
		SKU = sKU;
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

	public String getImportAndExportcode() {
		return importAndExportcode;
	}

	public void setImportAndExportcode(String importAndExportcode) {
		this.importAndExportcode = importAndExportcode;
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

	public String getExportingCountry() {
		return exportingCountry;
	}

	public void setExportingCountry(String exportingCountry) {
		this.exportingCountry = exportingCountry;
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

	public String getTradeMode() {
		return tradeMode;
	}

	public void setTradeMode(String tradeMode) {
		this.tradeMode = tradeMode;
	}

	public String getShippingType() {
		return shippingType;
	}

	public void setShippingType(String shippingType) {
		this.shippingType = shippingType;
	}

	public String getGoodsTypeIds() {
		return goodsTypeIds;
	}

	public void setGoodsTypeIds(String goodsTypeIds) {
		this.goodsTypeIds = goodsTypeIds;
	}

	public String getGoodsTypes() {
		return goodsTypes;
	}

	public void setGoodsTypes(String goodsTypes) {
		this.goodsTypes = goodsTypes;
	}

	public String getCompanyAddress() {
		return companyAddress;
	}

	public void setCompanyAddress(String companyAddress) {
		this.companyAddress = companyAddress;
	}

	public String getCompanyType() {
		return companyType;
	}

	public void setCompanyType(String companyType) {
		this.companyType = companyType;
	}

	public String getLegalRepresentative() {
		return legalRepresentative;
	}

	public void setLegalrepresentative(String legalRepresentative) {
		this.legalRepresentative = legalRepresentative;
	}

	public String getCompetentDepartment() {
		return competentDepartment;
	}

	public void setCompetentDepartment(String competentDepartment) {
		this.competentDepartment = competentDepartment;
	}

	public String getRegisteredCapital() {
		return registeredCapital;
	}

	public void setRegisteredCapital(String registeredCapital) {
		this.registeredCapital = registeredCapital;
	}

	public String getCertificationDate() {
		return certificationDate;
	}

	public void setCertificationDate(String certificationDate) {
		this.certificationDate = certificationDate;
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
