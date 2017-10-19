package com.zving.declarationform.form.schema;

import com.zving.declarationform.model.DeclarationForm;

/**
 * @author 王育春
 * @mail wyuch@zving.com
 * @date 2017年10月18日
 */
public interface FormService {

	String audit(DeclarationForm form);

	String check(DeclarationForm form);

	String pass(DeclarationForm form);

	DeclarationForm[] list();

	DeclarationForm get(long id);

	String delete(long id);

	String add(DeclarationForm form);

	String update(DeclarationForm form);
}
