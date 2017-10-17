package com.zving.delcarationform.taxcutting.provider;

import javax.ws.rs.core.MediaType;

import org.springframework.web.bind.annotation.RequestMapping;

import com.zving.delcarationform.taxcutting.schema.TaxCuttingService;

import io.servicecomb.provider.rest.common.RestSchema;

@RestSchema(schemaId = "taxCutting")
@RequestMapping(path = "/taxCutting", produces = MediaType.APPLICATION_JSON)
public class TaxCuttingServiceImpl implements TaxCuttingService {

}
