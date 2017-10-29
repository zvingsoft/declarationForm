package com.zving.declarationform.form.provider;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.ws.rs.core.MediaType;

import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.huawei.paas.cse.tcc.annotation.TccTransaction;
import com.zving.declarationform.dto.ResponseDTO;
import com.zving.declarationform.form.schema.FormService;
import com.zving.declarationform.model.DeclarationForm;
import com.zving.declarationform.storage.IStorage;
import com.zving.declarationform.storage.StorageUtil;

import io.servicecomb.provider.rest.common.RestSchema;
import io.servicecomb.provider.springmvc.reference.RestTemplateBuilder;
import net.sf.json.JSONObject;

/**
 * @author 王育春
 * @mail wyuch@zving.com
 * @date 2017年10月18日
 */
@RestSchema(schemaId = "form")
@RequestMapping(path = "/", produces = MediaType.APPLICATION_JSON)
@Controller
public class FormServiceImpl implements FormService {
	@Autowired
	private AmqpTemplate rabbitTemplate;
	@Value("${rabbitmq.queue}")
	private String queueName;

	@Override
	@RequestMapping(path = "form", method = RequestMethod.POST)
	@ResponseBody
	public String add(@RequestBody DeclarationForm form) {
		form.setTaxStatus("N");
		form.setAuditStatusName("初稿");
		form.setAuditStatus("C");
		form.setTaxStatus("N");
		form.setTaxStatusName("未缴税");
		StorageUtil.getInstance().add(DeclarationForm.class, form);
		return "添加成功";
	}

	@Override
	@RequestMapping(path = "form", method = RequestMethod.PUT)
	@ResponseBody
	public String update(@RequestBody DeclarationForm form) {
		IStorage storage = StorageUtil.getInstance();
		List<DeclarationForm> list = storage.find(DeclarationForm.class, null);
		for (int i = 0; i < list.size(); i++) {
			if (list.get(i).getId() == form.getId()) {
				storage.delete(DeclarationForm.class, list.get(i));
			}
		}

		storage.add(DeclarationForm.class, form);
		return "更新成功";
	}

	@Override
	@RequestMapping(path = "form/{ids}", method = RequestMethod.DELETE)
	@ResponseBody
	public String delete(@PathVariable("ids") String ids) {
		String[] strId = ids.split(",");
		IStorage iStorage = StorageUtil.getInstance();
		List<DeclarationForm> list = iStorage.find(DeclarationForm.class, null);
		for (int i = 0; i < list.size(); i++) {
			for (int j = 0; j < strId.length; j++) {
				if (list.get(i).getId() == Long.parseLong(strId[j])) {
					iStorage.delete(DeclarationForm.class, list.get(i));
				}
			}
		}
		return "删除成功";
	}

	@Override
	@RequestMapping(path = "form/{id}", method = RequestMethod.GET)
	@ResponseBody
	public DeclarationForm get(@PathVariable("id") long id) {
		DeclarationForm declarationForm = new DeclarationForm();
		declarationForm.setId(id);
		return StorageUtil.getInstance().get(DeclarationForm.class, declarationForm);
	}

	@Override
	@RequestMapping(path = "form", method = RequestMethod.GET)
	@ResponseBody
	public List<DeclarationForm> list(@RequestParam String searchItem) {
		System.out.println(searchItem);
		List<DeclarationForm> list = StorageUtil.getInstance().find(DeclarationForm.class, null);
		return list;
	}

	@Override
	@RequestMapping(path = "audit", method = RequestMethod.GET)
	@ResponseBody
	public List<DeclarationForm> auditList(@RequestParam String searchItem) {
		System.out.println(searchItem);
		List<DeclarationForm> list = StorageUtil.getInstance().find(DeclarationForm.class, null);
		List<DeclarationForm> list1 = new ArrayList<>();
		for (int i = 0; i < list.size(); i++) {
			System.out.println(list.get(i).getAuditStatus());
			if (!list.get(i).getAuditStatus().equals("C")) {
				list1.add(list.get(i));
			}
		}
		return list1;
	}

