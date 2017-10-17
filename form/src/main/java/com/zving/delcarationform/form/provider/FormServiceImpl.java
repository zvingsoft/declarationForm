package com.zving.delcarationform.form.provider;

import javax.ws.rs.core.MediaType;

import org.springframework.web.bind.annotation.RequestMapping;

import com.zving.delcarationform.form.schema.FormService;
import com.zving.delcarationform.models.DelcarationForm;

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
	public DelcarationForm[] list() {
		return null;
	}

	@Override
	public DelcarationForm get(long id) {
		return null;
	}

	@Override
	public String delete(long id) {
		return null;
	}

	@Override
	public String add(DelcarationForm form) {
		return null;
	}

	@Override
	public String update(DelcarationForm form) {
		return null;
	}

	@Override
	public String audit(DelcarationForm form) {
		return null;
	}

	@Override
	public String check(DelcarationForm form) {
		return null;
	}

	@Override
	public String pass(DelcarationForm form) {
		return null;
	}

}
