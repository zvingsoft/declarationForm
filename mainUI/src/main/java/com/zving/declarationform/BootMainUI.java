package com.zving.declarationform;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.servicecomb.foundation.common.utils.Log4jUtils;
import io.servicecomb.springboot.starter.provider.EnableServiceComb;

@SpringBootApplication
@EnableServiceComb
public class BootMainUI {

	public static void main(String[] args) throws Exception {
		Log4jUtils.init();
		SpringApplication.run(BootMainUI.class, args);
	}
}
