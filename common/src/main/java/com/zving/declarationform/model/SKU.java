package com.zving.declarationform.model;

/**
 * 商品货号（代表一种限定类型、名称、规则的货品）
 * 
 * @author 王育春
 * @mail wyuch@zving.com
 * @date 2017年10月17日
 */
public class SKU {
	String SN;// 编号
	String goodsType;// 商品类型
	String name;// 商品名称
	String spec;// 商品规格
	String unit;// 商品单位
	public String getSN() {
		return SN;
	}

	public void setSN(String sN) {
		SN = sN;
	}

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

	public String getSpec() {
		return spec;
	}

	public void setSpec(String spec) {
		this.spec = spec;
	}

	public String getUnit() {
		return unit;
	}

	public void setUnit(String unit) {
		this.unit = unit;
	}
	
}
