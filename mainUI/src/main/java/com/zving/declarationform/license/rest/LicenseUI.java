package com.zving.declarationform.license.rest;

import io.servicecomb.provider.springmvc.reference.RestTemplateBuilder;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.core.MediaType;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.RestTemplate;

import com.zving.declarationform.base.BaseUI;
import com.zving.declarationform.dto.ResponseDTO;
import com.zving.declarationform.model.DeclarationForm;
import com.zving.declarationform.model.License;

/**
 * @author 曾鹏
 * @mail zp@zving.com
 * @date 2017年10月20日
 */
@Controller
@RequestMapping(path = "api/", produces = MediaType.APPLICATION_JSON)
public class LicenseUI extends BaseUI {

	@RequestMapping(path = "check/{id}", method = RequestMethod.POST)
	public String check(@RequestBody DeclarationForm form) {
		return null;
	}

	@RequestMapping(path = "confirm/{id}", method = RequestMethod.POST)
	public String confirm(@RequestBody DeclarationForm form) {
		return null;
	}

	@RequestMapping(path = "compensate/{id}", method = RequestMethod.POST)
	public String compensate(@RequestBody DeclarationForm form) {
		return null;
	}

	@RequestMapping(path = "license", method = RequestMethod.POST)
	public @ResponseBody ResponseDTO add(@RequestBody License license) {
		RestTemplateBuilder.create().postForObject("cse://license/license", license, String.class);
		return success("添加成功");
	}

	@RequestMapping(path = "license", method = RequestMethod.PUT)
	public @ResponseBody ResponseDTO update(@RequestBody License license) {
		RestTemplate restTemplate = RestTemplateBuilder.create();
		restTemplate.put("cse://license/license", license);
		return success("更新成功");
	}

	@RequestMapping(path = "license/{id}", method = RequestMethod.DELETE)
	public @ResponseBody ResponseDTO delete(@PathVariable("id") long id) {
		RestTemplateBuilder.create().delete("cse://license/license/" + id);
		return success("删除成功");
	}

	@RequestMapping(path = "license/{id}", method = RequestMethod.GET)
	public @ResponseBody License get(@PathVariable("id") long id) {
		return RestTemplateBuilder.create().getForObject("cse://license/license/" + id, License.class);
	}

	@SuppressWarnings("unchecked")
	@RequestMapping(path = "license", method = RequestMethod.GET)
	public @ResponseBody ResponseDTO list(@RequestParam(required = false) String licensekey,
			@RequestParam(required = false) String importandexportcode, @RequestParam(required = false) String companyname,
			@RequestParam(required = false, defaultValue = "1") int pageindex,
			@RequestParam(required = false, defaultValue = "10") int pagesize) {
		List<License> licenses = new ArrayList<License>();
		licenses = RestTemplateBuilder.create().getForObject("cse://license/license", licenses.getClass(), licensekey, importandexportcode,
				companyname, pageindex, pagesize);
		return success("", licenses, licenses.size());
	}

}
