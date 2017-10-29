package com.zving.declarationform.mainui.controller;

import com.huawei.paas.cse.tcc.annotation.TccTransaction;

/**
 * @author 王育春
 * @mail wyuch@zving.com
 * @date 2017年10月29日
 */
public class TccTrySuccessConfirmSuccess {
	@TccTransaction(cancelMethod = "tccCancel", confirmMethod = "tccConfirm")
	public String tccTry() {
		return "";
	}

	public String tccConfirm() {
		return "";
	}

	public String tccCancel() {
		return "";
	}
}
