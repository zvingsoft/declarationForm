package com.zving.declarationform.form.provider;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.core.MediaType;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zving.declarationform.form.schema.FormService;
import com.zving.declarationform.model.DeclarationForm;
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
@Controller
public class FormServiceImpl implements FormService {

	@Override
	@RequestMapping(path = "form", method = RequestMethod.POST)
	@ResponseBody
	public String add(@RequestBody DeclarationForm form) {
		StorageUtil.getInstance().add(DeclarationForm.class, form);
		return "添加成功";
	}

	@Override
	@RequestMapping(path = "form", method = RequestMethod.PUT)
	@ResponseBody
	public String update(@RequestBody DeclarationForm form) {
		DeclarationForm old = new DeclarationForm();
		old.setId(form.getId());
		StorageUtil.getInstance().update(DeclarationForm.class, old, form);
		return "更新成功";
	}

	@Override
	@RequestMapping(path = "form/{ids}", method = RequestMethod.DELETE)
	@ResponseBody
	public String delete(@PathVariable("ids") String ids) {
		String[] strId = ids.split(",");
		IStorage iStorage = StorageUtil.getInstance();
		List<DeclarationForm> list = iStorage.find(DeclarationForm.class, null);
		for (int i = 0; i < list.size(); i++) {
			for (int j = 0; j < strId.length; j++) {
				if (list.get(i).getId().equals(strId[j])) {
					iStorage.delete(DeclarationForm.class, list.get(i));
				}
			}
		}
		return "删除成功";
	}

	@Override
	@RequestMapping(path = "form/{id}", method = RequestMethod.GET)
	@ResponseBody
	public DeclarationForm get(@PathVariable("id") String id) {
		DeclarationForm declarationForm = new DeclarationForm();
		declarationForm.setId(id);
		return StorageUtil.getInstance().get(DeclarationForm.class, declarationForm);
	}

	@Override
	@RequestMapping(path = "form", method = RequestMethod.GET)
	@ResponseBody
	public List<DeclarationForm> list(@RequestParam String searchItem) {
		System.out.println(searchItem);
		JSONObject jsonObject = JSONObject.fromObject(searchItem);
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
			e.printStackTrace();
		}
		return list1;
	}

}
