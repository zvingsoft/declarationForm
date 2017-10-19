package com.zving.declarationform.cottonquota.provider;

import javax.ws.rs.core.MediaType;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.zving.declarationform.cottonquota.model.CottonQuota;
import com.zving.declarationform.cottonquota.schema.CottonQuotaService;
import com.zving.declarationform.model.DeclarationForm;

import io.servicecomb.provider.rest.common.RestSchema;

@RestSchema(schemaId = "cottonQuota")
@RequestMapping(path = "/ ", produces = MediaType.APPLICATION_JSON)
public class CottonQuotaServiceImpl implements CottonQuotaService {

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
	@RequestMapping(path = "cottonQuota", method = RequestMethod.POST)
	public String add(@RequestBody CottonQuota license) {
		return null;
	}

	@Override
	@RequestMapping(path = "cottonQuota", method = RequestMethod.PUT)
	public String update(@RequestBody CottonQuota license) {
		return null;
	}

	@Override
	@RequestMapping(path = "cottonQuota/{id}", method = RequestMethod.DELETE)
	public String delete(@PathVariable("id") long id) {
		return null;
	}

	@Override
	@RequestMapping(path = "cottonQuota/{id}", method = RequestMethod.GET)
	public CottonQuota get(@PathVariable("id") long id) {
		return null;
	}

	@Override
	@RequestMapping(path = "cottonQuota", method = RequestMethod.GET)
	public CottonQuota[] list() {
		return null;
	}

}
