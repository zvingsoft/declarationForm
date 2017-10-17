package com.zving.delcarationform.tax.provider;

import javax.ws.rs.core.MediaType;

import org.springframework.web.bind.annotation.RequestMapping;

import com.zving.delcarationform.tax.schema.TaxService;

import io.servicecomb.provider.rest.common.RestSchema;

@RestSchema(schemaId = "tax")
@RequestMapping(path = "/tax", produces = MediaType.APPLICATION_JSON)
public class TaxServiceImpl implements TaxService {

}
