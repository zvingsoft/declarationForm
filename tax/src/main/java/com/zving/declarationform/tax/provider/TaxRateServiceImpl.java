package com.zving.declarationform.tax.provider;

import java.util.List;

import javax.ws.rs.core.MediaType;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

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
public class TaxRateServiceImpl implements TaxRateService {

	@RequestMapping(path = "taxrate", method = RequestMethod.POST)
	public String addRate(@RequestBody TaxRate rate) {
//		StorageUtil.getInstance().add(TaxRate.class, rate);
		return "添加成功";
	}

	@RequestMapping(path = "taxrate", method = RequestMethod.PUT)
	public String updateRate(@RequestBody TaxRate rate) {
		StorageUtil.getInstance().update(TaxRate.class, rate);
		return "更新成功";
	}

	@RequestMapping(path = "taxrate/{goodsType}", method = RequestMethod.DELETE)
	public String deleteRate(@PathVariable("goodsType") String goodsType) {
		TaxRate rate = new TaxRate();
		rate.setGoodsType(goodsType);
		StorageUtil.getInstance().delete(TaxRate.class, rate);
		return "删除成功";
	}

	@RequestMapping(path = "taxrate/{goodsType}", method = RequestMethod.GET)
	public TaxRate getRate(@PathVariable("goodsType") String goodsType) {
		TaxRate rate = new TaxRate();
		rate.setGoodsType(goodsType);
		return StorageUtil.getInstance().get(TaxRate.class, rate);
	}

	@RequestMapping(path = "taxrate", method = RequestMethod.GET)
	public List<TaxRate> listRate() {
		return StorageUtil.getInstance().find(TaxRate.class, new TaxRate());
	}

}
