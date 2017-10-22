package com.zving.declarationform;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

import io.servicecomb.foundation.common.utils.Log4jUtils;
import io.servicecomb.springboot.starter.provider.EnableServiceComb;

@SpringBootApplication
@EnableServiceComb
@EnableDiscoveryClient
public class BootRiskAnalysis {

	public static void main(String[] args) throws Exception {
		Log4jUtils.init();
		SpringApplication.run(BootRiskAnalysis.class, args);
	}
}
