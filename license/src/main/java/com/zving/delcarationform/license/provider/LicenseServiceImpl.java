package com.zving.delcarationform.license.provider;

import javax.ws.rs.core.MediaType;

import org.springframework.web.bind.annotation.RequestMapping;

import com.zving.delcarationform.license.schema.LicenseService;

import io.servicecomb.provider.rest.common.RestSchema;

@RestSchema(schemaId = "license")
@RequestMapping(path = "/license", produces = MediaType.APPLICATION_JSON)
public class LicenseServiceImpl implements LicenseService {

}
