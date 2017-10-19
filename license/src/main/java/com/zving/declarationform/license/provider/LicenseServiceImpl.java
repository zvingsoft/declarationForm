package com.zving.declarationform.license.provider;

import javax.ws.rs.core.MediaType;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.zving.declarationform.license.model.License;
import com.zving.declarationform.license.schema.LicenseService;
import com.zving.declarationform.model.DeclarationForm;

import io.servicecomb.provider.rest.common.RestSchema;

@RestSchema(schemaId = "license")
@RequestMapping(path = "/", produces = MediaType.APPLICATION_JSON)
public class LicenseServiceImpl implements LicenseService {

	@Override
	@RequestMapping(path = "check/{id}", method = RequestMethod.POST)
	public String check(@RequestBody DeclarationForm form) {
		return null;
	}

	@Override
	@RequestMapping(path = "confirm/{id}", method = RequestMethod.POST)
	public String confirm(@RequestBody DeclarationForm form) {
		return null;
	}

	@Override
	@RequestMapping(path = "compensate/{id}", method = RequestMethod.POST)
	public String compensate(@RequestBody DeclarationForm form) {
		return null;
	}

	@Override
	@RequestMapping(path = "license", method = RequestMethod.POST)
	public String add(@RequestBody License license) {
		return null;
	}

	@Override
	@RequestMapping(path = "license", method = RequestMethod.PUT)
	public String update(@RequestBody License license) {
		return null;
	}

	@Override
	@RequestMapping(path = "license/{id}", method = RequestMethod.DELETE)
	public String delete(@PathVariable("id") long id) {
		return null;
	}

	@Override
	@RequestMapping(path = "license/{id}", method = RequestMethod.GET)
	public License get(@PathVariable("id") long id) {
		return null;
	}

	@Override
	@RequestMapping(path = "license", method = RequestMethod.GET)
	public License[] list() {
		return null;
	}

}
