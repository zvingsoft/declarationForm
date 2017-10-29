package com.zving.declarationform;

import org.springframework.amqp.core.Queue;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

@Component
public class AMQPConfig {

	@Value("${rabbitmq.queue}")
	private String queueName;

	@Bean
	public Queue queue() {
		return new Queue(queueName);
	}
}
