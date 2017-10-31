package com.zving.declarationform.form.provider;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.Random;

import javax.ws.rs.core.MediaType;

import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zving.declarationform.dto.ResponseDTO;
import com.zving.declarationform.form.schema.TestService;

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
	@Autowired(required = true)
	private AmqpTemplate rabbitTemplate;
	@Value("${rabbitmq.queue}")
	private String queueName;

	static long id = Math.abs(new Random().nextInt(100000000));
	static long sleepTime = Math.abs(new Random().nextInt(2000));

	@Override
	@RequestMapping(path = "loadblance", method = RequestMethod.GET)
	@ResponseBody
	public ResponseDTO loadblanceTest() {
		long time = System.currentTimeMillis();
		try {
			try {
				Thread.sleep(sleepTime + new Random().nextInt((int) sleepTime / 10));
				rabbitTemplate.convertAndSend(queueName, "abc");
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
			return new ResponseDTO(String.format("Microservice form: HostName=%s Cost(ms)=%s", InetAddress.getLocalHost().getHostName(),
					System.currentTimeMillis() - time));
		} catch (UnknownHostException e) {
			return new ResponseDTO(String.format("Microservice form: ID=%s Cost(ms)=%s", id, System.currentTimeMillis() - time));
		}
	}

}
