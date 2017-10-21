package com.zving.declarationform.cottonquota.schema;

import java.util.List;

import com.zving.declarationform.model.CottonQuota;

/**
 * @author 王育春
 * @mail wyuch@zving.com
 * @date 2017年10月18日
 */
public interface CottonQuotaService {
    List<CottonQuota> list(String number, String companyName, String pageIndex, String pageSize);

    CottonQuota get(long id);

    String delete(String ids);

    String add(CottonQuota form);

    String update(CottonQuota form);

    String audit(String ids, String status);

}
