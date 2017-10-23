package com.zving.declarationform.model;

/**
 * 商品货号（代表一种限定类型、名称、规则的货品）
 * 
 * @author 王育春
 * @mail wyuch@zving.com
 * @date 2017年10月17日
 */
public class SKU {
	long id;
	String sn;// 编号
	String goodsType;// 商品类型
	String name;// 商品名称
	String spec;// 商品规格
	String unit;// 商品单位

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getSn() {
		return sn;
	}

	public void setSn(String sn) {
		this.sn = sn;
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
