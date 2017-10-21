package com.zving.declarationform.mainui;

import io.servicecomb.foundation.common.utils.Log4jUtils;
import io.servicecomb.springboot.starter.provider.EnableServiceComb;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableAutoConfiguration
@ComponentScan({ "com.zving.declarationform" })
@EnableServiceComb
public class BootMainUI {

	public static void main(String[] args) throws Exception {
		Log4jUtils.init();
		// BeanUtils.init();
		SpringApplication.run(BootMainUI.class);
	}
}
