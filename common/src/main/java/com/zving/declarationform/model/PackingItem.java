package com.zving.declarationform.model;

/**
 * 商品项
 * 
 * @author 王育春
 * @mail wyuch@zving.com
 * @date 2017年10月17日
 */
public class PackingItem {
	String SKU;// SKU编号
	double amount;// 数量
	String name;
	double singlePrice;
	double totalPrice;
	double tax;// 关税
	double taxCutting;// 税收减免

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

}
