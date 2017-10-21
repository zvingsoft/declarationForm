package com.zving.declarationform.model;

import java.util.Date;

/**
 * @author liwenbin
 * @mail lwb@zving.com
 * @date 2017年10月20日
 */
public class CottonQuota {
    private long id;
    private String number;
    private long companyid;
    private String companyname;
    private String bankcreditrating;
    private int application;
    private int allocation;
    private int used;
    private String auditstatus;
    private String address;
    private String phone;
    private String fax;
    private String postcode;
    private Date addtime;
    private String adduser;
    private Date modifytime;
    private String modifyuser;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public long getCompanyid() {
        return companyid;
    }

    public void setCompanyid(long companyid) {
        this.companyid = companyid;
    }

    public String getCompanyname() {
        return companyname;
    }

    public void setCompanyname(String companyname) {
        this.companyname = companyname;
    }

    public String getBankcreditrating() {
        return bankcreditrating;
    }

    public void setBankcreditrating(String bankcreditrating) {
        this.bankcreditrating = bankcreditrating;
    }

    public int getApplication() {
        return application;
    }

    public void setApplication(int application) {
        this.application = application;
    }

    public int getAllocation() {
        return allocation;
    }

    public void setAllocation(int allocation) {
        this.allocation = allocation;
    }

    public int getUsed() {
        return used;
    }

    public void setUsed(int used) {
        this.used = used;
    }

    public String getAuditstatus() {
        return auditstatus;
    }

    public void setAuditstatus(String auditstatus) {
        this.auditstatus = auditstatus;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getFax() {
        return fax;
    }

    public void setFax(String fax) {
        this.fax = fax;
    }

    public String getPostcode() {
        return postcode;
    }

    public void setPostcode(String postcode) {
        this.postcode = postcode;
    }

    public String getAdduser() {
        return adduser;
    }

    public void setAdduser(String adduser) {
        this.adduser = adduser;
    }

    public Date getAddtime() {
        return addtime;
    }

    public void setAddtime(Date addtime) {
        this.addtime = addtime;
    }

    public Date getModifytime() {
        return modifytime;
    }

    public void setModifytime(Date modifytime) {
        this.modifytime = modifytime;
    }

    public String getModifyuser() {
        return modifyuser;
    }

    public void setModifyuser(String modifyuser) {
        this.modifyuser = modifyuser;
    }

}
