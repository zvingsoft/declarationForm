package com.zving.declarationform.riskanalysis.provider;

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
        return "check成功：riskAnalysis";
    }

    @Override
    @RequestMapping(path = "confirm", method = RequestMethod.POST)
    @ResponseBody
    public String confirm(@RequestBody DeclarationForm form) {
        return "confirm成功：riskAnalysis";
    }

}
