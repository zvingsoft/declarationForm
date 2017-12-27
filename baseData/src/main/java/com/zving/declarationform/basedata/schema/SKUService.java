package com.zving.declarationform.basedata.schema;

import java.util.List;

import com.zving.declarationform.model.SKU;

/**
 * @author xujunhao
 * @mail xujunhao@zving.com
 * @date 2017年10月23日
 * @description:SKU相关服务
 */
public interface SKUService {
	List<SKU> list(String searchWord);

	SKU get(long id);

	String delete(String ids);

	String add(SKU sku);

	String update(SKU sku);
}
