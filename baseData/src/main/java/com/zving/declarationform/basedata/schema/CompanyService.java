package com.zving.declarationform.basedata.schema;

import java.util.List;

import com.zving.declarationform.model.Company;

/**
 * @author lwb
 * @mail lwb@zving.com
 * @date 2017年10月23日 下午2:32:51
 * @description:
 */
public interface CompanyService {
	List<Company> list();

	Company get(long id);

	String delete(String ids);

	String add(Company company);

	String update(Company company);

}
