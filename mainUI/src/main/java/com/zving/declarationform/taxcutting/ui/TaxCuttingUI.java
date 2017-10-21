package com.zving.declarationform.taxcutting.ui;

import java.util.List;

import javax.ws.rs.core.MediaType;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.RestTemplate;

import com.zving.declarationform.base.BaseUI;
import com.zving.declarationform.dto.ResponseDTO;
import com.zving.declarationform.model.TaxCuttingCode;
import com.zving.declarationform.model.TaxCuttingRule;

import io.servicecomb.provider.rest.common.RestSchema;
import io.servicecomb.provider.springmvc.reference.RestTemplateBuilder;

@RestSchema(schemaId = "taxCutting")
@RequestMapping(path = "/api", produces = MediaType.APPLICATION_JSON)
public class TaxCuttingUI extends BaseUI{
	@RequestMapping(path = "taxcutting", method = RequestMethod.POST)
	public @ResponseBody ResponseDTO addTaxCutting(@RequestBody TaxCuttingRule taxCuttingRule) {
		RestTemplate restTemplate = RestTemplateBuilder.create();
		restTemplate.postForObject("cse://taxCutting/taxcutting", taxCuttingRule, String.class);
		return success("添加成功");
	}

	@RequestMapping(path = "taxcutting", method = RequestMethod.PUT)
	public @ResponseBody ResponseDTO updateTaxCutting(@RequestBody TaxCuttingRule taxCuttingRule) {
		RestTemplate restTemplate = RestTemplateBuilder.create();
		restTemplate.put("cse://taxCutting/taxcutting",taxCuttingRule);
		return success("编辑成功");
	}

	@RequestMapping(path = "taxcutting/{id}", method = RequestMethod.DELETE)
	public @ResponseBody ResponseDTO deleteTaxCutting(@PathVariable("id") String id) {
		RestTemplate restTemplate = RestTemplateBuilder.create();
		restTemplate.delete("cse://taxCutting/taxcutting/"+id,id);
		return success("删除成功");
	}

	@SuppressWarnings("unchecked")
	@RequestMapping(path = "taxcutting", method = RequestMethod.GET)
	public @ResponseBody ResponseDTO listTaxCutting() {
		RestTemplate restTemplate = RestTemplateBuilder.create();
		List<TaxCuttingRule> taxCuttingRuleList = restTemplate.getForObject("cse://taxCutting/taxcutting",List.class);
		return success("",taxCuttingRuleList,taxCuttingRuleList.size());
	}

	@RequestMapping(path = "taxcutting/{id}", method = RequestMethod.GET)
	public @ResponseBody ResponseDTO getTaxCutting(@PathVariable("id") String id) {
		RestTemplate restTemplate = RestTemplateBuilder.create();
		TaxCuttingRule taxCuttingRule = restTemplate.getForObject("cse://taxCutting/taxcutting/"+id,TaxCuttingRule.class);
		return success("",taxCuttingRule);
	}

	@SuppressWarnings("unchecked")
	@RequestMapping(path = "taxcutting/largetypes/{codetype}", method = RequestMethod.GET)
	public @ResponseBody ResponseDTO getLargeType(@PathVariable("codetype") String codetype) {
		RestTemplate restTemplate = RestTemplateBuilder.create();
		List<TaxCuttingCode> taxCuttingCodes = restTemplate.getForObject("cse://taxCutting/taxcutting/largetypes/"+codetype,List.class);
		return success("",taxCuttingCodes);
	}

	@SuppressWarnings("unchecked")
	@RequestMapping(path = "taxcutting/smalltypes/{codetype}", method = RequestMethod.GET)
	public @ResponseBody ResponseDTO getSmallType(@PathVariable("codetype") String codetype) {
		RestTemplate restTemplate = RestTemplateBuilder.create();
		List<TaxCuttingCode> taxCuttingCodes = restTemplate.getForObject("cse://taxCutting/taxcutting/smalltypes/"+codetype,List.class);
		return success("",taxCuttingCodes);
	}

	@SuppressWarnings("unchecked")
	@RequestMapping(path = "taxcutting/ways/{codetype}", method = RequestMethod.GET)
	public @ResponseBody ResponseDTO getWay(@PathVariable("codetype") String codetype) {
		RestTemplate restTemplate = RestTemplateBuilder.create();
		List<TaxCuttingCode> taxCuttingCodes = restTemplate.getForObject("cse://taxCutting/taxcutting/ways/"+codetype,List.class);
		return success("",taxCuttingCodes);
	}
}
