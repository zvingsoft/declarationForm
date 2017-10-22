package com.zving.declarationform.manifest.provider;

import java.util.List;

import javax.ws.rs.core.MediaType;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zving.declarationform.manifest.model.Manifest;
import com.zving.declarationform.manifest.schema.ManifestService;
import com.zving.declarationform.model.DeclarationForm;
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
		StorageUtil.getInstance().add(Manifest.class, manifest);
		return "添加成功";
	}

	@Override
	@RequestMapping(path = "manifest", method = RequestMethod.PUT)
	@ResponseBody
	public String update(@RequestBody Manifest manifest) {
		Manifest old = new Manifest();
		old.setId(manifest.getId());
		StorageUtil.getInstance().update(Manifest.class, old, manifest);
		return "更新成功";
	}

	@Override
	@RequestMapping(path = "manifest/{ids}", method = RequestMethod.DELETE)
	@ResponseBody
	public String delete(@PathVariable("ids") String ids) {
		String[] strId = ids.split(",");
		IStorage iStorage = StorageUtil.getInstance();
		List<Manifest> list = iStorage.find(Manifest.class, null);
		for (int i = 0; i < list.size(); i++) {
			for (int j = 0; j < strId.length; j++) {
				if (list.get(i).getId() == Long.parseLong(strId[j])) {
					iStorage.delete(Manifest.class, list.get(i));
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
		return StorageUtil.getInstance().get(Manifest.class, manifest);
	}

	@Override
	@RequestMapping(path = "manifest", method = RequestMethod.GET)
	@ResponseBody
	public List<Manifest> list() {
		List<Manifest> list = StorageUtil.getInstance().find(Manifest.class, null);
		return list;
	}
}
