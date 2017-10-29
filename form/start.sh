#!/bin/sh
java -jar -Dcse.service.registry.address=$sc -Dcse.config.client.serverUri=$cc -Dspring.rabbitmq.host=$rabbitmq $1