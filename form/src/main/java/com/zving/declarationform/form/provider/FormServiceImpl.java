package com.zving.declarationform.form.provider;

import javax.ws.rs.core.MediaType;

import org.springframework.web.bind.annotation.RequestMapping;

import com.zving.declarationform.form.schema.FormService;
import com.zving.declarationform.model.DeclarationForm;

import io.servicecomb.provider.rest.common.RestSchema;

/**
 * @author 王育春
 * @mail wyuch@zving.com
 * @date 2017年10月18日
 */
@RestSchema(schemaId = "form")
@RequestMapping(path = "/form", produces = MediaType.APPLICATION_JSON)
public class FormServiceImpl implements FormService {

	@Override
	public DeclarationForm[] list() {
		return null;
	}

	@Override
	public DeclarationForm get(long id) {
		return null;
	}

	@Override
	public String delete(long id) {
		return null;
	}

	@Override
	public String add(DeclarationForm form) {
		return null;
	}

	@Override
	public String update(DeclarationForm form) {
		return null;
	}

	@Override
	public String audit(DeclarationForm form) {
		return null;
	}

	@Override
	public String check(DeclarationForm form) {
		return null;
	}

	@Override
	public String pass(DeclarationForm form) {
		return null;
	}

}
