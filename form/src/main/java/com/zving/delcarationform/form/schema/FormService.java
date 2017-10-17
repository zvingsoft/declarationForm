package com.zving.delcarationform.form.schema;

import com.zving.delcarationform.models.DelcarationForm;

/**
 * @author 王育春
 * @mail wyuch@zving.com
 * @date 2017年10月18日
 */
public interface FormService {
	DelcarationForm[] list();

	DelcarationForm get(long id);

	String delete(long id);

	String add(DelcarationForm form);

	String update(DelcarationForm form);

	String audit(DelcarationForm form);

	String check(DelcarationForm form);

	String pass(DelcarationForm form);
}
