package com.zving.declarationform.form.schema;

import java.util.List;

import com.zving.declarationform.model.DeclarationForm;
import com.zving.declarationform.model.PackingList;

/**
 * 报关单
 * 
 * @author 徐俊豪
 * @mail xujunhao@zving.com
 * @date 2017年10月18日
 */
public interface DeclarationFormService {
	/**
	 * 获取报关单列表
	 */
	List<DeclarationForm> list(String form);

	/**
	 * 获取报关单
	 */
	DeclarationForm get(String id);

	/**
	 * 添加报关单
	 */
	String add(DeclarationForm form);

	/**
	 * 更新报关单
	 */
	void update(DeclarationForm form);

	/**
	 * 删除报关单
	 */
	void delete(String id);

	/**
	 * 获取商品列表
	 */
	List<PackingList> listPacking(String id);

	/**
	 * 获取商品
	 */
	PackingList getPacking(String id);

	/**
	 * 添加商品
	 */
	String addPacking(PackingList pack);

	/**
	 * 更新商品
	 */
	void updatePacking(PackingList pack);

	/**
	 * 删除商品
	 */
	void deletePacking(String id);

}
