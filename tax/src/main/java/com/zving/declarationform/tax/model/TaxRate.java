package com.zving.declarationform.tax.model;

/**
 * 商品税率
 * 
 * @author 王育春
 * @mail wyuch@zving.com
 * @date 2017年10月18日
 */
public class TaxRate {
	long id;
	String SKU;// 货号
	String SKUName;// 货号名称，冗余字段
	double rate;// 税率
	double exemption;// 免征额
	String modifyDate;
	String unit;
	String taxNum;
	String range;
	String taxGoodsType;

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

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getModifyDate() {
		return modifyDate;
	}

	public void setModifyDate(String modifyDate) {
		this.modifyDate = modifyDate;
	}

	public String getUnit() {
		return unit;
	}

	public void setUnit(String unit) {
		this.unit = unit;
	}

	public String getRange() {
		return range;
	}

	public void setRange(String range) {
		this.range = range;
	}

	public String getTaxNum() {
		return taxNum;
	}

	public void setTaxNum(String taxNum) {
		this.taxNum = taxNum;
	}

	public String getTaxGoodsType() {
		return taxGoodsType;
	}

	public void setTaxGoodsType(String taxGoodsType) {
		this.taxGoodsType = taxGoodsType;
	}
}
