package com.zving.declarationform.riskanalysis.provider;

import java.net.InetAddress;
import java.net.UnknownHostException;

import javax.ws.rs.core.MediaType;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zving.declarationform.model.DeclarationForm;
import com.zving.declarationform.riskanalysis.schema.RiskAnalysis;

import io.servicecomb.provider.rest.common.RestSchema;

@RestSchema(schemaId = "riskAnalysis")
@RequestMapping(path = "/riskAnalysis", produces = MediaType.APPLICATION_JSON)
@Controller
public class RiskAnalysisImpl implements RiskAnalysis {

	@Override
	@RequestMapping(path = "check", method = RequestMethod.POST)
	@ResponseBody
	public String check(@RequestBody DeclarationForm form) {
		try {
			if (form.getPackingList().size() == 0 || Double.parseDouble(form.getPackingList().get(0).getAmount()) < 2) {
				return InetAddress.getLocalHost().getHostName() + "风险分析发现问题:没有货物或者货物过少!";
			} else {
				return InetAddress.getLocalHost().getHostName() + "风险分析未发现问题";
			}
		} catch (UnknownHostException e) {
			throw new RuntimeException(e);
		}
	}

	@Override
	@RequestMapping(path = "confirm", method = RequestMethod.POST)
	@ResponseBody
	public String confirm(@RequestBody DeclarationForm form) {
		return "confirm成功：riskAnalysis";
	}

}
