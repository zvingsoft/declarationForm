package com.zving.declarationform.basedata.provider;

import java.util.Date;
import java.util.List;

import javax.ws.rs.core.MediaType;

import org.apache.commons.lang.time.DateFormatUtils;
import org.apache.commons.lang3.math.NumberUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zving.declarationform.basedata.schema.CompanyService;
import com.zving.declarationform.model.Company;
import com.zving.declarationform.storage.IStorage;
import com.zving.declarationform.storage.StorageUtil;

import io.servicecomb.provider.rest.common.RestSchema;

/**
 * @author lwb
 * @mail lwb@zving.com
 * @date 2017年10月23日 下午2:33:09
 * @description:企业管理
 */
@RestSchema(schemaId = "company")
@RequestMapping(path = "/company", produces = MediaType.APPLICATION_JSON)
@Controller
public class CompanyServiceImpl implements CompanyService {

    IStorage storage = StorageUtil.getInstance();

    private long getId() {
        return (long) ((Math.random() * 100000) + 1);
    }

    @Override
    @RequestMapping(path = "", method = RequestMethod.GET)
    @ResponseBody
    public List<Company> list() {
        return storage.find(Company.class, null);
    }

    @Override
    @RequestMapping(path = "{id}", method = RequestMethod.GET)
    @ResponseBody
    public Company get(@PathVariable("id") long id) {
        return getCompany(id);
    }

    @Override
    @RequestMapping(path = "{ids}", method = RequestMethod.DELETE)
    @ResponseBody
    public String delete(@PathVariable("ids") String ids) {
        String[] idArray = ids.split(",");
        for (String id : idArray) {
            if (NumberUtils.isNumber(id)) {
                Company cottonQuota = getCompany(Long.valueOf(id));
                storage.delete(Company.class, cottonQuota);
            }
        }
        return "删除成功";
    }

    @Override
    @RequestMapping(path = "", method = RequestMethod.POST)
    @ResponseBody
    public String add(@RequestBody Company company) {
        company.setId(getId());
        company.setAddTime(new Date());
        company.setAddUser("demo");
        storage.add(Company.class, company);
        return "添加成功";
    }

    @Override
    @RequestMapping(path = "", method = RequestMethod.PUT)
    @ResponseBody
    public String update(@RequestBody Company company) {
        try {
            Company companyOrigin = getCompany(company.getId());
            company.setAddTime(companyOrigin.getAddTime());
            company.setAddUser(companyOrigin.getAddUser());
            company.setModifyTime(new Date());
            company.setModifyUser("demo");
            storage.update(Company.class, companyOrigin, company);
            return "更新成功";
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "更新失败";
    }

    private Company getCompany(long id) {
        List<Company> list = storage.find(Company.class, null);
        for (Company cottonQuota : list) {
            if (cottonQuota.getId() == id) {
                return cottonQuota;
            }
        }
        return null;
    }
}
