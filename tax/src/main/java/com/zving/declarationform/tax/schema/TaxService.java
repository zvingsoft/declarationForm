package com.zving.declarationform.tax.schema;

import com.zving.declarationform.dto.ResponseDTO;
import com.zving.declarationform.model.DeclarationForm;

/**
 * 计税服务
 * 
 * @author 王育春
 * @mail wyuch@zving.com
 * @date 2017年10月18日
 */
public interface TaxService {
	/**
	 * 计算税款
	 */
	ResponseDTO compute(DeclarationForm form);

	/**
	 * 计税检查
	 */
	String check(DeclarationForm form);

}
