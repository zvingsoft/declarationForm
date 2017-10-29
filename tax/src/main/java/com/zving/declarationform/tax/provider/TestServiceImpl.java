package com.zving.declarationform.tax.provider;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.Random;

import javax.ws.rs.core.MediaType;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zving.declarationform.dto.ResponseDTO;
import com.zving.declarationform.tax.schema.TestService;

import io.servicecomb.provider.rest.common.RestSchema;

/**
 * @author lwb
 * @mail lwb@zving.com
 * @date 2017年10月23日 下午2:33:09
 * @description:企业管理
 */
@RestSchema(schemaId = "test")
@RequestMapping(path = "/test", produces = MediaType.APPLICATION_JSON)
@Controller
public class TestServiceImpl implements TestService {

	static long id = Math.abs(new Random().nextInt(100000000));

	@Override
	@RequestMapping(path = "failBreak", method = RequestMethod.GET)
	@ResponseBody
	public ResponseDTO failBreak() {
		try {
			if (new Random().nextInt() % 2 == 0) {
				throw new RuntimeException("CircuitBreaker随机失败");
			}
			return new ResponseDTO(String.format("CircuitBreaker errorPercentBreak: HostName=%s Time=%s",
					InetAddress.getLocalHost().getHostName(), System.currentTimeMillis()));
		} catch (UnknownHostException e) {
			return new ResponseDTO(String.format("CircuitBreaker errorPercentBreak: ID=%s Time=%s", id, System.currentTimeMillis()));
		}
	}

	@Override
	@RequestMapping(path = "requestBreak", method = RequestMethod.GET)
	@ResponseBody
	public ResponseDTO requestBreak() {
		try {
			return new ResponseDTO(String.format("CircuitBreaker requestThresholdBreak: HostName=%s Time=%s",
					InetAddress.getLocalHost().getHostName(), System.currentTimeMillis()));
		} catch (UnknownHostException e) {
			return new ResponseDTO(String.format("CircuitBreaker requestThresholdBreak: ID=%s Time=%s", id, System.currentTimeMillis()));
		}
	}
}
