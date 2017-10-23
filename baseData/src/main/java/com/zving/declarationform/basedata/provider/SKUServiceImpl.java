package com.zving.declarationform.basedata.provider;

import java.util.List;

import javax.ws.rs.core.MediaType;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zving.declarationform.basedata.schema.SKUService;
import com.zving.declarationform.model.SKU;
import com.zving.declarationform.storage.IStorage;
import com.zving.declarationform.storage.StorageUtil;

import io.servicecomb.provider.rest.common.RestSchema;

/**
 * @author xujunhao
 * @mail xujunhao@zving.com
 * @date 2017年10月23日
 * @description:SKU商品管理
 */
@RestSchema(schemaId = "sku")
@RequestMapping(path = "/", produces = MediaType.APPLICATION_JSON)
@Controller
public class SKUServiceImpl implements SKUService {

	IStorage storage = StorageUtil.getInstance();

	@Override
	@RequestMapping(path = "sku", method = RequestMethod.GET)
	@ResponseBody
	public List<SKU> list(@RequestParam String searchWord) {
		return storage.find(SKU.class, null);
	}

	@Override
	@RequestMapping(path = "sku/{id}", method = RequestMethod.GET)
	@ResponseBody
	public SKU get(@PathVariable("id") long id) {
		SKU sku = new SKU();
		sku.setId(id);
		return StorageUtil.getInstance().get(SKU.class, sku);
	}

	@Override
	@RequestMapping(path = "sku/{ids}", method = RequestMethod.DELETE)
	@ResponseBody
	public String delete(@PathVariable("ids") String ids) {
		String[] strId = ids.split(",");
		List<SKU> list = storage.find(SKU.class, null);
		for (int i = 0; i < list.size(); i++) {
			for (int j = 0; j < strId.length; j++) {
				if (String.valueOf(list.get(i).getId()).equals(strId[j])) {
					storage.delete(SKU.class, list.get(i));
				}
			}
		}
		return "删除成功";
	}

	@Override
	@RequestMapping(path = "sku", method = RequestMethod.POST)
	@ResponseBody
	public String add(@RequestBody SKU sku) {
		storage.add(SKU.class, sku);
		return "添加成功";
	}

	@Override
	@RequestMapping(path = "sku", method = RequestMethod.PUT)
	@ResponseBody
	public String update(@RequestBody SKU sku) {
		List<SKU> list = storage.find(SKU.class, null);
		for (int i = 0; i < list.size(); i++) {
			if (list.get(i).getId()==sku.getId()) {
				storage.delete(SKU.class, list.get(i));
			}
		}
		storage.add(SKU.class, sku);
		return "更新成功";
	}

}
