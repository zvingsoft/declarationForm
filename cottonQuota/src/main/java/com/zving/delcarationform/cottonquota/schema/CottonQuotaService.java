package com.zving.delcarationform.cottonquota.schema;

import com.zving.delcarationform.cottonquota.model.CottonQuota;
import com.zving.delcarationform.models.DelcarationForm;

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

	String submit(DelcarationForm form);

	String check(DelcarationForm form);

	String compensate(DelcarationForm form);

}
