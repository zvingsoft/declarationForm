package com.zving.declarationform.cottonquota.schema;

import com.zving.declarationform.cottonquota.model.CottonQuota;
import com.zving.declarationform.model.DeclarationForm;

/**
 * @author 王育春
 * @mail wyuch@zving.com
 * @date 2017年10月18日
 */
public interface CottonQuotaService {
	CottonQuota[] list();

	CottonQuota get(long id);

	String delete(long id);

	String add(CottonQuota form);

	String update(CottonQuota form);

	String confirm(DeclarationForm form);

	String check(DeclarationForm form);

	String compensate(DeclarationForm form);

}
