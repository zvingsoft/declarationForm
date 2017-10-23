package com.zving.declarationform.cottonquota.provider;

import java.util.Date;
import java.util.List;

import javax.ws.rs.core.MediaType;

import org.apache.commons.beanutils.BeanUtils;
import org.apache.commons.lang3.math.NumberUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zving.declarationform.cottonquota.model.CottonQuota;
import com.zving.declarationform.cottonquota.schema.CottonQuotaService;
import com.zving.declarationform.storage.IStorage;
import com.zving.declarationform.storage.StorageUtil;

import io.servicecomb.provider.rest.common.RestSchema;

@RestSchema(schemaId = "cottonQuota")
@RequestMapping(path = "/cottonQuota", produces = MediaType.APPLICATION_JSON)
@Controller
public class CottonQuotaServiceImpl implements CottonQuotaService {

    IStorage storage = StorageUtil.getInstance();

    private long getId() {
        return (long) ((Math.random() * 100000) + 1);
    }

    @Override
    @RequestMapping(path = "", method = RequestMethod.POST)
    @ResponseBody
    public String add(@RequestBody CottonQuota cottonQuota) {
        cottonQuota.setNumber(String.valueOf(new Date().getTime()));
        cottonQuota.setAuditStatus("");
        cottonQuota.setId(getId());
        cottonQuota.setAddTime(new Date());
        cottonQuota.setAddUser("demo");
        storage.add(CottonQuota.class, cottonQuota);
        return "添加成功";
    }

    @Override
    @RequestMapping(path = "", method = RequestMethod.PUT)
    @ResponseBody
    public String update(@RequestBody CottonQuota cottonQuota) {
        try {
            CottonQuota cottonQuotaOrigin = getCottonQuota(cottonQuota.getId());
            CottonQuota cottonQuotaNew = new CottonQuota();
            BeanUtils.copyProperties(cottonQuotaNew, cottonQuotaOrigin);
            cottonQuotaNew.setQuota(cottonQuota.getQuota());
            cottonQuotaNew.setUsed(cottonQuota.getUsed());
            cottonQuotaNew.setApplication(cottonQuota.getApplication());
            cottonQuotaNew.setModifyTime(new Date());
            cottonQuotaNew.setModifyUser("demo");
            storage.update(CottonQuota.class, cottonQuotaOrigin, cottonQuotaNew);
            return "更新成功";
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "更新失败";
    }

    @Override
    @RequestMapping(path = "{ids}", method = RequestMethod.DELETE)
    @ResponseBody
    public String delete(@PathVariable("ids") String ids) {
        String[] idArray = ids.split(",");
        for (String id : idArray) {
            if (NumberUtils.isNumber(id)) {
                CottonQuota cottonQuota = getCottonQuota(Long.valueOf(id));
                storage.delete(CottonQuota.class, cottonQuota);
            }
        }
        return "删除成功";
    }

    @Override
    @RequestMapping(path = "{id}", method = RequestMethod.GET)
    @ResponseBody
    public CottonQuota get(@PathVariable("id") long id) {
        return getCottonQuota(id);
    }

    @Override
    @RequestMapping(path = "", method = RequestMethod.GET)
    @ResponseBody
    public List<CottonQuota> list() {
        return storage.find(CottonQuota.class, null);
    }

    @Override
    @RequestMapping(path = "audit/{ids}/{status}", method = RequestMethod.PATCH)
    @ResponseBody
    public String audit(@PathVariable("ids") String ids, @PathVariable("status") String status) {
        String[] idArray = ids.split(",");
        try {
            for (String id : idArray) {
                if (NumberUtils.isNumber(id)) {
                    CottonQuota cottonQuotaOrigin = getCottonQuota(Long.valueOf(id));
                    CottonQuota cottonQuota = new CottonQuota();
                    BeanUtils.copyProperties(cottonQuota, cottonQuotaOrigin);
                    cottonQuota.setAuditStatus(status);
                    cottonQuota.setModifyTime(new Date());
                    cottonQuota.setModifyUser("demo");
                    storage.update(CottonQuota.class, cottonQuotaOrigin, cottonQuota);
                }
            }
            return "审核成功";
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "审核失败";
    }

    private CottonQuota getCottonQuota(long id) {
        List<CottonQuota> list = storage.find(CottonQuota.class, null);
        for (CottonQuota cottonQuota : list) {
            if (cottonQuota.getId() == id) {
                return cottonQuota;
            }
        }
        return null;
    }
}
