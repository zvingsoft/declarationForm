package com.zving.declarationform.form.provider;

import javax.ws.rs.core.MediaType;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zving.declarationform.dto.ResponseDTO;
import com.zving.declarationform.form.schema.HandlerChainService;

import io.servicecomb.provider.rest.common.RestSchema;

/**
 * @author 王育春
 * @mail wyuch@zving.com
 * @date 2017年10月18日
 */
@RestSchema(schemaId = "handlerChain")
@RequestMapping(path = "/handlerChain", produces = MediaType.APPLICATION_JSON)
@Controller
public class HandlerChainServiceImpl implements HandlerChainService {

	@Override
	@RequestMapping(path = "trySuccessConfirmSuccess", method = RequestMethod.GET)
	@ResponseBody
	public ResponseDTO trySuccessConfirmSuccess() {
		return null;
	}

	@Override
	@RequestMapping(path = "trySuccessConfirmFail", method = RequestMethod.GET)
	@ResponseBody
	public ResponseDTO trySuccessConfirmFail() {
		return null;
	}

	@Override
	@RequestMapping(path = "tryFailCancelSuccess", method = RequestMethod.GET)
	@ResponseBody
	public ResponseDTO tryFailCancelSuccess() {
		return null;
	}

	@Override
	@RequestMapping(path = "tryFailCancelFail", method = RequestMethod.GET)
	@ResponseBody
	public ResponseDTO tryFailCancelFail() {
		return null;
	}

	@Override
	@RequestMapping(path = "loadblanceRoundRobin", method = RequestMethod.GET)
	@ResponseBody
	public ResponseDTO loadblanceRoundRobin() {
		return null;
	}

	@Override
	@RequestMapping(path = "loadblanceRandom", method = RequestMethod.GET)
	@ResponseBody
	public ResponseDTO loadblanceRandom() {
		return null;
	}

	@Override
	@RequestMapping(path = "loadblanceWeighted", method = RequestMethod.GET)
	@ResponseBody
	public ResponseDTO loadblanceWeighted() {
		return null;
	}

	@Override
	@RequestMapping(path = "loadblanceSessionStick", method = RequestMethod.GET)
	@ResponseBody
	public ResponseDTO loadblanceSessionStick() {
		return null;
	}

	@Override
	@RequestMapping(path = "loadblanceIsolation", method = RequestMethod.GET)
	@ResponseBody
	public ResponseDTO loadblanceIsolation() {
		return null;
	}

	@Override
	@RequestMapping(path = "circuitBreakerConcurrent", method = RequestMethod.GET)
	@ResponseBody
	public ResponseDTO circuitBreakerConcurrent() {
		return null;
	}

	@Override
	@RequestMapping(path = "circuitBreakerFail", method = RequestMethod.GET)
	@ResponseBody
	public ResponseDTO circuitBreakerFail() {
		return null;
	}

	@Override
	@RequestMapping(path = "qps1", method = RequestMethod.GET)
	@ResponseBody
	public ResponseDTO qps1() {
		return null;
	}

	@Override
	@RequestMapping(path = "qps10", method = RequestMethod.GET)
	@ResponseBody
	public ResponseDTO qps10() {
		return null;
	}

}
