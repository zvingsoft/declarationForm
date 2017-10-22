package com.zving.declarationform.model;

import java.util.ArrayList;

/**
 * 报关单
 * 
 * @author 徐俊豪
 * @mail xujunhao@zving.com
 * @date 2017年10月20日
 */
public class DeclarationForm {
	String id;
	String declarationtype;
	String declarationtypename;
	String preentrynumber;
	String customsnumber;
	String importorexportport;
	String recordnumber;
	String importorexportdate;
	String declarationdate;
	String managementunit;
	String shippingtype;
	String shippingtools;
	String shippingnumbers;
	String forwardingunit;
	String tradingtype;
	String exemptionnature;
	String settlementtype;
	String licensekey;
	String startorarrivalcountry;
	String loadingorfingerport;
	String destinationorconsignmentplace;
	String approvalnumber;
	String transactionmethod;
	String freight;
	String premium;
	String incidental;
	String agreementnumber;
	String goodsnumber;
	String packagingtype;
	String grossweight;
	String netweight;
	String containernumber;
	String documentsattached;
	String purposeormanufacturer;
	String shippingmarksandremarks;
	String taxpaidornot;
	String entryclerk;
	String entryunit;
	String customsbroker;
	String declarationunit;
	String unitaddress;
	String zipcode;
	String telephone;
	String fillingdate;
	String auditstatus;
	String auditstatusname;
	String entrydate;

	ArrayList<Document> documents = new ArrayList<>();// 单证信息
	ArrayList<PackingItem> packingList = new ArrayList<>();// 装箱清单

	public String getDeclarationtype() {
		return declarationtype;
	}

	public void setDeclarationtype(String declarationtype) {
		this.declarationtype = declarationtype;
	}

	public String getDeclarationtypename() {
		return declarationtypename;
	}

	public void setDeclarationtypename(String declarationtypename) {
		this.declarationtypename = declarationtypename;
	}

	public String getPreentrynumber() {
		return preentrynumber;
	}

	public void setPreentrynumber(String preentrynumber) {
		this.preentrynumber = preentrynumber;
	}

	public String getCustomsnumber() {
		return customsnumber;
	}

	public void setCustomsnumber(String customsnumber) {
		this.customsnumber = customsnumber;
	}

	public String getImportorexportport() {
		return importorexportport;
	}

	public void setImportorexportport(String importorexportport) {
		this.importorexportport = importorexportport;
	}

	public String getRecordnumber() {
		return recordnumber;
	}

	public void setRecordnumber(String recordnumber) {
		this.recordnumber = recordnumber;
	}

	public String getImportorexportdate() {
		return importorexportdate;
	}

	public void setImportorexportdate(String importorexportdate) {
		this.importorexportdate = importorexportdate;
	}

	public String getDeclarationdate() {
		return declarationdate;
	}

	public void setDeclarationdate(String declarationdate) {
		this.declarationdate = declarationdate;
	}

	public String getManagementunit() {
		return managementunit;
	}

	public void setManagementunit(String managementunit) {
		this.managementunit = managementunit;
	}

	public String getShippingtype() {
		return shippingtype;
	}

	public void setShippingtype(String shippingtype) {
		this.shippingtype = shippingtype;
	}

	public String getShippingtools() {
		return shippingtools;
	}

	public void setShippingtools(String shippingtools) {
		this.shippingtools = shippingtools;
	}

	public String getShippingnumbers() {
		return shippingnumbers;
	}

	public void setShippingnumbers(String shippingnumbers) {
		this.shippingnumbers = shippingnumbers;
	}

	public String getForwardingunit() {
		return forwardingunit;
	}

	public void setForwardingunit(String forwardingunit) {
		this.forwardingunit = forwardingunit;
	}

	public String getTradingtype() {
		return tradingtype;
	}

	public void setTradingtype(String tradingtype) {
		this.tradingtype = tradingtype;
	}

	public String getExemptionnature() {
		return exemptionnature;
	}

	public void setExemptionnature(String exemptionnature) {
		this.exemptionnature = exemptionnature;
	}

	public String getSettlementtype() {
		return settlementtype;
	}

	public void setSettlementtype(String settlementtype) {
		this.settlementtype = settlementtype;
	}

	public String getLicensekey() {
		return licensekey;
	}

	public void setLicensekey(String licensekey) {
		this.licensekey = licensekey;
	}

	public String getStartorarrivalcountry() {
		return startorarrivalcountry;
	}

	public void setStartorarrivalcountry(String startorarrivalcountry) {
		this.startorarrivalcountry = startorarrivalcountry;
	}

