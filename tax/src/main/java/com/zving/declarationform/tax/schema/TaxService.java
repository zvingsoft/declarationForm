package com.zving.declarationform.tax.schema;

import java.util.List;

import com.zving.declarationform.model.DeclarationForm;
import com.zving.declarationform.tax.model.TaxRate;

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
	String compute(DeclarationForm form);

	/**
	 * 确认缴税
	 */
	String confirm(DeclarationForm form);

//	/**
//	 * 添加税率规则
//	 */
//	String addRate(TaxRate rate);
//
//	/**
//	 * 修改税率规则
//	 */
//	String updateRate(TaxRate rate);
//
//	/**
//	 * 删除税率规则
//	 */
//	String deleteRate(String goodsType);
//
//	/**
//	 * 获取指定商品类型下的税率规则
//	 */
//	TaxRate getRate(String goodsType);
//
//	/**
//	 * 获取所有税率规则
//	 */
//	List<TaxRate> listRate();
}
