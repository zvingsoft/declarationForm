package com.zving.declarationform.taxcutting.provider;

import java.util.List;

import javax.ws.rs.core.MediaType;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.zving.declarationform.storage.IStorage;
import com.zving.declarationform.storage.StorageUtil;
//import com.zving.declarationform.model.TaxCuttingCode;
import com.zving.declarationform.model.TaxCuttingRule;
import com.zving.declarationform.taxcutting.schema.TaxCuttingService;

import io.servicecomb.provider.rest.common.RestSchema;

@RestSchema(schemaId = "taxCutting")
@RequestMapping(path = "/", produces = MediaType.APPLICATION_JSON)
public class TaxCuttingServiceImpl implements TaxCuttingService {

    @RequestMapping(path = "taxcutting", method = RequestMethod.POST)
    public String addTaxCutting(@RequestBody TaxCuttingRule taxCuttingRule) {
        StorageUtil.getInstance().add(TaxCuttingRule.class, taxCuttingRule);
        return "添加成功";
    }

    @RequestMapping(path = "taxcutting", method = RequestMethod.PUT)
    public String updateTaxCutting(@RequestBody TaxCuttingRule taxCuttingRule) {
        final IStorage storage = StorageUtil.getInstance();
        List<TaxCuttingRule> taxCuttingRuleList = storage.find(TaxCuttingRule.class, null);
        for (TaxCuttingRule tcr : taxCuttingRuleList) {
            if (tcr.getId().equals(taxCuttingRule.getId())) {
                StorageUtil.getInstance().update(TaxCuttingRule.class, tcr, taxCuttingRule);
                return "编辑成功";
            }
        }
        return "编辑失败";
    }

    @RequestMapping(path = "taxcutting/{id}", method = RequestMethod.DELETE)
    public String deleteTaxCutting(@PathVariable("id") String id) {
        final IStorage storage = StorageUtil.getInstance();
        List<TaxCuttingRule> taxCuttingRuleList = storage.find(TaxCuttingRule.class, null);
        for (TaxCuttingRule taxCuttingRule : taxCuttingRuleList) {
            if (taxCuttingRule.getId().equals(id)) {
                storage.delete(TaxCuttingRule.class, taxCuttingRule);
                return "删除成功";
            }
        }
        return "删除失败";
    }

    @RequestMapping(path = "taxcutting", method = RequestMethod.GET)
    public List<TaxCuttingRule> listTaxCutting() {
        return StorageUtil.getInstance().find(TaxCuttingRule.class, null);
    }

    @RequestMapping(path = "taxcutting/{id}", method = RequestMethod.GET)
    public TaxCuttingRule getTaxCutting(@PathVariable("id") String id) {
        List<TaxCuttingRule> taxCuttingRuleList = StorageUtil.getInstance().find(TaxCuttingRule.class, null);
        for (TaxCuttingRule taxCuttingRule : taxCuttingRuleList) {
            if (taxCuttingRule.getId().equals(id)) {
                return taxCuttingRule;
                // return StorageUtil.getInstance().get(TaxCuttingRule.class, taxCuttingRule);
            }
        }
        return null;
    }
}

// @RequestMapping(path = "taxcutting/largetypes/{codetype}", method = RequestMethod.GET)
// public List<TaxCuttingCode> getLargeType(@PathVariable("codetype") String codetype) {
// TaxCuttingCode taxCuttingCode = new TaxCuttingCode();
// taxCuttingCode.setCodetype(codetype);
// return StorageUtil.getInstance().find(TaxCuttingCode.class, taxCuttingCode);
// }
//
// @RequestMapping(path = "taxcutting/smalltypes/{codetype}", method = RequestMethod.GET)
// public List<TaxCuttingCode> getSmallType(@PathVariable("codetype") String codetype) {
// TaxCuttingCode taxCuttingCode = new TaxCuttingCode();
// taxCuttingCode.setCodetype(codetype);
// return StorageUtil.getInstance().find(TaxCuttingCode.class, taxCuttingCode);
// }
//
// @RequestMapping(path = "taxcutting/ways/{codetype}", method = RequestMethod.GET)
// public List<TaxCuttingCode> getWay(@PathVariable("codetype") String codetype) {
// TaxCuttingCode taxCuttingCode = new TaxCuttingCode();
// taxCuttingCode.setCodetype(codetype);
// return StorageUtil.getInstance().find(TaxCuttingCode.class, taxCuttingCode);
// }
//
// }
