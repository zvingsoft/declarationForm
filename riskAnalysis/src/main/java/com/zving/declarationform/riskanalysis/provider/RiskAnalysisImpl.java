package com.zving.declarationform.riskanalysis.provider;

import java.net.InetAddress;
import java.net.UnknownHostException;

import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.zving.declarationform.model.DeclarationForm;
import com.zving.declarationform.riskanalysis.schema.RiskAnalysis;

import io.servicecomb.provider.rest.common.RestSchema;

@RestSchema(schemaId = "riskAnalysis")
@Path("/riskAnalysis")
@Produces(MediaType.APPLICATION_JSON)

public class RiskAnalysisImpl implements RiskAnalysis {

	@Override
	@Path("check")
	@POST

	public String check(DeclarationForm form) {
		try {
			if (form.getPackingList().size() == 0 || form.getPackingList().get(0).getAmount() < 2) {
				return InetAddress.getLocalHost().getHostName() + "风险分析失败:没有货物或者货物过少!";
			} else {
				return InetAddress.getLocalHost().getHostName() + "风险分析未发现问题";
			}
		} catch (UnknownHostException e) {
			throw new RuntimeException(e);
		}
	}

	@Override
	@Path("confirm")
	@POST

	public String confirm(DeclarationForm form) {
		return "confirm成功：riskAnalysis";
	}

}
