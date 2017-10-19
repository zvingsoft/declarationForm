package com.zving.declarationform.tax.provider;

import javax.ws.rs.core.MediaType;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.zving.declarationform.model.DeclarationForm;
import com.zving.declarationform.tax.model.TaxRate;
import com.zving.declarationform.tax.schema.TaxService;

import io.servicecomb.provider.rest.common.RestSchema;

/**
 * 计税服务实现类
 * 
 * @author 王育春
 * @mail wyuch@zving.com
 * @date 2017年10月18日
 */
@RestSchema(schemaId = "tax")
@RequestMapping(path = "/", produces = MediaType.APPLICATION_JSON)
public class TaxServiceImpl implements TaxService {

	@Override
	@RequestMapping(path = "compute", method = RequestMethod.POST)
	public String compute(@RequestBody DeclarationForm form) {
		return null;
	}

	@Override
	@RequestMapping(path = "confirm", method = RequestMethod.POST)
	public String confirm(@RequestBody DeclarationForm form) {
		return null;
	}

	@Override
	@RequestMapping(path = "taxrate", method = RequestMethod.POST)
	public String addRate(@RequestBody TaxRate rate) {
		return null;
	}

	@Override
	@RequestMapping(path = "taxrate", method = RequestMethod.PUT)
	public String updateRate(@RequestBody TaxRate rate) {
		return null;
	}

	@Override
	@RequestMapping(path = "taxrate/{goodsType}", method = RequestMethod.DELETE)
	public String deleteRate(@PathVariable("goodsType") String goodsType) {
		return null;
	}

	@Override
	@RequestMapping(path = "taxrate/{goodsType}", method = RequestMethod.GET)
	public String getRate(@PathVariable("goodsType") String goodsType) {
		return null;
	}

	@Override
	@RequestMapping(path = "taxrate", method = RequestMethod.GET)
	public String listRate() {
		return null;
	}

}
