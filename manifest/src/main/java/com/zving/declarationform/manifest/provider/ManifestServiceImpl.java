package com.zving.declarationform.manifest.provider;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Random;
import java.util.Set;

import javax.ws.rs.core.MediaType;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zving.declarationform.dto.ResponseDTO;
import com.zving.declarationform.manifest.model.Manifest;
import com.zving.declarationform.manifest.model.ManifestItem;
import com.zving.declarationform.manifest.schema.ManifestService;
import com.zving.declarationform.model.DeclarationForm;
import com.zving.declarationform.model.PackingItem;
import com.zving.declarationform.storage.IStorage;
import com.zving.declarationform.storage.StorageUtil;

import io.servicecomb.provider.rest.common.RestSchema;

@RestSchema(schemaId = "manifest")
@RequestMapping(path = "/", produces = MediaType.APPLICATION_JSON)
@Controller
public class ManifestServiceImpl implements ManifestService {

	@Override
	@RequestMapping(path = "check", method = RequestMethod.POST)
	@ResponseBody
	public String check(@RequestBody DeclarationForm form) {
		try {
			if ("null".equals(form.getShippingNumbers()) || form.getShippingNumbers() == null) {
				return (InetAddress.getLocalHost().getHostName() + ":舱单核对失败：请为报关单添加对应的舱单号");
			}
			Manifest manifest = new Manifest();
			manifest.setManifestNum(form.getShippingNumbers());
			manifest = StorageUtil.getInstance().get(Manifest.class, manifest);

			if (manifest == null) {
				return (InetAddress.getLocalHost().getHostName() + ":舱单核对失败：请为报关单添加对应的舱单号");
			}

			for (ManifestItem item : manifest.getItems()) {
				boolean flag = false;
				for (PackingItem p : form.getPackingList()) {
					if (p.getSKU().equals(item.getSKU()) && p.getAmount() == item.getQuantity()) {
						flag = true;
						break;
					}
				}
				if (!flag) {
					return (InetAddress.getLocalHost().getHostName() + ":舱单核对失败：" + item.getSKUName() + "未找到或者数量不符");
				}
			}
			return InetAddress.getLocalHost().getHostName() + ":舱单核对通过";
		} catch (UnknownHostException e) {
			throw new RuntimeException(e);
		}
	}

	@Override
	@RequestMapping(path = "try", method = RequestMethod.POST)
	@ResponseBody
	public ResponseDTO tccTry(@RequestBody DeclarationForm form) {
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
		return new ResponseDTO("");
	}

	@Override
	@RequestMapping(path = "manifest", method = RequestMethod.POST)
	@ResponseBody
	public String add(@RequestBody Manifest manifest) {
		List<Manifest> list = StorageUtil.getInstance().find(Manifest.class, null);
		long maxID = 1;
		for (Manifest mf : list) {
			if (mf.getId() >= maxID) {
				maxID = mf.getId() + 1;
			}
		}
		manifest.setId(maxID);
		StorageUtil.getInstance().add(Manifest.class, manifest);
		return "添加成功";
	}

	@Override
	@RequestMapping(path = "manifest", method = RequestMethod.PUT)
	@ResponseBody
	public String update(@RequestBody Manifest manifest) {
		IStorage storage = StorageUtil.getInstance();
		List<Manifest> list = storage.find(Manifest.class, null);
		for (Manifest item : list) {
			if (manifest.getId() == item.getId()) {
				Manifest mf = new Manifest();
				mf.setId(manifest.getId());
				StorageUtil.getInstance().update(Manifest.class, mf, manifest);
				return "更新成功";
			}
		}
		return "更新成功";
	}

	@Override
	@RequestMapping(path = "manifest/{ids}", method = RequestMethod.DELETE)
	@ResponseBody
	public String delete(@PathVariable("ids") String ids) {
		String[] split = ids.split(",");
		Set<Long> idSet = new HashSet<Long>();
		for (String id : split) {
			if (id != null && id != "") {
				idSet.add(Long.valueOf(id));
			}
		}
		IStorage instance = StorageUtil.getInstance();
		List<Manifest> list = instance.find(Manifest.class, null);
		List<Manifest> allList = new ArrayList<Manifest>();
		allList.addAll(list);
		for (Manifest mf : allList) {
			if (idSet.contains(mf.getId())) {
				try {
					instance.delete(Manifest.class, mf);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		}
		return "删除成功";
	}

	@Override
	@RequestMapping(path = "manifest/{id}", method = RequestMethod.GET)
	@ResponseBody
	public Manifest get(@PathVariable("id") long id) {
		Manifest manifest = new Manifest();
		manifest.setId(id);
		Manifest mf = StorageUtil.getInstance().get(Manifest.class, manifest);
		return mf;
	}

	@Override
	@RequestMapping(path = "manifest", method = RequestMethod.GET)
	@ResponseBody
	public List<Manifest> list() {
		List<Manifest> list = StorageUtil.getInstance().find(Manifest.class, null);
		return list;
	}

	static long id = Math.abs(new Random().nextInt(100000000));

	@Override
	@RequestMapping(path = "loadblanceTest", method = RequestMethod.PUT)
	@ResponseBody
	public ResponseDTO loadblanceTest() {
		try {
			return new ResponseDTO(String.format("Microservice manifest: HostName=%s Time=%s", InetAddress.getLocalHost().getHostName(),
					System.currentTimeMillis()));
		} catch (UnknownHostException e) {
			return new ResponseDTO(String.format("Microservice manifest: ID=%s Time=%s", id, System.currentTimeMillis()));
		}
	}

}
