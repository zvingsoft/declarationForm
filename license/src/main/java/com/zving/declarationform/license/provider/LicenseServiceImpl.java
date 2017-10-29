package com.zving.declarationform.license.provider;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

import javax.ws.rs.core.MediaType;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zving.declarationform.dto.ResponseDTO;
import com.zving.declarationform.license.model.License;
import com.zving.declarationform.license.schema.LicenseService;
import com.zving.declarationform.model.DeclarationForm;
import com.zving.declarationform.model.PackingItem;
import com.zving.declarationform.model.TCCLock;
import com.zving.declarationform.storage.IStorage;
import com.zving.declarationform.storage.StorageUtil;

import io.servicecomb.provider.rest.common.RestSchema;
import net.sf.json.JSONObject;

@RestSchema(schemaId = "license")
@RequestMapping(path = "/", produces = MediaType.APPLICATION_JSON)
@Controller
public class LicenseServiceImpl implements LicenseService {

	/**
	 * 提交审核前的检查
	 */
	@Override
	@RequestMapping(path = "check", method = RequestMethod.POST)
	@ResponseBody
	public String check(@RequestBody DeclarationForm form) {
		try {
			for (PackingItem item : form.getPackingList()) {
				License old = new License();
				old.setLicenseKey(form.getLicenseKey());
				old.setSku(item.getSKU());
				License license = StorageUtil.getInstance().get(License.class, old);
				if (license == null) {
					return InetAddress.getLocalHost().getHostName() + ":进出口许可证检查失败，没有找到许可证";
				}
				if (license.getCount() < item.getAmount()) {
					return InetAddress.getLocalHost().getHostName() + ":进出口许可证检查失败，许可数量不足";
				}
			}
			return InetAddress.getLocalHost().getHostName() + ":进出口许可证检查通过";
		} catch (UnknownHostException e) {
			throw new RuntimeException(e);
		}
	}

	@Override
	@RequestMapping(path = "try", method = RequestMethod.POST)
	@ResponseBody
	public ResponseDTO tccTry(@RequestBody DeclarationForm form) {
		for (PackingItem item : form.getPackingList()) {
			License old = new License();
			old.setLicenseKey(form.getLicenseKey());
			old.setSku(item.getSKU());
			License license = StorageUtil.getInstance().get(License.class, old);
			if (license == null) {
				return new ResponseDTO("许可证锁定失败，没有许可证");
			}
			if (item.getAmount() > license.getCount()) {
				return new ResponseDTO("许可证锁定失败，许可证剩余数量不足");
			}
			license.setCount(license.getCount() - item.getAmount());
			StorageUtil.getInstance().update(License.class, old, license);

			// 记录资源锁定
			TCCLock lock = new TCCLock();
			lock.setType("License");
			lock.setRelaId(item.getSKU());
			lock.setLockedValue(item.getAmount() + "");
			lock.setFormId(form.getId());
			StorageUtil.getInstance().add(TCCLock.class, lock);
		}
		return new ResponseDTO("");
	}

	@Override
	@RequestMapping(path = "confirm", method = RequestMethod.POST)
	@ResponseBody
	public ResponseDTO tccConfirm(@RequestBody DeclarationForm form) {
		return new ResponseDTO("");
	}

	@Override
	@RequestMapping(path = "cancel", method = RequestMethod.POST)
	@ResponseBody
	public ResponseDTO tccCancel(@RequestBody DeclarationForm form) {
		for (PackingItem item : form.getPackingList()) {
			License old = new License();
			old.setLicenseKey(form.getLicenseKey());
			old.setSku(item.getSKU());
			License license = StorageUtil.getInstance().get(License.class, old);
			if (license == null) {
				continue;
			}

			// 记录资源锁定
			TCCLock lock = new TCCLock();
			lock.setType("License");
			lock.setRelaId(item.getSKU());
			lock.setFormId(form.getId());
			lock = StorageUtil.getInstance().get(TCCLock.class, lock);
			if (lock == null) {
				continue;
			}

			license.setCount(license.getCount() + Double.parseDouble(lock.getLockedValue()));
			StorageUtil.getInstance().update(License.class, old, license);
			StorageUtil.getInstance().delete(TCCLock.class, lock);
		}
		return new ResponseDTO("");
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

	static long id = Math.abs(new Random().nextInt(100000000));

	@Override
	@RequestMapping(path = "/loadblanceTest", method = RequestMethod.GET)
	@ResponseBody
	public ResponseDTO loadblanceTest() {
		try {
			return new ResponseDTO(String.format("Microservice license: HostName=%s Time=%s", InetAddress.getLocalHost().getHostName(),
					System.currentTimeMillis()));
		} catch (UnknownHostException e) {
			return new ResponseDTO(String.format("Microservice license: ID=%s Time=%s", id, System.currentTimeMillis()));
		}
	}

}
