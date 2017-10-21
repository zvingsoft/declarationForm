package com.zving.declarationform.processingtrade.provider;

import java.util.List;

import javax.ws.rs.core.MediaType;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.zving.declarationform.model.ProcessingTrade;
import com.zving.declarationform.processingtrade.schema.ProcessingTradeService;
import com.zving.declarationform.storage.StorageUtil;

import io.servicecomb.provider.rest.common.RestSchema;

/**
 * @author zhaochangjin
 * @mail zhaochangjin@zving.com
 * @date 2017年10月20日
 */
@RestSchema(schemaId = "processingTrade")
@RequestMapping(path = "/", produces = MediaType.APPLICATION_JSON)
public class ProcessingTradeServiceImpl implements ProcessingTradeService {

	@Override
	@RequestMapping(path = "processingTrade", method = RequestMethod.POST)
	public String add(@RequestBody ProcessingTrade processingTrade) {
		StorageUtil.getInstance().add(ProcessingTrade.class, processingTrade);
		return "添加成功";
	}

	@Override
	@RequestMapping(path = "processingTrade", method = RequestMethod.PUT)
	public String update(@RequestBody ProcessingTrade processingTrade) {
		StorageUtil.getInstance().update(ProcessingTrade.class, processingTrade);
		return "更新成功";
	}

	@Override
	@RequestMapping(path = "processingTrade/{number}", method = RequestMethod.DELETE)
	public String delete(@PathVariable("number") String number) {
		ProcessingTrade processingTrade = new ProcessingTrade();
		processingTrade.setNumber(number);
		StorageUtil.getInstance().delete(ProcessingTrade.class, processingTrade);
		return "删除成功";
	}

	@Override
	@RequestMapping(path = "processingTrade/{number}", method = RequestMethod.GET)
	public ProcessingTrade get(@PathVariable("number") String number) {
		ProcessingTrade processingTrade = new ProcessingTrade();
		processingTrade.setNumber(number);
		return StorageUtil.getInstance().get(ProcessingTrade.class, processingTrade);
	}

	@Override
	@RequestMapping(path = "processingTrade", method = RequestMethod.GET)
	public List<ProcessingTrade> list() {
		return StorageUtil.getInstance().find(ProcessingTrade.class, new ProcessingTrade());
	}

}
