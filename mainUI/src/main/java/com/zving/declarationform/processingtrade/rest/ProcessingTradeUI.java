package com.zving.declarationform.processingtrade.rest;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import javax.ws.rs.core.MediaType;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import com.zving.declarationform.base.BaseUI;
import com.zving.declarationform.dto.ResponseDTO;
import com.zving.declarationform.model.ProcessingTrade;

import io.servicecomb.provider.rest.common.RestSchema;
import io.servicecomb.provider.springmvc.reference.RestTemplateBuilder;

/**
 * @author zhaochangjin
 * @mail zhaochangjin@zving.com
 * @date 2017年10月20日
 */
@Controller
@RestSchema(schemaId = "ProcessingTradeUI")
@RequestMapping(path = "api/", produces = MediaType.APPLICATION_JSON)
public class ProcessingTradeUI extends BaseUI {

	@RequestMapping(path = "processingtrade", method = RequestMethod.POST)
	public String add(@RequestBody ProcessingTrade processingTrade) {
		return null;
	}

	@RequestMapping(path = "processingtrade", method = RequestMethod.PUT)
	public String update(@RequestBody ProcessingTrade processingTrade) {
		System.out.println("processingTrade.getNumber():" + processingTrade.getNumber());
		System.out.println("processingTrade.getCommissionedCorp():" + processingTrade.getCommissionedCorp());
		System.out.println("processingTrade.getProcessCorp():" + processingTrade.getProcessCorp());
		RestTemplate restTemplate = RestTemplateBuilder.create();
		restTemplate.put("cse://processingTrade/api/processingtrade", processingTrade);
		return "更新成功";
	}

	@RequestMapping(path = "processingtrade/{number}", method = RequestMethod.DELETE)
	public String delete(@PathVariable String number) {
		RestTemplate restTemplate = RestTemplateBuilder.create();
		try {
			restTemplate.delete(new URI("cse://processingTrade/api/processingtrade/" + number));
		} catch (RestClientException e) {
			e.printStackTrace();
		} catch (URISyntaxException e) {
			e.printStackTrace();
		}
		return "删除成功";
	}

	@RequestMapping(path = "processingtrade/{number}", method = RequestMethod.GET)
	public ProcessingTrade get(@PathVariable String number) {
		RestTemplate restTemplate = RestTemplateBuilder.create();
		return restTemplate.getForObject("cse://processingTrade/api/processingtrade/" + number, ProcessingTrade.class);
	}

	@SuppressWarnings("unchecked")
	@RequestMapping(path = "processingtrade/{pageIndex}/{pageSize}", method = RequestMethod.GET)
	public @ResponseBody ResponseDTO list(@PathVariable String pageIndex, @PathVariable String pageSize) {
		RestTemplate restTemplate = RestTemplateBuilder.create();
		List<ProcessingTrade> list = restTemplate.getForObject("cse://processingTrade/api/processingtrade/{pageIndex}/{pageSize}",
				List.class, pageIndex, pageSize);
		return success("执行成功", list);
	}

}
