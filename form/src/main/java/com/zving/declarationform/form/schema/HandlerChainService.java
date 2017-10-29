package com.zving.declarationform.form.schema;

import com.zving.declarationform.dto.ResponseDTO;

/**
 * 处理链示例服务
 * 
 * @author 王育春
 * @mail wyuch@zving.com
 * @date 2017年10月28日
 */
public interface HandlerChainService {
	/**
	 * TCC事务try成功confirm成功
	 */
	ResponseDTO trySuccessConfirmSuccess();

	/**
	 * TCC事务try成功confirm失败
	 */
	ResponseDTO trySuccessConfirmFail();

	/**
	 * TCC事务try失败cancel成功
	 */
	ResponseDTO tryFailCancelSuccess();

	/**
	 * TCC事务try失败cancel失败
	 */
	ResponseDTO tryFailCancelFail();

	/**
	 * 负载均衡轮询
	 */
	ResponseDTO loadblanceRoundRobin();

	/**
	 * 负载均衡随机
	 */
	ResponseDTO loadblanceRandom();

	/**
	 * 负载均衡基于响应时间
	 */
	ResponseDTO loadblanceWeighted();

	/**
	 * 负载均衡基于会话保持
	 */
	ResponseDTO loadblanceSessionStick();

	/**
	 * 负载均衡节点故障隔离
	 */
	ResponseDTO loadblanceIsolation();

	/**
	 * 并发数断路器
	 */
	ResponseDTO circuitBreakerConcurrent();

	/**
	 * 失败次数断路器
	 */
	ResponseDTO circuitBreakerFail();

	/**
	 * 流控示例执行1次
	 */
	ResponseDTO qps1();

	/**
	 * 流控示例执行10次
	 */
	ResponseDTO qps10();
}
