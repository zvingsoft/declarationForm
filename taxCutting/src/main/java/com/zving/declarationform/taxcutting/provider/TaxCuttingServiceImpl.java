package com.zving.declarationform.taxcutting.provider;

import java.util.List;

import javax.ws.rs.core.MediaType;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zving.declarationform.storage.IStorage;
import com.zving.declarationform.storage.StorageUtil;
import com.zving.declarationform.taxcutting.model.TaxCuttingRule;
import com.zving.declarationform.taxcutting.schema.TaxCuttingService;

import io.servicecomb.provider.rest.common.RestSchema;

@RestSchema(schemaId = "taxCutting")
@RequestMapping(path = "/", produces = MediaType.APPLICATION_JSON)
@Controller
public class TaxCuttingServiceImpl implements TaxCuttingService {

	@RequestMapping(path = "taxcutting", method = RequestMethod.POST)
	@ResponseBody
	public String add(@RequestBody TaxCuttingRule taxCuttingRule) {
		StorageUtil.getInstance().add(TaxCuttingRule.class, taxCuttingRule);
		return "添加成功";
	}

	@RequestMapping(path = "taxcutting", method = RequestMethod.PUT)
	@ResponseBody
	public String update(@RequestBody TaxCuttingRule taxCuttingRule) {
		final IStorage storage = StorageUtil.getInstance();
		List<TaxCuttingRule> taxCuttingRuleList = storage.find(TaxCuttingRule.class, null);
		for (TaxCuttingRule tcr : taxCuttingRuleList) {
			if (tcr.getId().equals(taxCuttingRule.getId())) {
				StorageUtil.getInstance().update(TaxCuttingRule.class, tcr, taxCuttingRule);
				return "编辑成功";
			}
		}
		return "编辑失败";
	}

	@RequestMapping(path = "taxcutting/{ids}", method = RequestMethod.DELETE)
	@ResponseBody
	public String delete(@PathVariable("ids") String ids) {
		String[] strId = ids.split(",");
		IStorage iStorage = StorageUtil.getInstance();
		List<TaxCuttingRule> list = iStorage.find(TaxCuttingRule.class, null);
		for (int i = 0; i < list.size(); i++) {
			for (int j = 0; j < strId.length; j++) {
				if (list.get(i).getId().equals(strId[j])) {
					iStorage.delete(TaxCuttingRule.class, list.get(i));
				}
			}
		}
		return "删除成功";
	}

	@RequestMapping(path = "taxcutting", method = RequestMethod.GET)
	@ResponseBody
	public List<TaxCuttingRule> list() {
		return StorageUtil.getInstance().find(TaxCuttingRule.class, null);
	}

	@RequestMapping(path = "taxcutting/{id}", method = RequestMethod.GET)
	@ResponseBody
	public TaxCuttingRule get(@PathVariable("id") String id) {
		TaxCuttingRule taxCuttingRule = new TaxCuttingRule();
		taxCuttingRule.setId(id);
		return StorageUtil.getInstance().get(TaxCuttingRule.class, taxCuttingRule);
	}
}
