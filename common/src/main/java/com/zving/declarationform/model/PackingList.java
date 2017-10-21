package com.zving.declarationform.model;

/**
 * @author 王育春
 * @mail wyuch@zving.com
 * @date 2017年10月17日
 */
public class PackingList {
	String id;
	String declarationid;
	String name;
	String number;
	String productcountry;
	String singleprice;
	String totalprice;
	String currency;
	String exemption;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getDeclarationid() {
		return declarationid;
	}

	public void setDeclarationid(String declarationid) {
		this.declarationid = declarationid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getNumber() {
		return number;
	}

	public void setNumber(String number) {
		this.number = number;
	}

	public String getProductcountry() {
		return productcountry;
	}

	public void setProductcountry(String productcountry) {
		this.productcountry = productcountry;
	}

	public String getSingleprice() {
		return singleprice;
	}

	public void setSingleprice(String singleprice) {
		this.singleprice = singleprice;
	}

	public String getTotalprice() {
		return totalprice;
	}

	public void setTotalprice(String totalprice) {
		this.totalprice = totalprice;
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
