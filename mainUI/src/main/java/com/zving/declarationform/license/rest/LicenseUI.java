package com.zving.declarationform.license.rest;

import io.servicecomb.provider.rest.common.RestSchema;
import io.servicecomb.provider.springmvc.reference.RestTemplateBuilder;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.core.MediaType;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.client.RestTemplate;

import com.zving.declarationform.model.DeclarationForm;
import com.zving.declarationform.model.License;

/**
 * @author 曾鹏
 * @mail zp@zving.com
 * @date 2017年10月20日
 */
@RestSchema(schemaId = "LicenseUI")
@RequestMapping(path = "api/", produces = MediaType.APPLICATION_JSON)
public class LicenseUI {

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
	public String add(@RequestBody License license) {
		RestTemplate restTemplate = RestTemplateBuilder.create();
		restTemplate.postForObject("cse://license/license", license, String.class);
		return null;
	}

	@RequestMapping(path = "license", method = RequestMethod.PUT)
	public String update(@RequestBody License license) {
		RestTemplate restTemplate = RestTemplateBuilder.create();
		restTemplate.put("cse://license/license", license);
		return null;
	}

	@RequestMapping(path = "license/{id}", method = RequestMethod.DELETE)
	public String delete(@PathVariable("id") long id) {
		RestTemplate restTemplate = RestTemplateBuilder.create();
		restTemplate.delete("cse://license/license/" + id);
		return null;
	}

	@RequestMapping(path = "license/{id}", method = RequestMethod.GET)
	public License get(@PathVariable("id") long id) {
		RestTemplate restTemplate = RestTemplateBuilder.create();
		return restTemplate.getForObject("cse://license/license/" + id, License.class);
	}

	@SuppressWarnings("unchecked")
	@RequestMapping(path = "license", method = RequestMethod.GET)
	public List<License> list() {
		RestTemplate restTemplate = RestTemplateBuilder.create();
		List<License> licenses = new ArrayList<License>();
		return restTemplate.getForObject("cse://license/license", licenses.getClass());
	}

}
