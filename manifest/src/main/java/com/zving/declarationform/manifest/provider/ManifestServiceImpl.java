package com.zving.declarationform.manifest.provider;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.ws.rs.core.MediaType;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zving.declarationform.manifest.model.Manifest;
import com.zving.declarationform.manifest.model.ManifestItem;
import com.zving.declarationform.manifest.schema.ManifestService;
import com.zving.declarationform.storage.IStorage;
import com.zving.declarationform.storage.StorageUtil;

import io.servicecomb.provider.rest.common.RestSchema;

@RestSchema(schemaId = "manifest")
@RequestMapping(path = "/", produces = MediaType.APPLICATION_JSON)
@Controller
public class ManifestServiceImpl implements ManifestService {

	@Override
	@RequestMapping(path = "check/{id}", method = RequestMethod.POST)
	@ResponseBody
	public String check(@PathVariable("id") long id) {
		return null;
	}

	@Override
	@RequestMapping(path = "confirm/{id}", method = RequestMethod.POST)
	@ResponseBody
	public String confirm(@PathVariable("id") long id) {
		return null;
	}

	@Override
	@RequestMapping(path = "compensate/{id}", method = RequestMethod.POST)
	@ResponseBody
	public String compensate(@PathVariable("id") long id) {
		return null;
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
				StorageUtil.getInstance().update(Manifest.class, item, manifest);
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
		// 查看商品暂时用模拟数据
		ArrayList<ManifestItem> items = new ArrayList<ManifestItem>();
		ManifestItem mi = new ManifestItem();
		mi.setSKU("iPhone7智能手机");
		mi.setQuantity(100);
		ManifestItem mione = new ManifestItem();
		mione.setSKU("笔记本电脑");
		mione.setQuantity(200);
		items.add(mi);
		items.add(mione);
		mf.setItems(items);
		return mf;
	}

	@Override
	@RequestMapping(path = "manifest", method = RequestMethod.GET)
	@ResponseBody
	public List<Manifest> list() {
		List<Manifest> list = StorageUtil.getInstance().find(Manifest.class, null);
		return list;
	}
}
