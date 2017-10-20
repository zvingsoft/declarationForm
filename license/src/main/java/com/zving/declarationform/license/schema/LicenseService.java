package com.zving.declarationform.license.schema;

import java.util.List;

import com.zving.declarationform.model.DeclarationForm;
import com.zving.declarationform.model.License;

/**
 * @author 王育春
 * @mail wyuch@zving.com
 * @date 2017年10月18日
 */
public interface LicenseService {
	String check(DeclarationForm form);

	String confirm(DeclarationForm form);

	String compensate(DeclarationForm form);

	String add(License license);

	String update(License license);

	License get(long id);

	String delete(long id);

	List<License> list();
}
