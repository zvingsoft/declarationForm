package com.zving.declarationform.basedata.provider;

import java.util.List;

import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import com.zving.declarationform.basedata.schema.SKUService;
import com.zving.declarationform.model.SKU;
import com.zving.declarationform.storage.IStorage;
import com.zving.declarationform.storage.StorageUtil;

import io.servicecomb.provider.rest.common.RestSchema;

/**
 * @author xujunhao
 * @mail xujunhao@zving.com
 * @date 2017年10月23日
 * @description:SKU商品管理
 */
@RestSchema(schemaId = "sku")
@Path("/")
@Produces(MediaType.APPLICATION_JSON)

public class SKUServiceImpl implements SKUService {

	@Override
	@Path("sku")
	@GET
	@Produces("application/json")
	public List<SKU> list(@QueryParam(value = "searchWord") String searchWord) {
		return StorageUtil.getInstance().find(SKU.class, null);
	}

	@Override
	@Path("sku/{id}")
	@GET
	@Produces("application/json")
	public SKU get(@PathParam("id") long id) {
		SKU sku = new SKU();
		sku.setId(id);
		return StorageUtil.getInstance().get(SKU.class, sku);
	}

	@Override
	@Path("sku/{ids}")
	@DELETE
	@Produces("application/json")
	public String delete(@PathParam("ids") String ids) {
		IStorage storage = StorageUtil.getInstance();
		String[] strId = ids.split(",");
		List<SKU> list = storage.find(SKU.class, null);
		for (int i = 0; i < list.size(); i++) {
			for (int j = 0; j < strId.length; j++) {
				if (String.valueOf(list.get(i).getId()).equals(strId[j])) {
					storage.delete(SKU.class, list.get(i));
				}
			}
		}
		return "删除成功";
	}

	@Override
	@Path("sku")
	@POST
	@Produces("application/json")
	public String add(SKU sku) {
		StorageUtil.getInstance().add(SKU.class, sku);
		return "添加成功";
	}

	@Override
	@Path("sku")
	@PUT
	@Produces("application/json")
	public String update(SKU sku) {
		IStorage storage = StorageUtil.getInstance();
		List<SKU> list = storage.find(SKU.class, null);
		for (int i = 0; i < list.size(); i++) {
			if (list.get(i).getId() == sku.getId()) {
				storage.delete(SKU.class, list.get(i));
			}
		}
		storage.add(SKU.class, sku);
		return "更新成功";
	}

}
