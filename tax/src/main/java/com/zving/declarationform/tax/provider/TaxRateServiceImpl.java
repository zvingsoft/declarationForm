package com.zving.declarationform.tax.provider;

import io.servicecomb.provider.rest.common.RestSchema;
import io.vertx.core.json.JsonObject;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
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

import com.zving.declarationform.storage.IStorage;
import com.zving.declarationform.storage.StorageUtil;
import com.zving.declarationform.tax.model.TaxRate;
import com.zving.declarationform.tax.schema.TaxRateService;

/**
 * 税率服务实现类
 * 
 * @author 王育春
 * @mail wyuch@zving.com
 * @date 2017年10月18日
 */
@RestSchema(schemaId = "taxRate")
@RequestMapping(path = "/", produces = MediaType.APPLICATION_JSON)
@Controller
public class TaxRateServiceImpl implements TaxRateService {

	@RequestMapping(path = "taxrate", method = RequestMethod.POST)
	@ResponseBody
	public String add(@RequestBody TaxRate rate) {

		List<TaxRate> list = StorageUtil.getInstance().find(TaxRate.class, null);
		long maxID = 1;
		for (TaxRate tr : list) {
			if (tr.getId() >= maxID) {
				maxID = tr.getId() + 1;
			}
		}
		rate.setId(maxID);
		Date currentTime = new Date();
		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		String dateString = formatter.format(currentTime);
		rate.setModifyDate(dateString);
		StorageUtil.getInstance().add(TaxRate.class, rate);
		JsonObject o = new JsonObject();
		o.put("status", 1);
		o.put("message", "添加成功");
		return o.toString();
	}

	@RequestMapping(path = "taxrate", method = RequestMethod.PUT)
	@ResponseBody
	public String update(@RequestBody TaxRate rate) {
		IStorage storage = StorageUtil.getInstance();
		List<TaxRate> list = storage.find(TaxRate.class, null);
		JsonObject o = new JsonObject();
		o.put("status", 1);
		for (TaxRate item : list) {
			if (rate.getId() == item.getId()) {
				StorageUtil.getInstance().update(TaxRate.class, item, rate);
				o.put("message", "更新成功");
				return o.toString();
			}
		}
		o.put("message", "更新失败，无数据");
		return o.toString();
	}

	@RequestMapping(path = "taxrate/{ids}", method = RequestMethod.DELETE)
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
		List<TaxRate> list = instance.find(TaxRate.class, null);
		List<TaxRate> allList = new ArrayList<TaxRate>();
		allList.addAll(list);
		for (TaxRate tr : allList) {
			if (idSet.contains(tr.getId())) {
				try {
					instance.delete(TaxRate.class, tr);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		}
		System.out.println("Tax----删除成功");
		JsonObject o = new JsonObject();
		o.put("status", 1);
		o.put("message", "删除成功");
		return o.toString();
	}

	@RequestMapping(path = "taxrate/{id}", method = RequestMethod.GET)
	@ResponseBody
	public TaxRate get(@PathVariable("id") String sku) {
		TaxRate rate = new TaxRate();
		rate.setSKU(sku);
		return StorageUtil.getInstance().get(TaxRate.class, rate);
	}

	@RequestMapping(path = "taxrate", method = RequestMethod.GET)
	@ResponseBody
	public List<TaxRate> list() {
		List<TaxRate> list = StorageUtil.getInstance().find(TaxRate.class, null);
		return list;
	}

}
