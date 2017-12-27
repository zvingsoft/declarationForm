package com.zving.declarationform.model;

/**
 * 商品项
 * 
 * @author 王育春
 * @mail wyuch@zving.com
 * @date 2017年10月17日
 */
public class PackingItem {
	long id;
	String SKU;// SKU编号
	double amount;// 数量及单位
	String name;// 商品名称、规格型号
	double singlePrice;// 单价
	double totalPrice;// 总价
	String country;// 原产国/最终目的国
	String currency;// 币制
	String exemption;// 征免
	double tax;// 关税
	double taxCutting;// 税收减免

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getSKU() {
		return SKU;
	}

	public void setSKU(String sKU) {
		SKU = sKU;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public double getSinglePrice() {
		return singlePrice;
	}

	public void setSinglePrice(double singlePrice) {
		this.singlePrice = singlePrice;
	}

	public double getTotalPrice() {
		return totalPrice;
	}

	public void setTotalPrice(double totalPrice) {
		this.totalPrice = totalPrice;
	}

	public double getTax() {
		return tax;
	}

	public void setTax(double tax) {
		this.tax = tax;
	}

	public double getTaxCutting() {
		return taxCutting;
	}

	public void setTaxCutting(double taxCutting) {
		this.taxCutting = taxCutting;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getCurrency() {
		return currency;
	}

	public void setCurrency(String currency) {
		this.currency = currency;
	}

	public String getExemption() {
		return exemption;
	}

	public void setExemption(String exemption) {
		this.exemption = exemption;
	}

}
