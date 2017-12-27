package com.zving.declarationform.license.provider;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

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
@Path("/")
@Produces(MediaType.APPLICATION_JSON)

public class LicenseServiceImpl implements LicenseService {

	/**
	 * 提交审核前的检查
	 */
	@Override
	@Path("check")
	@POST

	public String check(DeclarationForm form) {
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
	@Path("try")
	@POST

	public ResponseDTO tccTry(DeclarationForm form) {
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
	@Path("confirm")
	@POST

	public ResponseDTO tccConfirm(DeclarationForm form) {
		for (PackingItem item : form.getPackingList()) {
			// 删除资源锁定
			TCCLock lock = new TCCLock();
			lock.setType("License");
			lock.setRelaId(item.getSKU());
			lock.setFormId(form.getId());
			lock = StorageUtil.getInstance().get(TCCLock.class, lock);
			if (lock == null) {
				continue;
			}
			StorageUtil.getInstance().delete(TCCLock.class, lock);
		}
		return new ResponseDTO("");
	}

	@Override
	@Path("cancel")
	@POST

	public ResponseDTO tccCancel(DeclarationForm form) {
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
	@Path("license")
	@POST

	public String add(License license) {
		license.setId(new Random().nextInt(1000000));
		StorageUtil.getInstance().add(License.class, license);
		return "添加成功";
	}

	@Override
	@Path("license")
	@PUT

	public String update(License license) {
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
	@Path("license/{id}")
	@DELETE

	public String delete(@PathParam("id") long id) {
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
	@Path("license/{id}")
	@GET

	public License get(@PathParam("id") long id) {
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

	@Path("license")
	@GET

	public List<License> searchList(@QueryParam(value = "search") String search) {
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
	@Path("/loadblanceTest")
	@GET

	public ResponseDTO loadblanceTest() {
		try {
			return new ResponseDTO(String.format("Microservice license: HostName=%s Time=%s", InetAddress.getLocalHost().getHostName(),
					System.currentTimeMillis()));
		} catch (UnknownHostException e) {
			return new ResponseDTO(String.format("Microservice license: ID=%s Time=%s", id, System.currentTimeMillis()));
		}
	}

}
