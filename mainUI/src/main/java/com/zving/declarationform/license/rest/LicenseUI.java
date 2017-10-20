package com.zving.declarationform.license.rest;

import io.servicecomb.provider.pojo.RpcReference;
import io.servicecomb.provider.rest.common.RestSchema;

import javax.ws.rs.core.MediaType;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.zving.declarationform.model.DeclarationForm;
import com.zving.declarationform.model.License;
import com.zving.declarationform.schema.LicenseService;

/**
 * @author 曾鹏
 * @mail zp@zving.com
 * @date 2017年10月20日
 */
@Controller
@CrossOrigin(origins = "*")
@RestSchema(schemaId = "LicenseUI")
@RequestMapping(path = "api/", produces = MediaType.APPLICATION_JSON)
public class LicenseUI {

	@RpcReference(microserviceName = "license", schemaId = "license")
	private static LicenseService licenseService;

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
		licenseService.add(license);
		return null;
	}

	@RequestMapping(path = "license", method = RequestMethod.PUT)
	public String update(@RequestBody License license) {
		licenseService.update(license);
		return null;
	}

	@RequestMapping(path = "license/{id}", method = RequestMethod.DELETE)
	public String delete(@PathVariable("id") long id) {
		return null;
	}

	@RequestMapping(path = "license/{id}", method = RequestMethod.GET)
	public License get(@PathVariable("id") long id) {
		return null;
	}

	@RequestMapping(path = "license", method = RequestMethod.GET)
	public License[] list() {
		return licenseService.list();
	}
}
