package com.zving.declarationform.form.schema;

import java.util.List;
import java.util.Map;

import com.zving.declarationform.model.DeclarationForm;

/**
 * 报关单
 * 
 * @author 徐俊豪
 * @mail xujunhao@zving.com
 * @date 2017年10月18日
 */
public interface FormService {
	/**
	 * 获取报关单列表
	 */
	List<DeclarationForm> list(String searchItem);

	/**
	 * 获取报关单
	 */
	DeclarationForm get(long id);

	/**
	 * 添加报关单
	 */
	String add(DeclarationForm form);

	/**
	 * 更新报关单
	 */
	String update(DeclarationForm form);

	/**
	 * 删除报关单
	 */
	String delete(String ids);

	/**
	 * 获取审核报关单列表
	 */
	List<DeclarationForm> auditList(String searchItem);
	
	/**
	 * 获取未缴税的报关单列表
	 */
	List<DeclarationForm> unRegisterDeclarationList(String searchItem);
	
	/**
	 * 根据缴税单的id列表查询对应的报关单
	 */
	List<DeclarationForm> taxRegisterDeclarationList(String ids);
	
	/**
	 * 审核
	 */
	String audit(Map<String, String> map);

	/**
	 * saga确认
	 */
	String confirm(DeclarationForm form);

	/**
	 * tcc确认
	 */
	String tryConfirm(DeclarationForm form);
}
