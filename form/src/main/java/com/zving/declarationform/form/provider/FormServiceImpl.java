package com.zving.declarationform.form.provider;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

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
		IStorage storage = StorageUtil.getInstance();
		List<DeclarationForm> list = storage.find(DeclarationForm.class, null);
		for (int i = 0; i < list.size(); i++) {
			if (list.get(i).getId().equals(form.getId())) {
				storage.delete(DeclarationForm.class, list.get(i));
			}
		}
		storage.add(DeclarationForm.class, form);
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
			if (jsonObject.size() == 4) {
				if ("null".equals(jsonObject.get("searchWord")) || "".equals(jsonObject.get("searchWord"))) {
					list1 = list;
				} else {
					name = String.valueOf(jsonObject.get("retrieval")).substring(0, 1).toUpperCase()
							+ String.valueOf(jsonObject.get("retrieval")).substring(1);
					String searchWord = (String) jsonObject.get("searchWord");
					String value;
					for (int i = 0; i < list.size(); i++) {
						value = String.valueOf(list.get(i).getClass().getMethod("get" + name).invoke(declarationForm));
						System.out.println(value);
						if (value != null && !("null").equals(value)) {
							System.out.println(searchWord);
							System.out.println(value.indexOf(searchWord));
							if (value.indexOf(searchWord) != -1) {
								System.out.println(value);
								list1.add(list.get(i));
							}
						}
					}
				}
			} else {
				for (int i = 0; i < list.size(); i++) {
					boolean flag = false;
					loop: for (int j = 0; j < field.length - 2; j++) {
						name = field[j].getName().substring(0, 1).toUpperCase() + field[j].getName().substring(1);
						String value = String.valueOf(declarationForm.getClass().getMethod("get" + name).invoke(declarationForm));
						if (value != null && !("null").equals(value)) {
							flag = true;
							String value1 = String.valueOf(list.get(i).getClass().getMethod("get" + name).invoke(list.get(i)));
							System.out.println(value + "," + value1);
							if (value1.indexOf(value) == -1) {
								flag = false;
								break loop;
							}
						}
					}
					if (flag) {
						list1.add(list.get(i));
					}
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		if (list.size() == 0) {
			return list;
		}
		int pageSize = jsonObject.getInt("pageSize");
		int pageIndex = jsonObject.getInt("pageIndex");
		int start = (pageIndex - 1) * pageSize;
		int end = pageSize * pageIndex;
		if ((list1.size() - start) < pageSize) {
			end = list1.size() - start;
		}
		list1 = list1.subList(start, end);
		list1.get(0).setTotal(list.size());
		return list1;
	}

	@Override
	@RequestMapping(path = "audit", method = RequestMethod.GET)
	@ResponseBody
	public List<DeclarationForm> auditList(@RequestParam String searchItem) {
		System.out.println(searchItem);
		JSONObject jsonObject = JSONObject.fromObject(searchItem);
		DeclarationForm declarationForm = (DeclarationForm) JSONObject.toBean(jsonObject, DeclarationForm.class);
		Field[] field = declarationForm.getClass().getDeclaredFields();
		List<DeclarationForm> list = StorageUtil.getInstance().find(DeclarationForm.class, null);

		String name;
		List<DeclarationForm> list1 = new ArrayList<DeclarationForm>();
		try {
			if (jsonObject.size() == 4) {
				if ("null".equals(jsonObject.get("searchWord")) || "".equals(jsonObject.get("searchWord"))) {
					list1 = list;
				} else {
					name = String.valueOf(jsonObject.get("retrieval")).substring(0, 1).toUpperCase()
							+ String.valueOf(jsonObject.get("retrieval")).substring(1);
					String searchWord = (String) jsonObject.get("searchWord");
					String value;
					for (int i = 0; i < list.size(); i++) {
						value = String.valueOf(list.get(i).getClass().getMethod("get" + name).invoke(declarationForm));
						System.out.println(value);
						if (value != null && !("null").equals(value)) {
							System.out.println(searchWord);
							System.out.println(value.indexOf(searchWord));
							if (value.indexOf(searchWord) != -1) {
								System.out.println(value);
								list1.add(list.get(i));
							}
						}
					}
				}
			} else {
				for (int i = 0; i < list.size(); i++) {
					boolean flag = false;
					loop: for (int j = 0; j < field.length - 2; j++) {
						name = field[j].getName().substring(0, 1).toUpperCase() + field[j].getName().substring(1);
						String value = String.valueOf(declarationForm.getClass().getMethod("get" + name).invoke(declarationForm));
						if (value != null && !("null").equals(value)) {
							flag = true;
							String value1 = String.valueOf(list.get(i).getClass().getMethod("get" + name).invoke(list.get(i)));
							System.out.println(value + "," + value1);
							if (value1.indexOf(value) == -1) {
								flag = false;
								break loop;
							}
						}
					}
					if (flag) {
						list1.add(list.get(i));
					}
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		if (list.size() == 0) {
			return list;
		}
		List<DeclarationForm> list2 = new ArrayList<>();
		for (int i = 0; i < list1.size(); i++) {
			System.out.println(list1.get(i).getAuditStatus());
			if (list1.get(i).getAuditStatus() != null) {
				list2.add(list1.get(i));
			}
		}
		int pageSize = jsonObject.getInt("pageSize");
		int pageIndex = jsonObject.getInt("pageIndex");
		int start = (pageIndex - 1) * pageSize;
		int end = pageSize * pageIndex;
		if ((list2.size() - start) < pageSize) {
			end = list2.size() - start;
		}
		list2 = list2.subList(start, end);
		list2.get(0).setTotal(list.size());

		return list2;
	}

	@Override
	@RequestMapping(path = "audit", method = RequestMethod.PUT)
	@ResponseBody
	public String audit(@RequestBody Map<String,String> map) {
		String ids = map.get("ids");
		String statu = map.get("statu");
		System.out.println(ids);
		System.out.println(statu);
		IStorage storage = StorageUtil.getInstance();
		String[] strId = ids.split(",");
		List<DeclarationForm> list = storage.find(DeclarationForm.class, null);
		DeclarationForm df = new DeclarationForm();
		for (int i = 0; i < list.size(); i++) {
			for (int j = 0; j < strId.length; j++) {
				if (String.valueOf(list.get(i).getId()).equals(strId[j])) {
					df = list.get(i);
					df.setAuditStatus(statu);
					if (statu.equals("W")) {
						df.setAuditStatusName("未审核");
					} else if (statu.equals("Y")) {
						df.setAuditStatusName("通过");
					} else if (statu.equals("N")) {
						df.setAuditStatusName("不通过");
					} else if (statu.equals("P")) {
						df.setAuditStatusName("放行");
					}
					storage.delete(DeclarationForm.class, list.get(i));
					storage.add(DeclarationForm.class, df);
				}
			}
		}
		return "提交审核成功";
	}
}
