package com.zving.declarationform.license.provider;

import io.servicecomb.provider.rest.common.RestSchema;
import io.servicecomb.swagger.invocation.converter.impl.ConverterCommon;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

import javax.ws.rs.core.MediaType;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.fasterxml.jackson.core.type.TypeReference;
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
		license.setId(new Random().nextInt(1000000));
		StorageUtil.getInstance().add(License.class, license);
		return "添加成功";
	}

	@Override
	@RequestMapping(path = "license", method = RequestMethod.PUT)
	public String update(@RequestBody License license) {
		final IStorage storage = StorageUtil.getInstance();
		List<License> licenses = storage.find(License.class, null);
		for (License item : licenses) {
			if (license.getId() == item.getId()) {
				StorageUtil.getInstance().update(License.class, item, license);
				return "更新成功";
			}
		}
		return "更新失败";
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

	public static void main(String[] args) {
		Type targetType = new TypeReference<Map<String, Object>>() {
		}.getType();
		ConverterCommon common = new ConverterCommon(targetType);
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("status", 200);
		List<String> list = new ArrayList<String>();
		list.add("zp");
		map.put("data", list);
		Object convert = common.convert(map);
		System.out.println(convert);
	}
}
