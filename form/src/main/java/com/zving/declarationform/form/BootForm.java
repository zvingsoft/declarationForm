
package com.zving.declarationform.form;

import io.servicecomb.foundation.common.utils.BeanUtils;
import io.servicecomb.foundation.common.utils.Log4jUtils;

/**
 * 启动报关单微服务
 * 
 * @author 王育春
 * @mail wyuch@zving.com
 * @date 2017年10月18日
 */
public interface BootForm {

	public static void main(String[] args) throws Exception {
		Log4jUtils.init();
		BeanUtils.init();
	}

}
