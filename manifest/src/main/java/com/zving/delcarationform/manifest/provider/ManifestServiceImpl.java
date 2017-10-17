package com.zving.delcarationform.manifest.provider;

import javax.ws.rs.core.MediaType;

import org.springframework.web.bind.annotation.RequestMapping;

import com.zving.delcarationform.manifest.schema.ManifestService;

import io.servicecomb.provider.rest.common.RestSchema;

@RestSchema(schemaId = "manifest")
@RequestMapping(path = "/manifest", produces = MediaType.APPLICATION_JSON)
public class ManifestServiceImpl implements ManifestService {

}
