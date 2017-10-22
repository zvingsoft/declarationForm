package com.zving.declarationform.model;

/**
 * @author hhp
 * @mail hhp@zving.com
 * @date 2017年10月21日
 */
public class TaxInfo {

	private long id;
	private String taxnum;
	private String taxgoodstype;
	private String unit;
	private String range;
	private String taxrate;
	private String freemoney;
	private String modifydate;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTaxnum() {
		return taxnum;
	}

	public void setTaxnum(String taxnum) {
		this.taxnum = taxnum;
	}

	public String getTaxgoodstype() {
		return taxgoodstype;
	}

	public void setTaxgoodstype(String taxgoodstype) {
		this.taxgoodstype = taxgoodstype;
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

	public String getTaxrate() {
		return taxrate;
	}

	public void setTaxrate(String taxrate) {
		this.taxrate = taxrate;
	}

	public String getFreemoney() {
		return freemoney;
	}

	public void setFreemoney(String freemoney) {
		this.freemoney = freemoney;
	}

	public String getModifydate() {
		return modifydate;
	}

	public void setModifydate(String modifydate) {
		this.modifydate = modifydate;
	}

}
