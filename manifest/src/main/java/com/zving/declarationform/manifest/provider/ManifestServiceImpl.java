package com.zving.declarationform.manifest.provider;

import javax.ws.rs.core.MediaType;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.zving.declarationform.manifest.model.Manifest;
import com.zving.declarationform.manifest.schema.ManifestService;

import io.servicecomb.provider.rest.common.RestSchema;

@RestSchema(schemaId = "manifest")
@RequestMapping(path = "/", produces = MediaType.APPLICATION_JSON)
public class ManifestServiceImpl implements ManifestService {

	@Override
	@RequestMapping(path = "check/{id}", method = RequestMethod.POST)
	public String check(@PathVariable("id") long id) {
		return null;
	}

	@Override
	@RequestMapping(path = "confirm/{id}", method = RequestMethod.POST)
	public String confirm(@PathVariable("id") long id) {
		return null;
	}

	@Override
	@RequestMapping(path = "compensate/{id}", method = RequestMethod.POST)
	public String compensate(@PathVariable("id") long id) {
		return null;
	}

	@Override
	@RequestMapping(path = "manifest", method = RequestMethod.POST)
	public String add(@RequestBody Manifest manifest) {
		return null;
	}

	@Override
	@RequestMapping(path = "manifest", method = RequestMethod.PUT)
	public String update(@RequestBody Manifest manifest) {
		return null;
	}

	@Override
	@RequestMapping(path = "manifest/{id}", method = RequestMethod.DELETE)
	public String delete(@PathVariable("id") long id) {
		return null;
	}

	@Override
	@RequestMapping(path = "manifest/{id}", method = RequestMethod.GET)
	public Manifest get(@PathVariable("id") long id) {
		return null;
	}

	@Override
	@RequestMapping(path = "manifest", method = RequestMethod.GET)
	public Manifest[] list() {
		return null;
	}

}
