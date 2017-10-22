package com.zving.declarationform.form.consumer;

import java.util.HashMap;

import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import io.servicecomb.foundation.common.utils.BeanUtils;
import io.servicecomb.foundation.common.utils.Log4jUtils;
import io.servicecomb.provider.springmvc.reference.RestTemplateBuilder;

/**
 * @author 王育春
 * @mail wyuch@zving.com
 * @date 2017年10月20日
 */
@Component
public class TaxConsumer {

	public static void main(String[] args) throws Exception {
		init();
		// jsonCall();
		// schemaCall();
		addRate();
	}

	static void jsonCall() {
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("SKU", "1");
		map.put("SKUName", "MacbookPro E3C50");
		map.put("rate", 15);
		RestTemplate restTemplate = RestTemplateBuilder.create();
		System.out.println(restTemplate.postForObject("cse://tax/compute", map, String.class));
		System.out.println(restTemplate.postForObject("cse://tax/confirm", map, String.class));
	}

	static void addRate() {
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("SKU", "1");
		map.put("SKUName", "MacbookPro E3C50");
		map.put("rate", 15);
		RestTemplate restTemplate = RestTemplateBuilder.create();
		System.out.println(restTemplate.postForObject("cse://tax/taxrate", map, String.class));
	}

	public static void init() throws Exception {
		Log4jUtils.init();
		BeanUtils.init();
	}
}
