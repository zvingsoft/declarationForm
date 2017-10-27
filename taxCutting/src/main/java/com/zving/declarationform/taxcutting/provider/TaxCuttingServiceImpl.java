package com.zving.declarationform.taxcutting.provider;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.core.MediaType;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zving.declarationform.model.DeclarationForm;
import com.zving.declarationform.model.PackingItem;
import com.zving.declarationform.storage.IStorage;
import com.zving.declarationform.storage.StorageUtil;
import com.zving.declarationform.taxcutting.model.TaxCuttingRule;
import com.zving.declarationform.taxcutting.schema.TaxCuttingService;

import io.netty.util.internal.StringUtil;
import io.servicecomb.provider.rest.common.RestSchema;

@RestSchema(schemaId = "taxCutting")
@RequestMapping(path = "/", produces = MediaType.APPLICATION_JSON)
@Controller
public class TaxCuttingServiceImpl implements TaxCuttingService {
	@Override
	@RequestMapping(path = "check", method = RequestMethod.POST)
	@ResponseBody
	public String check(@RequestBody DeclarationForm form) {
		try {
			return InetAddress.getLocalHost().getHostName() + ":税收减免检查通过";
		} catch (UnknownHostException e) {
			throw new RuntimeException(e);
		}
	}

	@Override
	@RequestMapping(path = "confirm", method = RequestMethod.POST)
	@ResponseBody
	public String compute(@RequestBody DeclarationForm form) {
		double total = 0;
		for (PackingItem item : form.getPackingList()) {
			TaxCuttingRule rule = new TaxCuttingRule();
			rule.setSku(item.getSKU());
			rule = StorageUtil.getInstance().get(TaxCuttingRule.class, rule);
			total += rule.getRate() * item.getTotalPrice();
		}
		return total + "";
	}

	@RequestMapping(path = "taxcutting", method = RequestMethod.POST)
	@ResponseBody
	public String add(@RequestBody TaxCuttingRule taxCuttingRule) {
		// taxCuttingRule.setCount(taxCuttingRule.getTopLmit());
		StorageUtil.getInstance().add(TaxCuttingRule.class, taxCuttingRule);
		return "新建成功";
	}

	@RequestMapping(path = "taxcutting", method = RequestMethod.PUT)
	@ResponseBody
	public String update(@RequestBody TaxCuttingRule taxCuttingRule) {
		TaxCuttingRule tcr = get(taxCuttingRule.getId());
		StorageUtil.getInstance().update(TaxCuttingRule.class, tcr, taxCuttingRule);
		return "编辑成功";
	}

	@RequestMapping(path = "taxcutting/{ids}", method = RequestMethod.DELETE)
	@ResponseBody
	public String delete(@PathVariable("ids") String ids) {
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

	@RequestMapping(path = "taxcutting", method = RequestMethod.GET)
	@ResponseBody
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

	@RequestMapping(path = "taxcutting/{id}", method = RequestMethod.GET)
	@ResponseBody
	public TaxCuttingRule get(@PathVariable("id") String id) {
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
