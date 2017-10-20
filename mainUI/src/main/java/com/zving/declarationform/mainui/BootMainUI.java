package com.zving.declarationform.mainui;

import io.servicecomb.foundation.common.utils.BeanUtils;
import io.servicecomb.foundation.common.utils.Log4jUtils;

public class BootMainUI {

	public static void main(String[] args) throws Exception {
		Log4jUtils.init();
		BeanUtils.init();
	}
}
