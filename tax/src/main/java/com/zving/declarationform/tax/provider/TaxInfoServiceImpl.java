package com.zving.declarationform.tax.provider;

import io.servicecomb.provider.rest.common.RestSchema;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.ws.rs.core.MediaType;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.zving.declarationform.model.TaxInfo;
import com.zving.declarationform.storage.IStorage;
import com.zving.declarationform.storage.StorageUtil;
import com.zving.declarationform.tax.schema.TaxInfoService;

/**
 * @author hhp
 * @mail hhp@zving.com
 * @date 2017年10月21日
 */

@RestSchema(schemaId = "taxInfo")
@RequestMapping(path = "/", produces = MediaType.APPLICATION_JSON)
public class TaxInfoServiceImpl implements TaxInfoService {

	private static final String SUCESS = "sucess";

	@Override
	@RequestMapping(path = "taxinfo", method = RequestMethod.POST)
	public String addTaxInfo(@RequestBody TaxInfo taxInfo) {
		StorageUtil.getInstance().add(TaxInfo.class, taxInfo);
		System.out.println("TaxInfo----创建成功");
		return SUCESS;
	}

	@Override
	@RequestMapping(path = "taxinfo", method = RequestMethod.PUT)
	public String updateTaxInfo(@RequestBody TaxInfo taxInfo) {
		final IStorage storage = StorageUtil.getInstance();
		List<TaxInfo> list = storage.find(TaxInfo.class, null);
		for (TaxInfo item : list) {
			if (taxInfo.getId() == item.getId()) {
				StorageUtil.getInstance().update(TaxInfo.class, item, taxInfo);
				return "更新成功";
			}
		}
		return "更新失败";
	}

	@Override
	@RequestMapping(path = "taxinfo/{ids}", method = RequestMethod.DELETE)
	public String deleteTaxInfo(@PathVariable("ids") String ids) {
		String[] split = ids.split(",");
		Set<Long> idSet = new HashSet<Long>();
		for (String id : split) {
			if (id != null && id != "") {
				idSet.add(Long.valueOf(id));
			}
		}
		IStorage instance = StorageUtil.getInstance();
		List<TaxInfo> list = instance.find(TaxInfo.class, null);
		List<TaxInfo> allList = new ArrayList<TaxInfo>();
		allList.addAll(list);
		for (TaxInfo taxInfo : allList) {
			if (idSet.contains(taxInfo.getId())) {
				try {
					instance.delete(TaxInfo.class, taxInfo);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		}
		System.out.println("TaxInfo----删除成功");
		return SUCESS;
	}

	@Override
	@RequestMapping(path = "taxinfo/{id}", method = RequestMethod.GET)
	public TaxInfo getTaxInfo(@PathVariable("id") long id) {
		List<TaxInfo> list = StorageUtil.getInstance().find(TaxInfo.class, null);
		for (TaxInfo taxInfo : list) {
			if (taxInfo.getId() == id) {
				return taxInfo;
			}
		}
		return null;
	}

	@Override
	@RequestMapping(path = "taxinfo", method = RequestMethod.GET)
	public List<TaxInfo> getTaxInfoList() {
		List<TaxInfo> list = StorageUtil.getInstance().find(TaxInfo.class, null);
		return list;
	}

}
