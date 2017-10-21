package com.zving.declarationform.processingtrade.provider;

import java.util.List;

import javax.ws.rs.core.MediaType;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.zving.declarationform.model.ProcessingTrade;
import com.zving.declarationform.processingtrade.schema.ProcessingTradeService;
import com.zving.declarationform.storage.IStorage;
import com.zving.declarationform.storage.StorageUtil;

import io.servicecomb.provider.rest.common.RestSchema;

/**
 * @author zhaochangjin
 * @mail zhaochangjin@zving.com
 * @date 2017年10月20日
 */
@Controller
@RestSchema(schemaId = "processingTrade")
@RequestMapping(path = "api/", produces = MediaType.APPLICATION_JSON)
public class ProcessingTradeServiceImpl implements ProcessingTradeService {

	@Override
	@RequestMapping(path = "processingtrade", method = RequestMethod.POST)
	public String add(@RequestBody ProcessingTrade processingTrade) {
		StorageUtil.getInstance().add(ProcessingTrade.class, processingTrade);
		return "添加成功";
	}

	@Override
	@RequestMapping(path = "processingtrade", method = RequestMethod.PUT)
	public String update(@RequestBody ProcessingTrade processingTrade) {
		final IStorage storage = StorageUtil.getInstance();
		List<ProcessingTrade> processingTrades = storage.find(ProcessingTrade.class, null);
		for (ProcessingTrade item : processingTrades) {
			if (processingTrade.getNumber().equals(item.getNumber())) {
				StorageUtil.getInstance().update(ProcessingTrade.class, item, processingTrade);
				return "更新成功";
			}
		}
		return "更新失败";
	}

	@Override
	@RequestMapping(path = "processingtrade/{number}", method = RequestMethod.DELETE)
	public String delete(@PathVariable String number) {
		System.out.println(number);
		for (String s : number.split(",")) {
			final IStorage storage = StorageUtil.getInstance();
			List<ProcessingTrade> processingTrades = storage.find(ProcessingTrade.class, null);
			for (ProcessingTrade item : processingTrades) {
				if (item.getNumber().equals(s)) {
					storage.delete(ProcessingTrade.class, item);
				}
			}
		}
		return "删除成功";
	}

	@Override
	@RequestMapping(path = "processingtrade/{number}", method = RequestMethod.GET)
	public ProcessingTrade get(@PathVariable String number) {
		ProcessingTrade processingTrade = new ProcessingTrade();
		processingTrade.setNumber(number);
		return StorageUtil.getInstance().get(ProcessingTrade.class, processingTrade);
	}

	@Override
	@RequestMapping(path = "processingtrade/{pageIndex}/{pageSize}", method = RequestMethod.GET)
	public List<ProcessingTrade> list(@PathVariable String pageIndex, @PathVariable String pageSize) {
		return StorageUtil.getInstance().find(ProcessingTrade.class, new ProcessingTrade());
	}

}
