package com.zving.declarationform.form.ui;

import java.util.List;

import javax.ws.rs.core.MediaType;

import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.RestTemplate;

import com.zving.declarationform.base.BaseUI;
import com.zving.declarationform.dto.ResponseDTO;
import com.zving.declarationform.model.DeclarationForm;
import com.zving.declarationform.model.PackingItem;

import io.servicecomb.provider.rest.common.RestSchema;
import io.servicecomb.provider.springmvc.reference.RestTemplateBuilder;

/**
 * @author 王育春
 * @mail wyuch@zving.com
 * @date 2017年10月18日
 */
@Component
@RestSchema(schemaId = "DeclarationFormUI")
@RequestMapping(path = "/api", produces = MediaType.APPLICATION_JSON)
public class DeclarationFormUI extends BaseUI {

	@SuppressWarnings("unchecked")
	@RequestMapping(path = "declaration/list/{form}", method = RequestMethod.GET)
	public @ResponseBody ResponseDTO getList(@PathVariable("form") String form) {
		RestTemplate restTemplate = RestTemplateBuilder.create();
		List<DeclarationForm> list = restTemplate.getForObject("cse://form/declaration/list/{form}", List.class,form);
		return success("", list, list.size());
	}

	@RequestMapping(path = "declaration/{id}", method = RequestMethod.GET)
	public @ResponseBody  ResponseDTO get(@PathVariable("id") String id) {
		RestTemplate restTemplate = RestTemplateBuilder.create();
		DeclarationForm declarationForm = restTemplate.getForObject("cse://form/declaration/" + id, DeclarationForm.class);
		return success("",declarationForm);
	}

	@RequestMapping(path = "declaration", method = RequestMethod.POST)
	public @ResponseBody ResponseDTO add(@RequestBody DeclarationForm form) {
		RestTemplate restTemplate = RestTemplateBuilder.create();
		String message=restTemplate.postForObject("cse://form/declaration", form, String.class);
		return success(message);
	}

	@RequestMapping(path = "declaration", method = RequestMethod.PUT)
	public @ResponseBody  ResponseDTO update(@RequestBody DeclarationForm form) {
		RestTemplate restTemplate = RestTemplateBuilder.create();
		restTemplate.put("cse://form/declaration", form, DeclarationForm.class);
		return success("更新成功");
	}

	@RequestMapping(path = "declaration/{ids}", method = RequestMethod.DELETE)
	public @ResponseBody ResponseDTO delete(@PathVariable("ids") String ids) {
		System.out.println(ids);
		RestTemplate restTemplate = RestTemplateBuilder.create();
		restTemplate.delete("cse://form/declaration/"+ids );
		return success("删除成功");
	}
	
	@SuppressWarnings("unchecked")
	@RequestMapping(path = "declaration/packinglist/list/{declarationid}", method = RequestMethod.GET)
	public @ResponseBody ResponseDTO getListPacking(@PathVariable("declarationid") String declarationid) {
		RestTemplate restTemplate = RestTemplateBuilder.create();
		System.out.println(declarationid);
		List<PackingItem> list = restTemplate.getForObject("cse://form/declaration/packinglist/list/{declarationid}", List.class,declarationid);
		return success("", list, list.size());
	}

	@RequestMapping(path = "declaration/packinglist/{id}", method = RequestMethod.GET)
	public @ResponseBody  ResponseDTO getPacking(@PathVariable("id") String id) {
		RestTemplate restTemplate = RestTemplateBuilder.create();
		PackingItem packinglist = restTemplate.getForObject("cse://form/declaration/packinglist/" + id, PackingItem.class);
		return success("",packinglist);
	}

	@RequestMapping(path = "declaration/packinglist", method = RequestMethod.POST)
	public @ResponseBody ResponseDTO addPacking(@RequestBody PackingItem pacingList) {
		RestTemplate restTemplate = RestTemplateBuilder.create();
		String message=restTemplate.postForObject("cse://form/declaration/packinglist", pacingList, String.class);
		return success(message);
	}

	@RequestMapping(path = "declaration/packinglist", method = RequestMethod.PUT)
	public @ResponseBody  ResponseDTO updatePacking(@RequestBody PackingItem pacingList) {
		RestTemplate restTemplate = RestTemplateBuilder.create();
		restTemplate.put("cse://form/declaration/packinglist", pacingList, DeclarationForm.class);
		return success("更新成功");
	}

	@RequestMapping(path = "declaration/packinglist/{ids}", method = RequestMethod.DELETE)
	public @ResponseBody ResponseDTO deletePacking(@PathVariable("ids") String ids) {
		System.out.println(ids);
		RestTemplate restTemplate = RestTemplateBuilder.create();
		restTemplate.delete("cse://form/declaration/packinglist/"+ids );
		return success("删除成功");
	}
}
