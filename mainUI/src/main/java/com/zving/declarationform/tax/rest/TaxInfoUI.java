package com.zving.declarationform.tax.rest;

import io.servicecomb.provider.springmvc.reference.RestTemplateBuilder;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import javax.ws.rs.core.MediaType;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import com.zving.declarationform.base.BaseUI;
import com.zving.declarationform.dto.ResponseDTO;
import com.zving.declarationform.model.TaxInfo;

/**
 * @author hhp
 * @mail hhp@zving.com
 * @date 2017年10月21日
 */
@Controller
@RequestMapping(path = "api/", produces = MediaType.APPLICATION_JSON)
public class TaxInfoUI extends BaseUI {

	private static final String STATUS = "sucess";

	@SuppressWarnings("unchecked")
	@RequestMapping(path = "taxs", method = RequestMethod.GET)
	public @ResponseBody ResponseDTO list(@RequestParam(required = false) String taxnum,
			@RequestParam(required = false) String taxgoodstype, @RequestParam(required = false) Integer pageIndex,
			@RequestParam(required = false) Integer pageSize) {
		RestTemplate restTemplate = RestTemplateBuilder.create();
		List<TaxInfo> list = restTemplate.getForObject("cse://tax/taxinfo", List.class);
		if (list != null && ((taxnum != null && taxnum != "") || (taxgoodstype != null && taxgoodstype != ""))) {
			List<TaxInfo> Alllist = new ArrayList<TaxInfo>();
			Alllist.addAll(list);
			for (TaxInfo taxInfo : Alllist) {
				if (taxnum != null && taxnum != "") {
					if (taxInfo.getTaxnum().indexOf(taxnum) == -1) {
						list.remove(taxInfo);
					}
				}
				if (taxgoodstype != null && taxgoodstype != "") {
					if (taxInfo.getTaxgoodstype().indexOf(taxgoodstype) == -1) {
						list.remove(taxInfo);
					}
				}
			}
		}
		if (pageSize == null) {
			pageSize = 10;
		}
		if (pageIndex == null) {
			pageIndex = 0;
		} else {
			pageIndex--;
		}
		int fromIndex = pageSize * pageIndex;
		if (fromIndex > list.size()) {
			fromIndex = list.size();
		}
		int toIndex = pageSize * (pageIndex - 1);
		if (toIndex > list.size() || toIndex <= 0) {
			toIndex = list.size();
		}
		List<TaxInfo> subList = list.subList(fromIndex, toIndex);
		return success("数据列表", subList, list.size());
	}

	@SuppressWarnings("unchecked")
	@RequestMapping(path = "taxs", method = RequestMethod.POST)
	public @ResponseBody ResponseDTO add(@RequestBody TaxInfo taxInfo) {
		String taxNum = taxInfo.getTaxnum();
		if (taxNum == null || taxNum == "") {
			return fail("税号不能为空");
		}
		String taxgoodstype = taxInfo.getTaxgoodstype();
		if (taxgoodstype == null || taxgoodstype == "") {
			return fail("物品类型不能为空");
		}
		RestTemplate restTemplate = RestTemplateBuilder.create();
		List<TaxInfo> list = restTemplate.getForObject("cse://tax/taxinfo", List.class);
		long maxID = 1;
		for (TaxInfo ti : list) {
			if (ti.getId() >= maxID) {
				maxID = ti.getId() + 1;
			}
		}
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("id", maxID);
		map.put("taxnum", taxNum);
		map.put("taxgoodstype", taxgoodstype);
		map.put("unit", taxInfo.getUnit());
		map.put("range", taxInfo.getRange());
		map.put("taxrate", taxInfo.getTaxrate());
		map.put("freemoney", taxInfo.getFreemoney());
		Date currentTime = new Date();
		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		String dateString = formatter.format(currentTime);
		map.put("modifydate", dateString);
		ResponseDTO data = new ResponseDTO();
		data.setStatus(SUCESS);
		try {
			String status = restTemplate.postForObject("cse://tax/taxinfo", map, String.class);
			if (STATUS.equals(status)) {
				data = success("新建成功");
			}
		} catch (RestClientException e) {
			e.printStackTrace();
			data = fail(e.getMessage());
		}
		return data;
	}

	@RequestMapping(path = "taxs/{id}", method = RequestMethod.GET)
	public TaxInfo get(@PathVariable("id") long id) {
		RestTemplate restTemplate = RestTemplateBuilder.create();
		TaxInfo taxInfo = restTemplate.getForObject("cse://tax/taxinfo/" + id, TaxInfo.class);
		return taxInfo;
	}

	@RequestMapping(path = "taxs/{ids}", method = RequestMethod.DELETE)
	public @ResponseBody ResponseDTO delete(@PathVariable("ids") String ids) {
		ResponseDTO data = new ResponseDTO();
		data.setStatus(SUCESS);
		RestTemplate restTemplate;
		try {
			restTemplate = RestTemplateBuilder.create();
			restTemplate.delete("cse://tax/taxinfo/" + ids);
			data = success("删除成功");
		} catch (RestClientException e) {
			e.printStackTrace();
			data = fail(e.getMessage());
		}
		return data;
	}

	@RequestMapping(path = "taxs", method = RequestMethod.PUT)
	public @ResponseBody ResponseDTO update(@RequestBody TaxInfo taxInfo) {
		RestTemplate restTemplate = RestTemplateBuilder.create();
		restTemplate.put("cse://tax/taxinfo", taxInfo);
		return success("更新成功");
	}

}
