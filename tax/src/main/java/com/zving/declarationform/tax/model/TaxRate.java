package com.zving.declarationform.tax.model;

/**
 * 商品税率
 * 
 * @author 王育春
 * @mail wyuch@zving.com
 * @date 2017年10月18日
 */
public class TaxRate {
	String SKU;// 货号
	String SKUName;// 货号名称，冗余字段
	double rate;// 税率
	double exemption;// 免征额

	public String getSKU() {
		return SKU;
	}

	public void setSKU(String sKU) {
		SKU = sKU;
	}

	public String getSKUName() {
		return SKUName;
	}

	public void setSKUName(String sKUName) {
		SKUName = sKUName;
	}

	public double getRate() {
		return rate;
	}

	public void setRate(double rate) {
		this.rate = rate;
	}

	public double getExemption() {
		return exemption;
	}

	public void setExemption(double exemption) {
		this.exemption = exemption;
	}
}
