package com.zving.delcarationform.cottonquota.provider;

import javax.ws.rs.core.MediaType;

import org.springframework.web.bind.annotation.RequestMapping;

import com.zving.delcarationform.cottonquota.model.CottonQuota;
import com.zving.delcarationform.cottonquota.schema.CottonQuotaService;
import com.zving.delcarationform.models.DelcarationForm;

import io.servicecomb.provider.rest.common.RestSchema;

@RestSchema(schemaId = "cottonQuota")
@RequestMapping(path = "/cottonQuota", produces = MediaType.APPLICATION_JSON)
public class CottonQuotaServiceImpl implements CottonQuotaService {

	@Override
	public CottonQuota[] list() {
		return null;
	}

	@Override
	public CottonQuota get(long id) {
		return null;
	}

	@Override
	public String delete(long id) {
		return null;
	}

	@Override
	public String add(CottonQuota form) {
		return null;
	}

	@Override
	public String update(CottonQuota form) {
		return null;
	}

	@Override
	public String submit(DelcarationForm form) {
		return null;
	}

	@Override
	public String check(DelcarationForm form) {
		return null;
	}

	@Override
	public String compensate(DelcarationForm form) {
		return null;
	}

}
