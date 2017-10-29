package com.zving.declarationform.mainui.controller;

import javax.ws.rs.core.MediaType;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zving.declarationform.dto.ResponseDTO;

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
	public ResponseDTO trySuccessConfirmSuccess() {
		return null;
	}

	/**
	 * TCC事务try成功confirm失败
	 */
	@RequestMapping(path = "trySuccessConfirmFail", method = RequestMethod.GET)
	@ResponseBody
	public ResponseDTO trySuccessConfirmFail() {
		return null;
	}

	/**
	 * TCC事务try失败cancel成功
	 */
	@RequestMapping(path = "tryFailCancelSuccess", method = RequestMethod.GET)
	@ResponseBody
	public ResponseDTO tryFailCancelSuccess() {
		return null;
	}

	/**
	 * TCC事务try失败cancel失败
	 */
	@RequestMapping(path = "tryFailCancelFail", method = RequestMethod.GET)
	@ResponseBody
	public ResponseDTO tryFailCancelFail() {
		return null;
	}

	/**
	 * 负载均衡轮询
	 */
	@RequestMapping(path = "loadblanceRoundRobin", method = RequestMethod.GET)
	@ResponseBody
	public ResponseDTO loadblanceRoundRobin() {
		return null;
	}

	/**
	 * 负载均衡随机
	 */
	@RequestMapping(path = "loadblanceRandom", method = RequestMethod.GET)
	@ResponseBody
	public ResponseDTO loadblanceRandom() {
		return null;
	}

	/**
	 * 负载均衡基于响应时间
	 */
	@RequestMapping(path = "loadblanceWeighted", method = RequestMethod.GET)
	@ResponseBody
	public ResponseDTO loadblanceWeighted() {
		return null;
	}

	/**
	 * 负载均衡基于会话保持
	 */
	@RequestMapping(path = "loadblanceSessionStick", method = RequestMethod.GET)
	@ResponseBody
	public ResponseDTO loadblanceSessionStick() {
		return null;
	}

	/**
	 * 负载均衡节点故障隔离
	 */
	@RequestMapping(path = "loadblanceIsolation", method = RequestMethod.GET)
	@ResponseBody
	public ResponseDTO loadblanceIsolation() {
		return null;
	}

	/**
	 * 并发数断路器
	 */
	@RequestMapping(path = "circuitBreakerConcurrent", method = RequestMethod.GET)
	@ResponseBody
	public ResponseDTO circuitBreakerConcurrent() {
		return null;
	}

	/**
	 * 失败次数断路器
	 */
	@RequestMapping(path = "circuitBreakerFail", method = RequestMethod.GET)
	@ResponseBody
	public ResponseDTO circuitBreakerFail() {
		return null;
	}

	/**
	 * 流控示例执行1次
	 */
	@RequestMapping(path = "qps1", method = RequestMethod.GET)
	@ResponseBody
	public ResponseDTO qps1() {
		return null;
	}

	/**
	 * 流控示例执行10次
	 */
	@RequestMapping(path = "qps10", method = RequestMethod.GET)
	@ResponseBody
	public ResponseDTO qps10() {
		return null;
	}

}
