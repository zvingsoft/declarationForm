package com.zving.declarationform.tax.schema;

import java.util.List;

import com.zving.declarationform.tax.model.TaxRegister;

/**
 * 缴税登记
 * 
 * @author 徐俊豪
 * @mail xujunhaoh@zving.com
 * @date 2017年10月26日
 */
public interface TaxRegisterService {
	/**
	 * 添加缴税单
	 */
	String add(TaxRegister taxRegister);

	/**
	 * 修改缴税单
	 */
	String update(TaxRegister taxRegister);

	/**
	 * 删除缴税单
	 */
	String delete(String ids);

	/**
	 * 获取制定缴税单详情
	 */
	TaxRegister get(long id);

	/**
	 * 获取所有缴税单
	 */
	List<TaxRegister> list(String searchItem);
}
