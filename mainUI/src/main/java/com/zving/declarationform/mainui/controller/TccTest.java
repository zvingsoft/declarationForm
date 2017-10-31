package com.zving.declarationform.mainui.controller;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import com.huawei.paas.cse.tcc.annotation.TccTransaction;
import com.zving.declarationform.dto.ResponseDTO;

import io.servicecomb.provider.springmvc.reference.RestTemplateBuilder;

/**
 * TCC事务测试类
 * 
 * @author 王育春
 * @mail wyuch@zving.com
 * @date 2017年10月29日
 */
public class TccTest {
	private HashMap<String, Boolean> data = new HashMap<>();

	public TccTest(boolean trySuccess, boolean confirmSuccess, boolean cancelSuccess) {
		data.put("try", trySuccess);
		data.put("confirm", trySuccess);
		data.put("cancel", trySuccess);
	}

	@TccTransaction(cancelMethod = "cancel", confirmMethod = "confirm")
	public String doTry() {
		// try阶段
		List<String> services = Arrays.asList("license", "cottonQuota", "processingTrade");
		StringBuilder sb = new StringBuilder();
		Optional<String> fail = services.stream().filter(item -> {
			ResponseDTO r = RestTemplateBuilder.create().postForObject("cse://" + item + "/test/tccTry", data, ResponseDTO.class);
			sb.append(r.getMessage() + "\n");
			return r.getMessage().contains("失败");
		}).findAny();
		if (fail.isPresent()) {
			sb.append(cancel());
			throw new RuntimeException("TCC.try失败:\n" + sb);
		} else {
			sb.append(confirm());
			return "TCC事务成功执行:\n" + sb;
		}
	}

	public String confirm() {
		// confirm阶段
		List<String> services = Arrays.asList("license", "cottonQuota", "processingTrade");
		StringBuilder sb = new StringBuilder();
		Optional<String> fail = services.stream().filter(item -> {
			// 验证
			ResponseDTO r = RestTemplateBuilder.create().postForObject("cse://" + item + "/test/tccConfirm", data, ResponseDTO.class);
			sb.append(r.getMessage() + "\n");
			return r.getMessage().contains("失败");
		}).findAny();
		if (fail.isPresent()) {
			throw new RuntimeException("TCC.confirm失败:\n" + sb);
		} else {
			return "TCC事务confirm成功:\n" + sb;
		}
	}

	public String cancel() {
		// cancel阶段
		List<String> services = Arrays.asList("license", "cottonQuota", "processingTrade");
		StringBuilder sb = new StringBuilder();
		Optional<String> fail = services.stream().filter(item -> {
			// 验证
			ResponseDTO r = RestTemplateBuilder.create().postForObject("cse://" + item + "/test/tccCancel", data, ResponseDTO.class);
			if (r.getMessage().contains("失败")) {
				sb.append(r.getMessage() + "\n");
				return true;
			}
			return false;
		}).findAny();
		if (fail.isPresent()) {
			throw new RuntimeException("TCC.cancel失败:\n" + sb);
		} else {
			return "TCC事务cancel成功:\n" + sb;
		}
	}
}
