package com.zving.declarationform.tax.provider;

import java.util.List;

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

import io.servicecomb.provider.rest.common.RestSchema;

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
		StorageUtil.getInstance().add(TaxRate.class, rate);
		return "添加成功";
	}

	@RequestMapping(path = "taxrate", method = RequestMethod.PUT)
	@ResponseBody
	public String update(@RequestBody TaxRate rate) {
		StorageUtil.getInstance().update(TaxRate.class, get(rate.getSKU()), rate);
		return "更新成功";
	}

	@RequestMapping(path = "taxrate/{SKUs}", method = RequestMethod.DELETE)
	@ResponseBody
	public String delete(@PathVariable("SKUs") String ids) {
		String[] strId = ids.split(",");
		IStorage iStorage = StorageUtil.getInstance();
		List<TaxRate> list = iStorage.find(TaxRate.class, null);
		for (int i = 0; i < list.size(); i++) {
			for (int j = 0; j < strId.length; j++) {
				if (list.get(i).getSKU().equals(strId[j])) {
					iStorage.delete(TaxRate.class, list.get(i));
				}
			}
		}
		return "删除成功";
	}

	@RequestMapping(path = "taxrate/{SKU}", method = RequestMethod.DELETE)
	@ResponseBody
	public TaxRate get(@PathVariable("SKU") String sku) {
		TaxRate rate = new TaxRate();
		rate.setSKU(sku);
		return StorageUtil.getInstance().get(TaxRate.class, rate);
	}

	@RequestMapping(path = "taxrate", method = RequestMethod.GET)
	@ResponseBody
	public List<TaxRate> list() {
		return StorageUtil.getInstance().find(TaxRate.class, new TaxRate());
	}

}
