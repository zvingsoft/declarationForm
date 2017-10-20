package com.zving.declarationform.form.consumer;

import com.zving.declarationform.model.DeclarationForm;

/**
 * 计税服务
 * 
 * @author 王育春
 * @mail wyuch@zving.com
 * @date 2017年10月18日
 */
public interface TaxServiceSchema {
	/**
	 * 计算税款
	 */
	String compute(DeclarationForm form);

	/**
	 * 确认缴税
	 */
	String confirm(DeclarationForm form);

}
