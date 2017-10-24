package com.zving.declarationform.license.provider;

import io.servicecomb.provider.rest.common.RestSchema;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

import javax.ws.rs.core.MediaType;

import net.sf.json.JSONObject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zving.declarationform.license.exception.LicenseOptionFailedException;
import com.zving.declarationform.license.model.License;
import com.zving.declarationform.license.schema.LicenseService;
import com.zving.declarationform.model.DeclarationForm;
import com.zving.declarationform.storage.IStorage;
import com.zving.declarationform.storage.StorageUtil;

@RestSchema(schemaId = "license")
@RequestMapping(path = "/", produces = MediaType.APPLICATION_JSON)
@Controller
public class LicenseServiceImpl implements LicenseService {

	@Override
	@RequestMapping(path = "check", method = RequestMethod.POST)
	@ResponseBody
	public String check(@RequestBody DeclarationForm form) {
		try {
			return InetAddress.getLocalHost().getHostName() + ":进出口许可证检查通过";
		} catch (UnknownHostException e) {
			throw new RuntimeException(e);
		}
	}

	@Override
	@RequestMapping(path = "confirm", method = RequestMethod.POST)
	@ResponseBody
	public String confirm(@RequestBody DeclarationForm form) {
		String licenseKey = form.getLicenseKey();
		try {
			double count = Double.parseDouble(form.getGoodsNumber());
			List<License> licenses = list();
			for (License license : licenses) {
				if (license.getLicenseKey().equals(licenseKey)) {
					if (license.getCount() >= count) {
						license.setCount(license.getCount() - count);
						update(license);
						return "confirm成功：license";
					} else {
						throw new LicenseOptionFailedException();
					}
				}
			}
		} catch (Exception e) {
			throw new LicenseOptionFailedException();
		}
		return "confirm成功：license";
	}

	@Override
	@RequestMapping(path = "compensate", method = RequestMethod.POST)
	@ResponseBody
	public String compensate(@RequestBody DeclarationForm form) {
		String licenseKey = form.getLicenseKey();
		try {
			double count = Double.parseDouble(form.getGoodsNumber());
			List<License> licenses = list();
			for (License license : licenses) {
				if (license.getLicenseKey().equals(licenseKey)) {
					license.setCount(license.getCount() + count);
					update(license);
					return "compensate成功：license";
				}
			}
		} catch (Exception e) {
			throw new LicenseOptionFailedException();
		}
		return "compensate成功：license";
	}

	@Override
	@RequestMapping(path = "license", method = RequestMethod.POST)
	@ResponseBody
	public String add(@RequestBody License license) {
		license.setId(new Random().nextInt(1000000));
		StorageUtil.getInstance().add(License.class, license);
		return "添加成功";
	}

	@Override
	@RequestMapping(path = "license", method = RequestMethod.PUT)
	@ResponseBody
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
	@ResponseBody
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
	@ResponseBody
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
	public List<License> list() {
		return StorageUtil.getInstance().find(License.class, null);
	}

	@RequestMapping(path = "license", method = RequestMethod.GET)
	@ResponseBody
	public List<License> searchList(@RequestParam(value = "search", defaultValue = "{}", required = false) String search) {
		JSONObject jo = JSONObject.fromObject(search);
		String type = "in";
		if (jo.containsKey("type")) {
			type = jo.getString("type");
		}
		final String t = type;
		List<License> list = list().stream().filter(item -> {
			if (item.getType().equals(t)) {
				return true;
			} else {
				return false;
			}
		}).collect(Collectors.toList());
		return list;
	}
}
