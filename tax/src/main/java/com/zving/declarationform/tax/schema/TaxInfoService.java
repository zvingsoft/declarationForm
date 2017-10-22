package com.zving.declarationform.tax.schema;

import java.util.List;

import com.zving.declarationform.model.TaxInfo;

/**
 * @author hhp
 * @mail hhp@zving.com
 * @date 2017年10月21日
 */
public interface TaxInfoService {

	String addTaxInfo(TaxInfo taxInfo);

	String updateTaxInfo(TaxInfo taxInfo);

	String deleteTaxInfo(String ids);

	TaxInfo getTaxInfo(long ID);

	List<TaxInfo> getTaxInfoList();
}
