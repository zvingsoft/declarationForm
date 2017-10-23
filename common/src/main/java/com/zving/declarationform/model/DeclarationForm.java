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
	String declarationType;
	String declarationTypeName;
	String preentryNumber;
	String customsNumber;
	String importOrExportPort;
	String recordNumber;
	String importOrExportDate;
	String declarationDate;
	String managementUnit;
	String shippingType;
	String shippingTools;
	String shippingNumbers;
	String forwardingUnit;
	String tradingType;
	String exemptionNature;
	String settlementType;
	String licenseKey;
	String startOrArrivalCountry;
	String loadingOrFingerPort;
	String destinationOrConsignmentPlace;
	String approvalNumber;
	String transactionMethod;
	String freight;
	String premium;
	String incidental;
	String agreementNumber;
	String goodsNumber;
	String packagingType;
	String grossWeight;
	String netWeight;
	String containerNumber;
	String documentSattached;
	String purposeOrManufacturer;
	String shippingMarksAndRemarks;
	String taxpaidOrNot;
	String entryClerk;
	String entryUnit;
	String customsBroker;
	String declarationUnit;
	String unitAddress;
	String zipCode;
	String telephone;
	String fillingDate;
	String auditStatus;
	String auditStatusName;
	String entryDate;

	ArrayList<Document> documents;// 单证信息
	ArrayList<PackingItem> packingList;// 装箱清单


	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public ArrayList<Document> getDocuments() {
		return documents;
	}

	public void setDocuments(ArrayList<Document> documents) {
		this.documents = documents;
	}

	public ArrayList<PackingItem> getPackingList() {
		return packingList;
	}

	public void setPackingList(ArrayList<PackingItem> packingList) {
		this.packingList = packingList;
	}

	public String getDeclarationType() {
		return declarationType;
	}

	public void setDeclarationType(String declarationType) {
		this.declarationType = declarationType;
	}

	public String getDeclarationTypeName() {
		return declarationTypeName;
	}

	public void setDeclarationTypeName(String declarationTypeName) {
		this.declarationTypeName = declarationTypeName;
	}

	public String getPreentryNumber() {
		return preentryNumber;
	}

	public void setPreentryNumber(String preentryNumber) {
		this.preentryNumber = preentryNumber;
	}

	public String getCustomsNumber() {
		return customsNumber;
	}

	public void setCustomsNumber(String customsNumber) {
		this.customsNumber = customsNumber;
	}

	public String getImportOrExportPort() {
		return importOrExportPort;
	}

	public void setImportOrExportPort(String importOrExportPort) {
		this.importOrExportPort = importOrExportPort;
	}

	public String getRecordNumber() {
		return recordNumber;
	}

	public void setRecordNumber(String recordNumber) {
		this.recordNumber = recordNumber;
	}

	public String getImportOrExportDate() {
		return importOrExportDate;
	}

	public void setImportOrExportDate(String importOrExportDate) {
		this.importOrExportDate = importOrExportDate;
	}

	public String getDeclarationDate() {
		return declarationDate;
	}

	public void setDeclarationDate(String declarationDate) {
		this.declarationDate = declarationDate;
	}

	public String getManagementUnit() {
		return managementUnit;
	}

	public void setManagementUnit(String managementUnit) {
		this.managementUnit = managementUnit;
	}

	public String getShippingType() {
		return shippingType;
	}

	public void setShippingType(String shippingType) {
		this.shippingType = shippingType;
	}

	public String getShippingTools() {
		return shippingTools;
	}

	public void setShippingTools(String shippingTools) {
		this.shippingTools = shippingTools;
	}

	public String getShippingNumbers() {
		return shippingNumbers;
	}

	public void setShippingNumbers(String shippingNumbers) {
		this.shippingNumbers = shippingNumbers;
	}

	public String getForwardingUnit() {
		return forwardingUnit;
	}

	public void setForwardingUnit(String forwardingUnit) {
		this.forwardingUnit = forwardingUnit;
	}

	public String getTradingType() {
		return tradingType;
	}

	public void setTradingType(String tradingType) {
		this.tradingType = tradingType;
	}

	public String getExemptionNature() {
		return exemptionNature;
	}

	public void setExemptionNature(String exemptionNature) {
		this.exemptionNature = exemptionNature;
	}

	public String getSettlementType() {
		return settlementType;
	}

	public void setSettlementType(String settlementType) {
		this.settlementType = settlementType;
	}

	public String getLicenseKey() {
		return licenseKey;
	}

	public void setLicenseKey(String licenseKey) {
		this.licenseKey = licenseKey;
	}

	public String getStartOrArrivalCountry() {
		return startOrArrivalCountry;
	}

	public void setStartOrArrivalCountry(String startOrArrivalCountry) {
		this.startOrArrivalCountry = startOrArrivalCountry;
	}

	public String getLoadingOrFingerPort() {
		return loadingOrFingerPort;
	}

	public void setLoadingOrFingerPort(String loadingOrFingerPort) {
		this.loadingOrFingerPort = loadingOrFingerPort;
	}

	public String getDestinationOrConsignmentPlace() {
		return destinationOrConsignmentPlace;
	}

	public void setDestinationOrConsignmentPlace(String destinationOrConsignmentPlace) {
		this.destinationOrConsignmentPlace = destinationOrConsignmentPlace;
	}

	public String getApprovalNumber() {
		return approvalNumber;
	}

	public void setApprovalNumber(String approvalNumber) {
		this.approvalNumber = approvalNumber;
	}

	public String getTransactionMethod() {
		return transactionMethod;
	}

	public void setTransactionMethod(String transactionMethod) {
		this.transactionMethod = transactionMethod;
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

	public String getAgreementNumber() {
		return agreementNumber;
	}

	public void setAgreementNumber(String agreementNumber) {
		this.agreementNumber = agreementNumber;
	}

	public String getGoodsNumber() {
		return goodsNumber;
	}

	public void setGoodsNumber(String goodsNumber) {
		this.goodsNumber = goodsNumber;
	}

	public String getPackagingType() {
		return packagingType;
	}

	public void setPackagingType(String packagingType) {
		this.packagingType = packagingType;
	}

	public String getGrossWeight() {
		return grossWeight;
	}

	public void setGrossWeight(String grossWeight) {
		this.grossWeight = grossWeight;
	}

	public String getNetWeight() {
		return netWeight;
	}

	public void setNetWeight(String netWeight) {
		this.netWeight = netWeight;
	}

	public String getContainerNumber() {
		return containerNumber;
	}

	public void setContainerNumber(String containerNumber) {
		this.containerNumber = containerNumber;
	}

	public String getDocumentSattached() {
		return documentSattached;
	}

	public void setDocumentSattached(String documentSattached) {
		this.documentSattached = documentSattached;
	}

	public String getPurposeOrManufacturer() {
		return purposeOrManufacturer;
	}

	public void setPurposeOrManufacturer(String purposeOrManufacturer) {
		this.purposeOrManufacturer = purposeOrManufacturer;
	}

	public String getShippingMarksAndRemarks() {
		return shippingMarksAndRemarks;
	}

	public void setShippingMarksAndRemarks(String shippingMarksAndRemarks) {
		this.shippingMarksAndRemarks = shippingMarksAndRemarks;
	}

	public String getTaxpaidOrNot() {
		return taxpaidOrNot;
	}

	public void setTaxpaidOrNot(String taxpaidOrNot) {
		this.taxpaidOrNot = taxpaidOrNot;
	}

	public String getEntryClerk() {
		return entryClerk;
	}

	public void setEntryClerk(String entryClerk) {
		this.entryClerk = entryClerk;
	}

	public String getEntryUnit() {
		return entryUnit;
	}

	public void setEntryUnit(String entryUnit) {
		this.entryUnit = entryUnit;
	}

	public String getCustomsBroker() {
		return customsBroker;
	}

	public void setCustomsBroker(String customsBroker) {
		this.customsBroker = customsBroker;
	}

	public String getDeclarationUnit() {
		return declarationUnit;
	}

	public void setDeclarationUnit(String declarationUnit) {
		this.declarationUnit = declarationUnit;
	}

	public String getUnitAddress() {
		return unitAddress;
	}

	public void setUnitAddress(String unitAddress) {
		this.unitAddress = unitAddress;
	}

	public String getZipCode() {
		return zipCode;
	}

	public void setZipCode(String zipCode) {
		this.zipCode = zipCode;
	}

	public String getTelephone() {
		return telephone;
	}

	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}

	public String getFillingDate() {
		return fillingDate;
	}

	public void setFillingDate(String fillingDate) {
		this.fillingDate = fillingDate;
	}

	public String getAuditStatus() {
		return auditStatus;
	}

	public void setAuditStatus(String auditStatus) {
		this.auditStatus = auditStatus;
	}

	public String getAuditStatusName() {
		return auditStatusName;
	}

	public void setAuditStatusName(String auditStatusName) {
		this.auditStatusName = auditStatusName;
	}

	public String getEntryDate() {
		return entryDate;
	}

	public void setEntryDate(String entryDate) {
		this.entryDate = entryDate;
	}

}
