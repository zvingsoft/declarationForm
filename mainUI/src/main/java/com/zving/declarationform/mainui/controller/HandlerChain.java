package com.zving.declarationform.mainui.controller;

import javax.ws.rs.core.MediaType;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zving.declarationform.dto.ResponseDTO;

import io.servicecomb.provider.springmvc.reference.RestTemplateBuilder;

/**
 * @author 王育春
 * @mail wyuch@zving.com
 * @date 2017年10月18日
 */
@RequestMapping(path = "/handlerChain", produces = MediaType.APPLICATION_JSON)
@Controller
public class HandlerChain {

	/**
	 * TCC事务try成功confirm成功
	 */
	@RequestMapping(path = "trySuccessConfirmSuccess", method = RequestMethod.GET)
	@ResponseBody
	public String trySuccessConfirmSuccess() {
		return "trySuccessConfirmSuccess";
	}

	/**
	 * TCC事务try成功confirm失败
	 */
	@RequestMapping(path = "trySuccessConfirmFail", method = RequestMethod.GET)
	@ResponseBody
	public String trySuccessConfirmFail() {
		return "trySuccessConfirmFail";
	}

	/**
	 * TCC事务try失败cancel成功
	 */
	@RequestMapping(path = "tryFailCancelSuccess", method = RequestMethod.GET)
	@ResponseBody
	public String tryFailCancelSuccess() {
		return "tryFailCancelSuccess";
	}

	/**
	 * TCC事务try失败cancel失败
	 */
	@RequestMapping(path = "tryFailCancelFail", method = RequestMethod.GET)
	@ResponseBody
	public String tryFailCancelFail() {
		return "tryFailCancelFail";
	}

	/**
	 * 负载均衡轮询
	 */
	@RequestMapping(path = "loadblanceRoundRobin", method = RequestMethod.GET)
	@ResponseBody
	public String loadblanceRoundRobin() {
		ResponseDTO dto = RestTemplateBuilder.create().getForObject("cse://baseData/test/loadblance", ResponseDTO.class);
		return dto.getMessage();
	}

	/**
	 * 负载均衡随机
	 */
	@RequestMapping(path = "loadblanceRandom", method = RequestMethod.GET)
	@ResponseBody
	public String loadblanceRandom() {
		ResponseDTO dto = RestTemplateBuilder.create().getForObject("cse://manifest/test/loadblance", ResponseDTO.class);
		return dto.getMessage();
	}

	/**
	 * 负载均衡基于响应时间
	 */
	@RequestMapping(path = "loadblanceWeight", method = RequestMethod.GET)
	@ResponseBody
	public String loadblanceWeight() {
		ResponseDTO dto = RestTemplateBuilder.create().getForObject("cse://form/test/loadblance", ResponseDTO.class);
		return dto.getMessage();
	}

	/**
	 * 负载均衡基于会话保持
	 */
	@RequestMapping(path = "loadblanceSessionStick", method = RequestMethod.GET)
	@ResponseBody
	public String loadblanceSessionStick() {
		ResponseDTO dto = RestTemplateBuilder.create().getForObject("cse://license/test/loadblance", ResponseDTO.class);
		return dto.getMessage();
	}

	/**
	 * 负载均衡节点故障隔离
	 */
	@RequestMapping(path = "loadblanceIsolation", method = RequestMethod.GET)
	@ResponseBody
	public String loadblanceIsolation() {
		return "loadblanceIsolation";
	}

	/**
	 * 并发数断路器
	 */
	@RequestMapping(path = "circuitBreakerConcurrent", method = RequestMethod.GET)
	@ResponseBody
	public String circuitBreakerConcurrent() {
		try {
			ResponseDTO dto = RestTemplateBuilder.create().getForObject("cse://tax/test/requestBreak", ResponseDTO.class);
			return dto.getMessage();
		} catch (Exception e) {
			return e.getCause().getMessage();
		}
	}

	/**
	 * 失败次数断路器
	 */
	@RequestMapping(path = "circuitBreakerFail", method = RequestMethod.GET)
	@ResponseBody
	public String circuitBreakerFail() {
		try {
			ResponseDTO dto = RestTemplateBuilder.create().getForObject("cse://tax/test/failBreak", ResponseDTO.class);
			return dto.getMessage();
		} catch (Exception e) {
			return e.getCause().getMessage();
		}
	}

	/**
	 * 流控示例执行1次
	 */
	@RequestMapping(path = "qps1", method = RequestMethod.GET)
	@ResponseBody
	public String qps1() {
		ResponseDTO dto = RestTemplateBuilder.create().getForObject("cse://cottonQuota/test/qps", ResponseDTO.class);
		return dto.getMessage();
	}

	/**
	 * 流控示例执行10次
	 */
	@RequestMapping(path = "qps10", method = RequestMethod.GET)
	@ResponseBody
	public String qps10() {
		return "qps10";
	}

}
