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
	String skuName;// 许可的商品名称
	double count;// 许可数量
	String licenseKey;// 许可证号
	String companyName;// 进口/出口商
	String expirationDateOfLicense;// 许可证截止日期
	String memo;// 备注
	String type;// 类型

	public long getId() {
		return id;
	}

	public void setId(long id) {
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

	public String getExpirationDateOfLicense() {
		return expirationDateOfLicense;
	}

	public void setExpirationDateOfLicense(String expirationDateOfLicense) {
		this.expirationDateOfLicense = expirationDateOfLicense;
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

}
