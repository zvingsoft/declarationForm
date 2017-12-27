package com.zving.declarationform.processingtrade.provider;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.List;

import javax.ws.rs.core.MediaType;

import org.apache.commons.lang3.math.NumberUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zving.declarationform.dto.ResponseDTO;
import com.zving.declarationform.model.DeclarationForm;
import com.zving.declarationform.model.PackingItem;
import com.zving.declarationform.model.TCCLock;
import com.zving.declarationform.processingtrade.model.ProcessingTrade;
import com.zving.declarationform.processingtrade.schema.ProcessingTradeService;
import com.zving.declarationform.storage.IStorage;
import com.zving.declarationform.storage.StorageUtil;

import io.servicecomb.provider.rest.common.RestSchema;

/**
 * @author zhaochangjin
 * @mail zhaochangjin@zving.com
 * @date 2017年10月20日
 */

@RestSchema(schemaId = "processingTrade")
@Path("/") @Produces(MediaType.APPLICATION_JSON)
public class ProcessingTradeServiceImpl implements ProcessingTradeService {

	IStorage storage = StorageUtil.getInstance();

	@Override
	@Path("check") @POST
	
	public String check( DeclarationForm form) {
		try {
			if ("processingTrade".equals(form.getTradingType())) {
				for (PackingItem item : form.getPackingList()) {
					ProcessingTrade pt = new ProcessingTrade();
					pt.setSku(item.getSKU());
					pt = StorageUtil.getInstance().get(ProcessingTrade.class, pt);
					if (pt == null) {
						return InetAddress.getLocalHost().getHostName() + ":加贸检查失败，没有找到加工贸易配额";
					}
					if (pt.getAmount() - pt.getUsed() < item.getAmount()) {
						return InetAddress.getLocalHost().getHostName() + ":加贸检查失败，加工贸易配额不足";
					}

				}
			}
			return InetAddress.getLocalHost().getHostName() + ":加贸检查通过";
		} catch (UnknownHostException e) {
			throw new RuntimeException(e);
		}
	}

	@Override
	@Path("processingtrade") @POST
	
	public String add( ProcessingTrade processingTrade) {
		storage.add(ProcessingTrade.class, processingTrade);
		return "1";
	}

	@Override
	@Path("processingtrade") @PUT
	
	public String update( ProcessingTrade processingTrade) {
		ProcessingTrade old = get(processingTrade.getId());
		storage.update(ProcessingTrade.class, old, processingTrade);
		return "1";
	}

	@Override
	@Path("processingtrade/{ids}") @DELETE
	
	public String delete(@PathParam String ids) {
		String[] idArray = ids.split(",");
		for (String id : idArray) {
			if (NumberUtils.isNumber(id)) {
				ProcessingTrade processingTrade = get(Long.valueOf(id));
				storage.delete(ProcessingTrade.class, processingTrade);
			}
		}
		return "1";
	}

	@Override
	@Path("processingtrade/{id}") @GET
	
	public ProcessingTrade get(@PathParam long id) {
		List<ProcessingTrade> list = storage.find(ProcessingTrade.class, null);
		for (ProcessingTrade processingTrade : list) {
			if (processingTrade.getId() == id) {
				return processingTrade;
			}
		}
		return null;
	}

	@Override
	@Path("processingtrade") @GET
	
	public List<ProcessingTrade> list() {
		return storage.find(ProcessingTrade.class, null);
	}

	@SuppressWarnings("unused")
	private String myConfirm(DeclarationForm form) {
		List<ProcessingTrade> processingTrades = list();
		for (ProcessingTrade processingTrade : processingTrades) {
			if (processingTrade.getProcessCompanyName().equals(form.getDeclarationUnit())) {
				for (PackingItem item : form.getPackingList()) {
					if (processingTrade.getSku().equals(item.getSKU())) {
						if (processingTrade.getUsed() < processingTrade.getAmount()) {
							processingTrade.setUsed(processingTrade.getUsed() + form.getGoodsNumber());
							update(processingTrade);
							return "compensate成功：processingTrade";
						}
					}
				}
			}
		}
		return "compensate失败：processingTrade";
	}

	@Override
	@Path("try") @POST
	
	public ResponseDTO tccTry( DeclarationForm form) {
		if (!"processingTrade".equals(form.getTradingType())) {
			return new ResponseDTO("");
		}
		for (PackingItem item : form.getPackingList()) {
			ProcessingTrade old = new ProcessingTrade();
			old.setSku(item.getSKU());
			ProcessingTrade pt = StorageUtil.getInstance().get(ProcessingTrade.class, old);
			if (pt == null) {
				return new ResponseDTO("加贸锁定失败，没有加贸配额");
			}
			if (item.getAmount() > pt.getAmount()) {
				return new ResponseDTO("加贸锁定失败，加贸配额不足");
			}
			pt.setUsed(pt.getUsed() + item.getAmount());
			StorageUtil.getInstance().update(ProcessingTrade.class, old, pt);

			// 记录资源锁定
			TCCLock lock = new TCCLock();
			lock.setType("ProcessingTrade");
			lock.setRelaId(item.getSKU());
			lock.setLockedValue(item.getAmount() + "");
			lock.setFormId(form.getId());
			StorageUtil.getInstance().add(TCCLock.class, lock);
		}
		return new ResponseDTO("");
	}

	@Override
	@Path("confirm") @POST
	
	public ResponseDTO tccConfirm( DeclarationForm form) {
		for (PackingItem item : form.getPackingList()) {
			// 删除资源锁定
			TCCLock lock = new TCCLock();
			lock.setType("ProcessingTrade");
			lock.setRelaId(item.getSKU());
			lock.setFormId(form.getId());
			lock = StorageUtil.getInstance().get(TCCLock.class, lock);
			if (lock == null) {
				continue;
			}
			StorageUtil.getInstance().delete(TCCLock.class, lock);
		}
		return new ResponseDTO("");
	}

	@Override
	@Path("cancel") @POST
	
	public ResponseDTO tccCancel( DeclarationForm form) {
		for (PackingItem item : form.getPackingList()) {
			ProcessingTrade old = new ProcessingTrade();
			old.setSku(item.getSKU());
			ProcessingTrade pt = StorageUtil.getInstance().get(ProcessingTrade.class, old);
			if (pt == null) {
				continue;
			}

			// 记录资源锁定
			TCCLock lock = new TCCLock();
			lock.setType("ProcessingTrade");
			lock.setRelaId(item.getSKU());
			lock.setFormId(form.getId());
			lock = StorageUtil.getInstance().get(TCCLock.class, lock);
			if (lock == null) {
				continue;
			}

			pt.setUsed(pt.getUsed() - Double.parseDouble(lock.getLockedValue()));
			StorageUtil.getInstance().update(ProcessingTrade.class, old, pt);
			StorageUtil.getInstance().delete(TCCLock.class, lock);
		}
		return new ResponseDTO("");
	}

}
