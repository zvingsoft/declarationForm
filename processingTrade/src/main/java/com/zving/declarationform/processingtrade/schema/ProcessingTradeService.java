package com.zving.declarationform.processingtrade.schema;

import java.util.List;

import com.zving.declarationform.model.ProcessingTrade;

/**
 * @author zhaochangjin
 * @mail zhaochangjin@zving.com
 * @date 2017年10月20日
 */
public interface ProcessingTradeService {

	String add(ProcessingTrade license);

	String update(ProcessingTrade processingTrade);

	String delete(String number);

	ProcessingTrade get(String number);

	List<ProcessingTrade> list(String pageIndex, String pageSize);
}
