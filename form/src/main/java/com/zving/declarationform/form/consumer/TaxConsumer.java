package com.zving.declarationform.form.consumer;

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

	private static RestTemplate restTemplate = RestTemplateBuilder.create();

	@RpcReference(microserviceName = "tax", schemaId = "tax")
	private static TaxService tax;

	public static void main(String[] args) throws Exception {
		init();
		DeclarationForm form = new DeclarationForm();

		// RestTemplate Consumer or POJO Consumer. You can choose whatever you like
		// RestTemplate Consumer
//		String sayHiResult = restTemplate.postForObject("cse://springmvc/springmvchello/sayhi?name=Java Chassis", null, String.class);
//		String sayHelloResult = restTemplate.postForObject("cse://springmvc/springmvchello/sayhello", person, String.class);
//		System.out.println("RestTemplate Consumer or POJO Consumer.  You can choose whatever you like.");
//		System.out.println("RestTemplate consumer sayhi services: " + sayHiResult);
//		System.out.println("RestTemplate consumer sayhello services: " + sayHelloResult);

		// POJO Consumer
		System.out.println("POJO consumer sayhi services: " + tax.compute(form));
		System.out.println("POJO consumer sayhi services: " + tax.confirm(form));
	}

	public static void init() throws Exception {
		Log4jUtils.init();
		BeanUtils.init();
	}
}
