package com.zving.declarationform.taxcutting.provider;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.zving.declarationform.dto.ResponseDTO;
import com.zving.declarationform.model.DeclarationForm;
import com.zving.declarationform.model.PackingItem;
import com.zving.declarationform.storage.IStorage;
import com.zving.declarationform.storage.StorageUtil;
import com.zving.declarationform.taxcutting.model.TaxCuttingRule;
import com.zving.declarationform.taxcutting.schema.TaxCuttingService;

import io.netty.util.internal.StringUtil;
import io.servicecomb.provider.rest.common.RestSchema;

@RestSchema(schemaId = "taxCutting")
@Path("/")
@Produces(MediaType.APPLICATION_JSON)

public class TaxCuttingServiceImpl implements TaxCuttingService {
	@Override
	@Path("check")
	@POST

	public String check(DeclarationForm form) {
		try {
			return InetAddress.getLocalHost().getHostName() + ":税收减免检查通过";
		} catch (UnknownHostException e) {
			throw new RuntimeException(e);
		}
	}

	@Override
	@Path("compute")
	@POST

	public ResponseDTO compute(DeclarationForm form) {
		double total = 0;
		for (PackingItem item : form.getPackingList()) {
			TaxCuttingRule rule = new TaxCuttingRule();
			rule.setSku(item.getSKU());
			rule = StorageUtil.getInstance().get(TaxCuttingRule.class, rule);
			if (rule == null) {
				continue;
			}
			total += rule.getRate() * item.getTotalPrice() / 100;
		}
		return new ResponseDTO(String.format("%.2f", total));
	}

	@Path("taxcutting")
	@POST

	public String add(TaxCuttingRule taxCuttingRule) {
		// taxCuttingRule.setCount(taxCuttingRule.getTopLmit());
		StorageUtil.getInstance().add(TaxCuttingRule.class, taxCuttingRule);
		return "新建成功";
	}

	@Path("taxcutting")
	@PUT

	public String update(TaxCuttingRule taxCuttingRule) {
		TaxCuttingRule tcr = get(taxCuttingRule.getId());
		StorageUtil.getInstance().update(TaxCuttingRule.class, tcr, taxCuttingRule);
		return "编辑成功";
	}

	@Path("taxcutting/{ids}")
	@DELETE

	public String delete(@PathParam("ids") String ids) {
		String[] strId = ids.split(",");
		IStorage iStorage = StorageUtil.getInstance();
		List<TaxCuttingRule> list = iStorage.find(TaxCuttingRule.class, null);
		List<TaxCuttingRule> allList = new ArrayList<TaxCuttingRule>();
		allList.addAll(list);
		for (int i = 0; i < allList.size(); i++) {
			for (int j = 0; j < strId.length; j++) {
				if (allList.get(i).getId().equals(strId[j])) {
					iStorage.delete(TaxCuttingRule.class, allList.get(i));
				}
			}
		}
		return "删除成功";
	}

	@Path("taxcutting")
	@GET

	public List<TaxCuttingRule> list() {
		List<TaxCuttingRule> list = StorageUtil.getInstance().find(TaxCuttingRule.class, null);
		for (TaxCuttingRule taxCuttingRule : list) {
			if (StringUtil.isNullOrEmpty(taxCuttingRule.getStartTime()) && StringUtil.isNullOrEmpty(taxCuttingRule.getEndTime())) {
			} else {
				taxCuttingRule.setValidityDate(taxCuttingRule.getStartTime() + " - " + taxCuttingRule.getEndTime());
			}
		}
		return list;
	}

	@Path("taxcutting/{id}")
	@GET

	public TaxCuttingRule get(@PathParam("id") String id) {
		List<TaxCuttingRule> taxCuttingRuleList = StorageUtil.getInstance().find(TaxCuttingRule.class, null);
		for (TaxCuttingRule taxCuttingRule : taxCuttingRuleList) {
			if (taxCuttingRule.getId().equals(id)) {
				if (StringUtil.isNullOrEmpty(taxCuttingRule.getStartTime()) && StringUtil.isNullOrEmpty(taxCuttingRule.getEndTime())) {
				} else {
					taxCuttingRule.setValidityDate(taxCuttingRule.getStartTime() + " - " + taxCuttingRule.getEndTime());
				}
				return taxCuttingRule;
			}
		}
		return null;
	}
}