	public String getLoadingorfingerport() {
		return loadingorfingerport;
	}

	public void setLoadingorfingerport(String loadingorfingerport) {
		this.loadingorfingerport = loadingorfingerport;
	}

	public String getDestinationorconsignmentplace() {
		return destinationorconsignmentplace;
	}

	public void setDestinationorconsignmentplace(String destinationorconsignmentplace) {
		this.destinationorconsignmentplace = destinationorconsignmentplace;
	}

	public String getApprovalnumber() {
		return approvalnumber;
	}

	public void setApprovalnumber(String approvalnumber) {
		this.approvalnumber = approvalnumber;
	}

	public String getTransactionmethod() {
		return transactionmethod;
	}

	public void setTransactionmethod(String transactionmethod) {
		this.transactionmethod = transactionmethod;
	}

	public String getFreight() {
		return freight;
	}

	public void setFreight(String freight) {
		this.freight = freight;
	}

	public String getPremium() {
		return premium;
	}

	public void setPremium(String premium) {
		this.premium = premium;
	}

	public String getIncidental() {
		return incidental;
	}

	public void setIncidental(String incidental) {
		this.incidental = incidental;
	}

	public String getAgreementnumber() {
		return agreementnumber;
	}

	public void setAgreementnumber(String agreementnumber) {
		this.agreementnumber = agreementnumber;
	}

	public String getGoodsnumber() {
		return goodsnumber;
	}

	public void setGoodsnumber(String goodsnumber) {
		this.goodsnumber = goodsnumber;
	}

	public String getPackagingtype() {
		return packagingtype;
	}

	public void setPackagingtype(String packagingtype) {
		this.packagingtype = packagingtype;
	}

	public String getGrossweight() {
		return grossweight;
	}

	public void setGrossweight(String grossweight) {
		this.grossweight = grossweight;
	}

	public String getNetweight() {
		return netweight;
	}

	public void setNetweight(String netweight) {
		this.netweight = netweight;
	}

	public String getContainernumber() {
		return containernumber;
	}

	public void setContainernumber(String containernumber) {
		this.containernumber = containernumber;
	}

	public String getDocumentsattached() {
		return documentsattached;
	}

	public void setDocumentsattached(String documentsattached) {
		this.documentsattached = documentsattached;
	}

	public String getPurposeormanufacturer() {
		return purposeormanufacturer;
	}

	public void setPurposeormanufacturer(String purposeormanufacturer) {
		this.purposeormanufacturer = purposeormanufacturer;
	}

	public String getShippingmarksandremarks() {
		return shippingmarksandremarks;
	}

	public void setShippingmarksandremarks(String shippingmarksandremarks) {
		this.shippingmarksandremarks = shippingmarksandremarks;
	}

	public String getTaxpaidornot() {
		return taxpaidornot;
	}

	public void setTaxpaidornot(String taxpaidornot) {
		this.taxpaidornot = taxpaidornot;
	}

	public String getEntryclerk() {
		return entryclerk;
	}

	public void setEntryclerk(String entryclerk) {
		this.entryclerk = entryclerk;
	}

	public String getEntryunit() {
		return entryunit;
	}

	public void setEntryunit(String entryunit) {
		this.entryunit = entryunit;
	}

	public String getCustomsbroker() {
		return customsbroker;
	}

	public void setCustomsbroker(String customsbroker) {
		this.customsbroker = customsbroker;
	}

	public String getDeclarationunit() {
		return declarationunit;
	}

	public void setDeclarationunit(String declarationunit) {
		this.declarationunit = declarationunit;
	}

	public String getUnitaddress() {
		return unitaddress;
	}

	public void setUnitaddress(String unitaddress) {
		this.unitaddress = unitaddress;
	}

	public String getZipcode() {
		return zipcode;
	}

	public void setZipcode(String zipcode) {
		this.zipcode = zipcode;
	}

	public String getTelephone() {
		return telephone;
	}

	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}

	public String getFillingdate() {
		return fillingdate;
	}

	public void setFillingdate(String fillingdate) {
		this.fillingdate = fillingdate;
	}

	public String getAuditstatus() {
		return auditstatus;
	}

	public void setAuditstatus(String auditstatus) {
		this.auditstatus = auditstatus;
	}

	public String getAuditstatusname() {
		return auditstatusname;
	}

	public void setAuditstatusname(String auditstatusname) {
		this.auditstatusname = auditstatusname;
	}

	public String getEntrydate() {
		return entrydate;
	}

	public void setEntrydate(String entrydate) {
		this.entrydate = entrydate;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

}