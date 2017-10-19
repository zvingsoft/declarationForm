package com.zving.declarationform.form.provider;

import javax.ws.rs.core.MediaType;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.zving.declarationform.form.schema.FormService;
import com.zving.declarationform.model.DeclarationForm;

import io.servicecomb.provider.rest.common.RestSchema;

/**
 * @author 王育春
 * @mail wyuch@zving.com
 * @date 2017年10月18日
 */
@RestSchema(schemaId = "form")
@RequestMapping(path = "/", produces = MediaType.APPLICATION_JSON)
public class FormServiceImpl implements FormService {

	@Override
	@RequestMapping(path = "check/{id}", method = RequestMethod.POST)
	public String check(@RequestBody DeclarationForm form) {
		return null;
	}

	@Override
	@RequestMapping(path = "confirm/{id}", method = RequestMethod.POST)
	public String audit(@RequestBody DeclarationForm form) {
		return null;
	}

	@Override
	@RequestMapping(path = "compensate/{id}", method = RequestMethod.POST)
	public String pass(@RequestBody DeclarationForm form) {
		return null;
	}

	@Override
	@RequestMapping(path = "form", method = RequestMethod.POST)
	public String add(@RequestBody DeclarationForm license) {
		return null;
	}

	@Override
	@RequestMapping(path = "form", method = RequestMethod.PUT)
	public String update(@RequestBody DeclarationForm license) {
		return null;
	}

	@Override
	@RequestMapping(path = "form/{id}", method = RequestMethod.DELETE)
	public String delete(@PathVariable("id") long id) {
		return null;
	}

	@Override
	@RequestMapping(path = "form/{id}", method = RequestMethod.GET)
	public DeclarationForm get(@PathVariable("id") long id) {
		return null;
	}

	@Override
	@RequestMapping(path = "form", method = RequestMethod.GET)
	public DeclarationForm[] list() {
		return null;
	}

}
