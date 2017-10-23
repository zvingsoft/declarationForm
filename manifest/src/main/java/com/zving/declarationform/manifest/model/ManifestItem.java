package com.zving.declarationform.manifest.model;

/**
 * 舱单明细
 * 
 * @author 王育春
 * @mail wyuch@zving.com
 * @date 2017年10月19日
 */
public class ManifestItem {
	String SKU;// 货号
	String SKUName;// 货号名称，冗余字段
	double quantity;// 数量

	public String getSKU() {
		return SKU;
	}

	public void setSKU(String sKU) {
		SKU = sKU;
	}

	public double getQuantity() {
		return quantity;
	}

	public void setQuantity(double quantity) {
		this.quantity = quantity;
	}

	public String getSKUName() {
		return SKUName;
	}

	public void setSKUName(String sKUName) {
		SKUName = sKUName;
	}

}
