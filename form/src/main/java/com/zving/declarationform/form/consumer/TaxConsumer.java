package com.zving.declarationform.form.consumer;

import java.util.HashMap;

import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import com.zving.declarationform.model.DeclarationForm;

import io.servicecomb.foundation.common.utils.BeanUtils;
import io.servicecomb.foundation.common.utils.Log4jUtils;
import io.servicecomb.provider.pojo.RpcReference;
import io.servicecomb.provider.springmvc.reference.RestTemplateBuilder;

/**
 * @author 王育春
 * @mail wyuch@zving.com
 * @date 2017年10月20日
 */
@Component
public class TaxConsumer {

	@RpcReference(microserviceName = "tax", schemaId = "tax")
	private static TaxServiceSchema tax;

	public static void main(String[] args) throws Exception {
		init();
		jsonCall();
		schemaCall();
		addRate();
	}

	static void jsonCall() {
		HashMap<String, String> map = new HashMap<String, String>();
		map.put("SN", "1");
		map.put("CustomsNumber", "2");
		RestTemplate restTemplate = RestTemplateBuilder.create();
		System.out.println(restTemplate.postForObject("cse://tax/compute", map, String.class));
		System.out.println(restTemplate.postForObject("cse://tax/confirm", map, String.class));
	}

	static void schemaCall() {
		DeclarationForm form = new DeclarationForm();
		form.SN = "1";
		form.CustomsNumber = "2";
		System.out.println("Schema call tax.compute(): " + tax.compute(form));
		System.out.println("Schema call tax.confirm(): " + tax.confirm(form));
	}

	static void addRate() {
		HashMap<String, String> map = new HashMap<String, String>();
		map.put("goodsType", "1");
		map.put("rate", "0.1");
		RestTemplate restTemplate = RestTemplateBuilder.create();
		System.out.println(restTemplate.postForObject("cse://tax/taxrate", map, String.class));
	}

	public static void init() throws Exception {
		Log4jUtils.init();
		BeanUtils.init();
	}
}
