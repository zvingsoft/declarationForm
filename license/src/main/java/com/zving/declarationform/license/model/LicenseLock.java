package com.zving.declarationform.license.model;

/**
 * TCC事务所资源锁定
 * 
 * @author 王育春
 * @mail wyuch@zving.com
 * @date 2017年10月27日
 */
public class LicenseLock {
	long id;// 许可证号
	double count;// 锁定的数量

	public double getCount() {
		return count;
	}

	public void setCount(double count) {
		this.count = count;
	}
}
