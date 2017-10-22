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

}
