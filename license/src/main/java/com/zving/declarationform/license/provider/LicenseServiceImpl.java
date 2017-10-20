package com.zving.declarationform.license.provider;

import io.servicecomb.provider.rest.common.RestSchema;

import java.util.List;

import javax.ws.rs.core.MediaType;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.zving.declarationform.license.schema.LicenseService;
import com.zving.declarationform.model.DeclarationForm;
import com.zving.declarationform.model.License;
import com.zving.declarationform.storage.IStorage;
import com.zving.declarationform.storage.StorageUtil;

@RestSchema(schemaId = "license")
@RequestMapping(path = "/", produces = MediaType.APPLICATION_JSON)
public class LicenseServiceImpl implements LicenseService {

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
	@RequestMapping(path = "license", method = RequestMethod.POST)
	public String add(@RequestBody License license) {
		StorageUtil.getInstance().add(License.class, license);
		return "添加成功";
	}

	@Override
	@RequestMapping(path = "license", method = RequestMethod.PUT)
	public String update(@RequestBody License license) {
		StorageUtil.getInstance().update(License.class, license);
		return "更新成功";
	}

	@Override
	@RequestMapping(path = "license/{id}", method = RequestMethod.DELETE)
	public String delete(@PathVariable("id") long id) {
		final IStorage storage = StorageUtil.getInstance();
		List<License> licenses = storage.find(License.class, null);
		for (License license : licenses) {
			if (license.getId() == id) {
				storage.delete(License.class, license);
				return "删除成功";
			}
		}
		return "删除失败";
	}

	@Override
	@RequestMapping(path = "license/{id}", method = RequestMethod.GET)
	public License get(@PathVariable("id") long id) {
		List<License> licenses = StorageUtil.getInstance().find(License.class, null);
		for (License license : licenses) {
			if (license.getId() == id) {
				return license;
			}
		}
		return null;
	}

	@Override
	@RequestMapping(path = "license", method = RequestMethod.GET)
	public List<License> list() {
		return StorageUtil.getInstance().find(License.class, null);
	}
}