	@Override
	@RequestMapping(path = "audit", method = RequestMethod.PUT)
	@ResponseBody
	public String audit(@RequestBody Map<String, String> map) {
		String ids = map.get("ids");
		String statu = map.get("statu");
		IStorage storage = StorageUtil.getInstance();
		String[] idArr = ids.split(",");
		List<DeclarationForm> list = storage.find(DeclarationForm.class, null);
		for (DeclarationForm df : list) {
			for (String id : idArr) {
				if (String.valueOf(df.getId()).equals(id)) {
					df.setAuditStatus(statu);
					if (statu.equals("W")) {
						df.setAuditStatusName("未审核");

						// 计算税款
						ResponseDTO taxR = RestTemplateBuilder.create().postForObject("cse://tax/compute2", df, ResponseDTO.class);
						ResponseDTO taxcuttingR = RestTemplateBuilder.create().postForObject("cse://taxCutting/compute", df,
								ResponseDTO.class);
						Double tax = Double.parseDouble(taxR.getMessage());
						Double taxcutting = Double.parseDouble(taxcuttingR.getMessage());

						if (tax > taxcutting) {
							tax = tax - taxcutting;
						}
						df.setTaxDue(tax);// 计算应交税款
					} else if (statu.equals("Y")) {
						df.setAuditStatusName("审核通过");

						// 检查缴税
						ResponseEntity<String> result = RestTemplateBuilder.create()
								.getForEntity("cse://tax/taxRegister/" + df.getCustomsNumber(), String.class);
						if (result == null || result.getBody() == null) {
							return "提交审核失败：未缴税";
						}
						JSONObject jo = JSONObject.fromObject(result.getBody());
						if (jo.get("taxAmount") == null) {
							return "提交审核失败：未缴税";
						}

						double amount = Double.parseDouble(jo.get("taxAmount").toString());
						if (amount != df.getTaxDue()) {// 缴税一致
							return "提交审核失败：缴税款项与应缴数额不符";
						}
					} else if (statu.equals("N")) {
						df.setAuditStatusName("不通过");
					} else if (statu.equals("P")) {
						df.setAuditStatusName("放行");
						storage.delete(DeclarationForm.class, df);
						storage.add(DeclarationForm.class, df);
						return tryConfirm(df);
					}
					storage.delete(DeclarationForm.class, df);
					storage.add(DeclarationForm.class, df);
				}
			}
		}
		return "提交审核成功";
	}

	@Override
	@RequestMapping(path = "try", method = RequestMethod.POST)
	@ResponseBody
	@TccTransaction(cancelMethod = "cancelMethod", confirmMethod = "confirmMethod")
	public String tryConfirm(@RequestBody DeclarationForm form) {
		// try阶段
		List<String> services = Arrays.asList("license", "cottonQuota", "manifest", "processingTrade");
		StringBuilder sb = new StringBuilder();
		Optional<String> fail = services.stream().filter(item -> {
			// 验证
			ResponseDTO r = RestTemplateBuilder.create().postForObject("cse://" + item + "/try", form, ResponseDTO.class);
			if (r.getMessage().contains("失败")) {
				sb.append(r.getMessage() + "\n");
				return true;
			}
			return false;
		}).findAny();
		if (fail.isPresent()) {
			return ("TCC.try失败:" + sb);
		} else {
			ObjectMapper om = new ObjectMapper();
			try {
				String json = om.writeValueAsString(form);
				rabbitTemplate.convertAndSend("queueName", json);
			} catch (Exception e) {
				System.out.println(e.getMessage());
				e.printStackTrace();
			}
			return "TCC事务成功执行";
		}
	}

	public void confirmMethod(DeclarationForm form) {
		// confirm阶段
		List<String> services = Arrays.asList("license", "cottonQuota", "manifest", "processingTrade");
		StringBuilder sb = new StringBuilder();
		Optional<String> fail = services.stream().filter(item -> {
			// 验证
			ResponseDTO r = RestTemplateBuilder.create().postForObject("cse://" + item + "/confirm", form, ResponseDTO.class);
			if (r.getMessage().contains("失败")) {
				sb.append(r.getMessage() + "\n");
				return true;
			}
			return false;
		}).findAny();
		if (fail.isPresent()) {
			throw new RuntimeException("TCC.confirm失败");
		}
	}

	public void cancelMethod(DeclarationForm form) {
		// cancel阶段
		List<String> services = Arrays.asList("license", "cottonQuota", "manifest", "processingTrade");
		StringBuilder sb = new StringBuilder();
		Optional<String> fail = services.stream().filter(item -> {
			// 验证
			ResponseDTO r = RestTemplateBuilder.create().postForObject("cse://" + item + "/cancel", form, ResponseDTO.class);
			if (r.getMessage().contains("失败")) {
				sb.append(r.getMessage() + "\n");
				return true;
			}
			return false;
		}).findAny();
		if (fail.isPresent()) {
			throw new RuntimeException("TCC.cancel失败");
		}
	}
}
