package com.zving.declarationform.form.provider;

import java.io.UnsupportedEncodingException;
import java.lang.reflect.Field;
import java.net.URLDecoder;
import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.core.MediaType;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.zving.declarationform.form.schema.DeclarationFormService;
import com.zving.declarationform.model.DeclarationForm;
import com.zving.declarationform.model.PackingList;
import com.zving.declarationform.storage.IStorage;
import com.zving.declarationform.storage.StorageUtil;

import io.servicecomb.provider.rest.common.RestSchema;
import net.sf.json.JSONObject;

/**
 * @author 王育春
 * @mail wyuch@zving.com
 * @date 2017年10月18日
 */
@RestSchema(schemaId = "form")
@RequestMapping(path = "/", produces = MediaType.APPLICATION_JSON)
public class DeclarationFormServiceImpl implements DeclarationFormService {

	@Override
	@RequestMapping(path = "declaration", method = RequestMethod.POST)
	public String add(@RequestBody DeclarationForm license) {
		StorageUtil.getInstance().add(DeclarationForm.class, license);
		return "添加成功";
	}

	@Override
	@RequestMapping(path = "declaration", method = RequestMethod.PUT)
	public void update(@RequestBody DeclarationForm license) {

		List<DeclarationForm> list = StorageUtil.getInstance().find(DeclarationForm.class, null);
		for (int i = 0; i < list.size(); i++) {
			if (list.get(i).getId().equals(license.getId())) {
				StorageUtil.getInstance().delete(DeclarationForm.class, list.get(i));
			}
		}
		StorageUtil.getInstance().add(DeclarationForm.class, license);
	}

	@Override
	@RequestMapping(path = "declaration/{ids}", method = RequestMethod.DELETE)
	public void delete(@PathVariable("ids") String ids) {
		String[] strId = ids.split(",");
		IStorage iStorage = StorageUtil.getInstance();
		List<DeclarationForm> list = iStorage.find(DeclarationForm.class, null);
		for (int i = 0; i < list.size(); i++) {
			for (int j = 0; j < strId.length; j++) {
				if (list.get(i).getId().equals(strId[j])) {
					System.out.println(strId[j]);
					iStorage.delete(DeclarationForm.class, list.get(i));
				}
			}
		}
	}

	@Override
	@RequestMapping(path = "declaration/{id}", method = RequestMethod.GET)
	public DeclarationForm get(@PathVariable("id") String id) {
		DeclarationForm declarationForm = new DeclarationForm();
		declarationForm.setId(id);
		System.out.println("id" + id);
		List<DeclarationForm> list = StorageUtil.getInstance().find(DeclarationForm.class, null);
		for (int i = 0; i < list.size(); i++) {
			if (list.get(i).getId().equals(id)) {
				return list.get(i);
			}
		}
		return null;
	}

	@Override
	@RequestMapping(path = "declaration/list/{form}", method = RequestMethod.GET)
	public List<DeclarationForm> list(@PathVariable("form") String form) {
		try {
			form = URLDecoder.decode(form, "UTF-8");
		} catch (UnsupportedEncodingException e1) {
			e1.printStackTrace();
		}
		JSONObject jsonObject = JSONObject.fromObject(form);
		DeclarationForm declarationForm = (DeclarationForm) JSONObject.toBean(jsonObject, DeclarationForm.class);
		Field[] field = declarationForm.getClass().getDeclaredFields();
		List<DeclarationForm> list = StorageUtil.getInstance().find(DeclarationForm.class, null);
		String name;
		List<DeclarationForm> list1 = new ArrayList<DeclarationForm>();
		try {
			if (jsonObject.size() == 0) {
				return list;
			}
			for (int i = 0; i < list.size(); i++) {
				boolean flag = false;
				loop: for (int j = 0; j < field.length; j++) {
					name = field[j].getName().substring(0, 1).toUpperCase() + field[j].getName().substring(1);
					String value = (String) declarationForm.getClass().getMethod("get" + name).invoke(declarationForm);
					if (value != null && !("null").equals(value)) {
						flag = true;
						String value1 = (String) list.get(i).getClass().getMethod("get" + name).invoke(list.get(i));
						System.out.println(value + "," + value1);
						if (!value.equals(value1)) {
							flag = false;
							break loop;
						}
					}
				}
				if (flag) {
					list1.add(list.get(i));
				}
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return list1;
	}
	

	@Override
	@RequestMapping(path = "declaration/packinglist", method = RequestMethod.POST)
	public String addPacking(@RequestBody PackingList packingList) {
		StorageUtil.getInstance().add(PackingList.class, packingList);
		return "添加成功";
	}

	@Override
	@RequestMapping(path = "declaration/packinglist", method = RequestMethod.PUT)
	public void updatePacking(@RequestBody PackingList packingList) {

		List<PackingList> list = StorageUtil.getInstance().find(PackingList.class, null);
		for (int i = 0; i < list.size(); i++) {
			if (list.get(i).getId().equals(packingList.getId())) {
				StorageUtil.getInstance().delete(PackingList.class, list.get(i));
			}
		}
		StorageUtil.getInstance().add(PackingList.class, packingList);
	}

	@Override
	@RequestMapping(path = "declaration/packinglist/{ids}", method = RequestMethod.DELETE)
	public void deletePacking(@PathVariable("ids") String ids) {
		String[] strId = ids.split(",");
		IStorage iStorage = StorageUtil.getInstance();
		List<PackingList> list = iStorage.find(PackingList.class, null);
		for (int i = 0; i < list.size(); i++) {
			for (int j = 0; j < strId.length; j++) {
				if (list.get(i).getId().equals(strId[j])) {
					System.out.println(strId[j]);
					iStorage.delete(PackingList.class, list.get(i));
				}
			}
		}
	}

	@Override
	@RequestMapping(path = "declaration/packinglist/{id}", method = RequestMethod.GET)
	public PackingList getPacking(@PathVariable("id") String id) {
		List<PackingList> list = StorageUtil.getInstance().find(PackingList.class, null);
		for (int i = 0; i < list.size(); i++) {
			if (list.get(i).getId().equals(id)) {
				return list.get(i);
			}
		}
		return null;
	}

	@Override
	@RequestMapping(path = "declaration/packinglist/list/{declarationid}", method = RequestMethod.GET)
	public List<PackingList> listPacking(@PathVariable("declarationid") String declarationid) {
		System.out.println("declarationid"+declarationid);
		List<PackingList> list = StorageUtil.getInstance().find(PackingList.class, null);
		List<PackingList> list1 = new ArrayList<PackingList>();
		for (int i = 0; i < list.size(); i++) {
			if (declarationid.equals(list.get(i).getDeclarationid())) {
				list1.add(list.get(i));
			}
		}
		return list1;
	}

}
