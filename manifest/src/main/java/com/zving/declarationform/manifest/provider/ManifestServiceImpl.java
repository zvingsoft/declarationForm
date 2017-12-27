package com.zving.declarationform.manifest.provider;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.zving.declarationform.dto.ResponseDTO;
import com.zving.declarationform.manifest.model.Manifest;
import com.zving.declarationform.manifest.model.ManifestItem;
import com.zving.declarationform.manifest.schema.ManifestService;
import com.zving.declarationform.model.DeclarationForm;
import com.zving.declarationform.model.PackingItem;
import com.zving.declarationform.model.TCCLock;
import com.zving.declarationform.storage.IStorage;
import com.zving.declarationform.storage.StorageUtil;

import io.servicecomb.provider.rest.common.RestSchema;

@RestSchema(schemaId = "manifest")
@Path("/")
@Produces(MediaType.APPLICATION_JSON)

public class ManifestServiceImpl implements ManifestService {

	@Override
	@Path("check")
	@POST

	public String check(DeclarationForm form) {
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
	@Path("try")
	@POST

	public ResponseDTO tccTry(DeclarationForm form) {
		Manifest old = new Manifest();
		old.setManifestNum(form.getShippingNumbers());
		Manifest manifest = StorageUtil.getInstance().get(Manifest.class, old);
		if (manifest == null) {
			return new ResponseDTO("舱单锁定失败，没有找到对应舱单");
		}

		for (PackingItem item : form.getPackingList()) {
			ManifestItem current = null;
			for (ManifestItem mi : manifest.getItems()) {
				if (mi.getSKU() != null && mi.getSKU().equals(item.getSKU())) {
					current = mi;
					break;
				}
			}
			if (current == null || current.getQuantity() != item.getAmount()) {
				return new ResponseDTO("舱单锁定失败，舱单中的商品和报关单不符");
			}
		}

		manifest.setStatus("1");
		StorageUtil.getInstance().update(Manifest.class, old, manifest);

		// 记录资源锁定
		TCCLock lock = new TCCLock();
		lock.setType("Manifest");
		lock.setRelaId(manifest.getManifestNum());
		lock.setLockedValue(manifest.getStatus());
		lock.setFormId(form.getId());
		StorageUtil.getInstance().add(TCCLock.class, lock);

		return new ResponseDTO("");
	}

	@Override
	@Path("confirm")
	@POST

	public ResponseDTO tccConfirm(DeclarationForm form) {
		// 删除资源锁定
		TCCLock lock = new TCCLock();
		lock.setType("Manifest");
		lock.setRelaId(form.getShippingNumbers());
		lock.setFormId(form.getId());
		lock = StorageUtil.getInstance().get(TCCLock.class, lock);
		if (lock == null) {
			return new ResponseDTO("");
		}
		StorageUtil.getInstance().delete(TCCLock.class, lock);
		return new ResponseDTO("");
	}

	@Override
	@Path("cancel")
	@POST

	public ResponseDTO tccCancel(DeclarationForm form) {
		// 根据资源锁定还原
		TCCLock lock = new TCCLock();
		lock.setType("Manifest");
		lock.setRelaId(form.getShippingNumbers());
		lock.setFormId(form.getId());
		lock = StorageUtil.getInstance().get(TCCLock.class, lock);
		if (lock == null) {
			return new ResponseDTO("");
		}
		Manifest old = new Manifest();
		old.setManifestNum(form.getShippingNumbers());
		Manifest manifest = StorageUtil.getInstance().get(Manifest.class, old);
		if (manifest == null) {
			return new ResponseDTO("");
		}

		StorageUtil.getInstance().update(Manifest.class, old, manifest);
		StorageUtil.getInstance().delete(TCCLock.class, lock);

		return new ResponseDTO("");
	}

	@Override
	@Path("manifest")
	@POST

	public String add(Manifest manifest) {
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
	@Path("manifest")
	@PUT

	public String update(Manifest manifest) {
		Manifest mf = new Manifest();
		mf.setId(manifest.getId());
		StorageUtil.getInstance().update(Manifest.class, mf, manifest);
		return "更新成功";
	}

	@Override
	@Path("manifest/{ids}")
	@DELETE

	public String delete(@PathParam("ids") String ids) {
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
	@Path("manifest/{id}")
	@GET

	public Manifest get(@PathParam("id") long id) {
		Manifest manifest = new Manifest();
		manifest.setId(id);
		Manifest mf = StorageUtil.getInstance().get(Manifest.class, manifest);
		return mf;
	}

	@Override
	@Path("manifest")
	@GET

	public List<Manifest> list() {
		List<Manifest> list = StorageUtil.getInstance().find(Manifest.class, null);
		return list;
	}
}
