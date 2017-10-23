package com.zving.declarationform;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;

import io.servicecomb.springboot.starter.provider.EnableServiceComb;

@SpringBootApplication
@EnableServiceComb
@EnableZuulProxy
public class BootMainUI {

	public static void main(String[] args) throws Exception {
		SpringApplication.run(BootMainUI.class, args);
	}
}
