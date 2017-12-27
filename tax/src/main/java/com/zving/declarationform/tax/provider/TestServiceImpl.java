package com.zving.declarationform.tax.provider;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.Random;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

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
@Path("/test")
@Produces(MediaType.APPLICATION_JSON)

public class TestServiceImpl implements TestService {

	static long id = Math.abs(new Random().nextInt(100000000));

	@Override
	@Path("failBreak")
	@GET

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
	@Path("requestBreak")
	@GET

	public ResponseDTO requestBreak() {
		try {
			return new ResponseDTO(String.format("CircuitBreaker requestThresholdBreak: HostName=%s Time=%s",
					InetAddress.getLocalHost().getHostName(), System.currentTimeMillis()));
		} catch (UnknownHostException e) {
			return new ResponseDTO(String.format("CircuitBreaker requestThresholdBreak: ID=%s Time=%s", id, System.currentTimeMillis()));
		}
	}
}
