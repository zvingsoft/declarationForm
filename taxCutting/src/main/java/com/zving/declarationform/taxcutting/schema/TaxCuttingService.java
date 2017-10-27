package com.zving.declarationform.taxcutting.schema;

import java.util.List;

import com.zving.declarationform.dto.ResponseDTO;
import com.zving.declarationform.model.DeclarationForm;
import com.zving.declarationform.taxcutting.model.TaxCuttingRule;

/**
 * @author 王育春
 * @mail wyuch@zving.com
 * @date 2017年10月17日
 */
/**
 * @author 作者
 * @mail name@domain
 * @date 2017年10月20日
 */
public interface TaxCuttingService {
	String check(DeclarationForm form);

	ResponseDTO compute(DeclarationForm form);

	/**
	 * 添加减免税
	 */
	String add(TaxCuttingRule taxCuttingRule);

	/**
	 * 修改减免税
	 */
	String update(TaxCuttingRule taxCuttingRule);

	/**
	 * 删除减免税
	 */
	String delete(String ids);

	/**
	 * 获取所有减免税
	 */
	List<TaxCuttingRule> list();

	/**
	 * 获取单个减免税
	 */
	TaxCuttingRule get(String id);

}
