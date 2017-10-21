package com.zving.declarationform.tax.provider;

import javax.ws.rs.core.MediaType;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.zving.declarationform.model.DeclarationForm;
import com.zving.declarationform.tax.schema.TaxService;

import io.servicecomb.provider.rest.common.RestSchema;

/**
 * 计税服务实现类
 * 
 * @author 王育春
 * @mail wyuch@zving.com
 * @date 2017年10月18日
 */
@RestSchema(schemaId = "tax")
@RequestMapping(path = "/", produces = MediaType.APPLICATION_JSON)
public class TaxServiceImpl implements TaxService {

    @Override
    @RequestMapping(path = "compute", method = RequestMethod.POST)
    public String compute(@RequestBody DeclarationForm form) {
        // return "报关单" + form.SN + "税费：" + System.currentTimeMillis() / 1000000;
        return "";
    }

    @Override
    @RequestMapping(path = "confirm", method = RequestMethod.POST)
    public String confirm(@RequestBody DeclarationForm form) {
        // return "报关单" + form.SN + "缴税确认";
        return "";
    }

}
