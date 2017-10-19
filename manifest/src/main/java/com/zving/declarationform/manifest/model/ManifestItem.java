package com.zving.declarationform.manifest.model;

/**
 * 舱单明细
 * 
 * @author 王育春
 * @mail wyuch@zving.com
 * @date 2017年10月19日
 */
public class ManifestItem {
	String goodsType;
	String name;
	String unit;
	double quantity;

	public String getGoodsType() {
		return goodsType;
	}

	public void setGoodsType(String goodsType) {
		this.goodsType = goodsType;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUnit() {
		return unit;
	}

	public void setUnit(String unit) {
		this.unit = unit;
	}

	public double getQuantity() {
		return quantity;
	}

	public void setQuantity(double quantity) {
		this.quantity = quantity;
	}

}
