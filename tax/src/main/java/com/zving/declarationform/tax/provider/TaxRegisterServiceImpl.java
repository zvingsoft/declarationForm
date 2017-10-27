package com.zving.declarationform.tax.provider;

import java.util.List;

import javax.ws.rs.core.MediaType;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zving.declarationform.storage.IStorage;
import com.zving.declarationform.storage.StorageUtil;
import com.zving.declarationform.tax.model.TaxRegister;
import com.zving.declarationform.tax.schema.TaxRegisterService;

import io.servicecomb.provider.rest.common.RestSchema;

/**
 * 缴税登记服务实现类
 * 
 * @author 徐俊豪
 * @mail xujunhaoh@zving.com
 * @date 2017年10月26日
 */
@RestSchema(schemaId = "taxRegister")
@RequestMapping(path = "/", produces = MediaType.APPLICATION_JSON)
@Controller
public class TaxRegisterServiceImpl implements TaxRegisterService {

	@Override
	@RequestMapping(path = "taxRegister", method = RequestMethod.POST)
	@ResponseBody
	public String add(@RequestBody TaxRegister taxRegister) {
		taxRegister.setRegisterStatus("N");
		taxRegister.setRegisterStatusName("未缴税");
		StorageUtil.getInstance().add(TaxRegister.class, taxRegister);
		return "添加成功";
	}

	@Override
	@RequestMapping(path = "taxRegister", method = RequestMethod.PUT)
	@ResponseBody
	public String update(@RequestBody TaxRegister taxRegister) {
		IStorage storage = StorageUtil.getInstance();
		List<TaxRegister> list = storage.find(TaxRegister.class, null);
		for (int i = 0; i < list.size(); i++) {
			if (list.get(i).getId() == taxRegister.getId()) {
				storage.delete(TaxRegister.class, list.get(i));
			}
		}

		storage.add(TaxRegister.class, taxRegister);
		return "更新成功";
	}

	@Override
	@RequestMapping(path = "taxRegister/{ids}", method = RequestMethod.DELETE)
	@ResponseBody
	public String delete(@PathVariable("ids") String ids) {
		String[] strId = ids.split(",");
		IStorage iStorage = StorageUtil.getInstance();
		List<TaxRegister> list = iStorage.find(TaxRegister.class, null);
		for (int i = 0; i < list.size(); i++) {
			for (int j = 0; j < strId.length; j++) {
				if (list.get(i).getId() == Long.parseLong(strId[j])) {
					iStorage.delete(TaxRegister.class, list.get(i));
				}
			}
		}
		return "删除成功";
	}

	@Override
	@RequestMapping(path = "taxRegister/{id}", method = RequestMethod.GET)
	@ResponseBody
	public TaxRegister get(@PathVariable("id") long id) {
		TaxRegister taxRegister = new TaxRegister();
		taxRegister.setId(id);
		taxRegister = StorageUtil.getInstance().get(TaxRegister.class, taxRegister);
		if (taxRegister == null) {
			taxRegister = new TaxRegister();
		}
		return taxRegister;
	}

	@Override
	@RequestMapping(path = "taxRegister", method = RequestMethod.GET)
	@ResponseBody
	public List<TaxRegister> list(@RequestParam String searchItem) {
		System.out.println(searchItem);
		List<TaxRegister> list = StorageUtil.getInstance().find(TaxRegister.class, null);

		return list;
	}

}
