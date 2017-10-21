package com.zving.declarationform.taxcutting.schema;

import java.util.List;

import com.zving.declarationform.model.TaxCuttingCode;
import com.zving.declarationform.model.TaxCuttingRule;

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
	/**
	 * 添加减免税
	 */
	String addTaxCutting(TaxCuttingRule taxCuttingRule);

	/**
	 * 修改减免税
	 */
	String updateTaxCutting(TaxCuttingRule taxCuttingRule);

	/**
	 * 删除减免税
	 */
	String deleteTaxCutting(String id);

	/**
	 * 获取所有减免税
	 */
	List<TaxCuttingRule> listTaxCutting();

	/**
	 * 获取单个减免税
	 */
	TaxCuttingRule getTaxCutting(String id);

	/**
	 * 获取减免税大类
	 */
	List<TaxCuttingCode> getLargeType(String codeType);
	/**
	 * 获取减免税小类
	 */
	List<TaxCuttingCode> getSmallType(String codeType);
	/**
	 * 获取减免税方式
	 */
	List<TaxCuttingCode> getWay(String codeType);
}
