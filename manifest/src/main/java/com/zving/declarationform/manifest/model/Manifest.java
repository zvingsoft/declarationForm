package com.zving.declarationform.manifest.model;

import java.util.ArrayList;

/**
 * 舱单
 * 
 * @author 王育春
 * @mail wyuch@zving.com
 * @date 2017年10月18日
 */
public class Manifest {
	long id;// id
	String manifestNum;// 舱单编号
	String receiveCompany;// 收件公司
	String goodsName;// 商品名称
	String sendAddress;// 收货地址
	String receivePerson;// 收货人
	String telephone;// 电话
	String location;// 位置
	String status;// 状态，0为未处理，1为己处理
	ArrayList<ManifestItem> items;

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public ArrayList<ManifestItem> getItems() {
		return items;
	}

	public void setItems(ArrayList<ManifestItem> items) {
		this.items = items;
	}

	public String getManifestNum() {
		return manifestNum;
	}

	public void setManifestNum(String manifestNum) {
		this.manifestNum = manifestNum;
	}

	public String getReceiveCompany() {
		return receiveCompany;
	}

	public void setReceiveCompany(String receiveCompany) {
		this.receiveCompany = receiveCompany;
	}

	public String getGoodsName() {
		return goodsName;
	}

	public void setGoodsName(String goodsName) {
		this.goodsName = goodsName;
	}

	public String getSendAddress() {
		return sendAddress;
	}

	public void setSendAddress(String sendAddress) {
		this.sendAddress = sendAddress;
	}

	public String getReceivePerson() {
		return receivePerson;
	}

	public void setReceivePerson(String receivePerson) {
		this.receivePerson = receivePerson;
	}

	public String getTelephone() {
		return telephone;
	}

	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}

}
