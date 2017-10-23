package com.zving.declarationform.taxCuttingUI.provider;


import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.stream.Collectors;

import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.core.io.support.ResourcePatternResolver;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zving.declarationform.taxCuttingUI.schema.ResourceService;

import io.servicecomb.provider.rest.common.RestSchema;

@RestSchema(schemaId = "resource")
@RequestMapping(path = "/")
@Controller
public class ResponseServiceImpl implements ResourceService {

	@Override
	@RequestMapping(path = "{path:.+}", method = RequestMethod.GET)
	@ResponseBody
	public String get(@PathVariable String path) {
		ResourcePatternResolver resourcePatternResolver = new PathMatchingResourcePatternResolver();
		String content = "";
		try {
			Resource[] rs = resourcePatternResolver.getResources("classpath:static/" + path);
			for (Resource res : rs) {
				content = Files.lines(Paths.get(res.getURI()), StandardCharsets.UTF_8).collect(Collectors.joining("\n"));
				return content;
			}
		} catch (IOException e) {
			return null;
		}
		return content;
	}

	public static void main(String[] args) {
		ResourcePatternResolver resourcePatternResolver = new PathMatchingResourcePatternResolver();

		String content = "";
		try {
			Resource[] rs = resourcePatternResolver.getResources("classpath:static/1.txt");
			for (Resource res : rs) {
				content = Files.lines(Paths.get(res.getURI()), StandardCharsets.UTF_8).collect(Collectors.joining(""));
				System.out.println(content);
			}
		} catch (IOException e) {
		}
	}

}
