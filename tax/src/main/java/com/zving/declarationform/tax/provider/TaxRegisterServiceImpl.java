package com.zving.declarationform.tax.provider;

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

import com.zving.declarationform.dto.ResponseDTO;
import com.zving.declarationform.storage.IStorage;
import com.zving.declarationform.storage.StorageUtil;
import com.zving.declarationform.tax.model.TaxRegister;
import com.zving.declarationform.tax.schema.TaxRegisterService;

import io.servicecomb.provider.rest.common.RestSchema;

/**
 * 缴税登记服务实现类
 * 
 * @author 徐俊豪
 * @mail xujunhaoh@zving.com
 * @date 2017年10月26日
 */
@RestSchema(schemaId = "taxRegister")
@Path("/")
@Produces(MediaType.APPLICATION_JSON)

public class TaxRegisterServiceImpl implements TaxRegisterService {

	@Override
	@Path("taxRegister")
	@POST

	public String add(TaxRegister taxRegister) {
		taxRegister.setRegisterStatus("N");
		taxRegister.setRegisterStatusName("未缴税");
		StorageUtil.getInstance().add(TaxRegister.class, taxRegister);
		return "添加成功";
	}

	@Override
	@Path("taxRegister")
	@PUT

	public String update(TaxRegister taxRegister) {
		IStorage storage = StorageUtil.getInstance();
		List<TaxRegister> list = storage.find(TaxRegister.class, null);
		for (int i = 0; i < list.size(); i++) {
			if (list.get(i).getId() == taxRegister.getId()) {
				storage.delete(TaxRegister.class, list.get(i));
			}
		}

		storage.add(TaxRegister.class, taxRegister);
		return "更新成功";
	}

	@Override
	@Path("taxRegister/{ids}")
	@DELETE

	public String delete(@PathParam("ids") String ids) {
		String[] strId = ids.split(",");
		IStorage iStorage = StorageUtil.getInstance();
		List<TaxRegister> list = iStorage.find(TaxRegister.class, null);
		for (int i = 0; i < list.size(); i++) {
			for (int j = 0; j < strId.length; j++) {
				if (list.get(i).getId() == Long.parseLong(strId[j])) {
					iStorage.delete(TaxRegister.class, list.get(i));
				}
			}
		}
		return "删除成功";
	}

	@Override
	@Path("taxRegister/{id}")
	@GET

	public TaxRegister get(@PathParam("id") long id) {
		TaxRegister taxRegister = new TaxRegister();
		taxRegister.setId(id);
		taxRegister = StorageUtil.getInstance().get(TaxRegister.class, taxRegister);
		if (taxRegister == null) {
			taxRegister = new TaxRegister();
		}
		return taxRegister;
	}

	@Override
	@Path("taxAmount/{id}")
	@GET

	public ResponseDTO taxAmount(@PathParam("id") long id) {
		TaxRegister taxRegister = get(id);
		return new ResponseDTO(taxRegister.getTaxAmount() + "");
	}

	@Override
	@Path("taxRegister")
	@GET

	public List<TaxRegister> list(@QueryParam(value = "searchItem") String searchItem) {
		System.out.println(searchItem);
		List<TaxRegister> list = StorageUtil.getInstance().find(TaxRegister.class, null);

		return list;
	}

}
