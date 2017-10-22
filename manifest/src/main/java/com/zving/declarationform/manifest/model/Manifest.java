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
	String location;// 位置
	long id;// id
	String status;// 状态，0为未处理，1为己处理
	ArrayList<ManifestItem> items = new ArrayList<>();

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

}
