package com.zving.declarationform;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * 解决跨域问题
 * 
 * @author 曾鹏
 * @mail zp@zving.com
 * @date 2017年10月21日
 */
@Configuration
public class CorsConfig extends WebMvcConfigurerAdapter {
	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**").allowedOrigins("*").allowedMethods("GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "TRACE");
	}
}