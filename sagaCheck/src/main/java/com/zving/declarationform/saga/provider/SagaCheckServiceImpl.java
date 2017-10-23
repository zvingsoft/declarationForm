package com.zving.declarationform.saga.provider;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.stream.Collectors;

import javax.ws.rs.core.MediaType;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.util.ResourceUtils;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.zving.declarationform.model.DeclarationForm;
import com.zving.declarationform.saga.schema.SagaCheckService;

import io.servicecomb.provider.rest.common.RestSchema;
import io.servicecomb.provider.springmvc.reference.RestTemplateBuilder;

@RestSchema(schemaId = "sagaCheck")
@RequestMapping(path = "/", produces = MediaType.APPLICATION_JSON)
@Controller
public class SagaCheckServiceImpl implements SagaCheckService {

	@Override
	@RequestMapping(path = "check", method = RequestMethod.POST)
	@ResponseBody
	public String check(@RequestBody DeclarationForm form) {
		String json = "";
		try {
			File js = ResourceUtils.getFile("classpath:request.json");
			json = Files.lines(Paths.get(js.getAbsolutePath()), StandardCharsets.UTF_8).collect(Collectors.joining("\n"));
		} catch (FileNotFoundException e) {
			e.printStackTrace();
			return "检查失败,配置文件读取失败";
		} catch (IOException e) {
			e.printStackTrace();
			return "检查失败,配置文件读取失败";
		}
		ObjectMapper om = new ObjectMapper();
		String formJson;
		try {
			formJson = om.writeValueAsString(form);
		} catch (JsonProcessingException e) {
			e.printStackTrace();
			return "检查失败，form转换错误";
		}
		json = json.replaceAll("\"\\$\\{form\\}\"", formJson);
		ResponseEntity<String> entry = RestTemplateBuilder.create().postForEntity("cse://saga/requests", json, String.class);
		return entry.getBody();
	}

	public static void main(String[] args) {
		DeclarationForm form = new DeclarationForm();
		form.setId("323");
		form.setApprovalNumber("aaa");
		String json = "";
		try {
			File js = ResourceUtils.getFile("classpath:request.json");
			json = Files.lines(Paths.get(js.getAbsolutePath()), StandardCharsets.UTF_8).collect(Collectors.joining("\n"));
		} catch (FileNotFoundException e) {
			e.printStackTrace();
			return;
		} catch (IOException e) {
			e.printStackTrace();
			return;
		}
		ObjectMapper om = new ObjectMapper();
		String formJson;
		try {
			formJson = om.writeValueAsString(form);
		} catch (JsonProcessingException e) {
			e.printStackTrace();
			return;
		}
		System.out.println("before:" + json);
		json = json.replaceAll("\"\\$\\{form\\}\"", formJson);
		System.out.println("end:" + json);
	}

}
