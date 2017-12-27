package com.zving.declarationform.basedata.provider;

import java.util.Date;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.apache.commons.lang3.math.NumberUtils;

import com.zving.declarationform.basedata.schema.CompanyService;
import com.zving.declarationform.model.Company;
import com.zving.declarationform.storage.IStorage;
import com.zving.declarationform.storage.StorageUtil;

import io.servicecomb.provider.rest.common.RestSchema;

/**
 * @author lwb
 * @mail lwb@zving.com
 * @date 2017年10月23日 下午2:33:09
 * @description:企业管理
 */
@RestSchema(schemaId = "company")
@Path("/company")
@Produces(MediaType.APPLICATION_JSON)
public class CompanyServiceImpl implements CompanyService {

	IStorage storage = StorageUtil.getInstance();

	private long getId() {
		return (long) ((Math.random() * 100000) + 1);
	}

	@Override
	@GET
	@Produces("application/json")
	public List<Company> list() {
		return storage.find(Company.class, null);
	}

	@Override
	@Path("{id}")
	@GET
	@Produces("application/json")
	public Company get(@PathParam("id") long id) {
		return getCompany(id);
	}

	@Override
	@Path("{ids}")
	@DELETE
	@Produces("application/json")
	public String delete(@PathParam("ids") String ids) {
		String[] idArray = ids.split(",");
		for (String id : idArray) {
			if (NumberUtils.isNumber(id)) {
				Company cottonQuota = getCompany(Long.valueOf(id));
				storage.delete(Company.class, cottonQuota);
			}
		}
		return "删除成功";
	}

	@Override
	@POST
	@Consumes("application/json")
	public String add(Company company) {
		company.setId(getId());
		company.setAddTime(new Date());
		company.setAddUser("demo");
		storage.add(Company.class, company);
		return "添加成功";
	}

	@Override
	@PUT
	@Consumes("application/json")
	public String update(Company company) {
		try {
			Company companyOrigin = getCompany(company.getId());
			company.setAddTime(companyOrigin.getAddTime());
			company.setAddUser(companyOrigin.getAddUser());
			company.setModifyTime(new Date());
			company.setModifyUser("demo");
			storage.update(Company.class, companyOrigin, company);
			return "更新成功";
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "更新失败";
	}

	private Company getCompany(long id) {
		List<Company> list = storage.find(Company.class, null);
		for (Company company : list) {
			if (company.getId() == id) {
				return company;
			}
		}
		return null;
	}

}
