package com.zving.declarationform.cottonquota.provider;

import java.util.Date;
import java.util.List;

import javax.ws.rs.core.MediaType;

import org.apache.commons.beanutils.BeanUtils;
import org.apache.commons.lang3.math.NumberUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.zving.declarationform.cottonquota.schema.CottonQuotaService;
import com.zving.declarationform.model.CottonQuota;
import com.zving.declarationform.storage.IStorage;
import com.zving.declarationform.storage.StorageUtil;

import io.servicecomb.provider.rest.common.RestSchema;

@RestSchema(schemaId = "cottonQuota")
@RequestMapping(path = "/", produces = MediaType.APPLICATION_JSON)
public class CottonQuotaServiceImpl implements CottonQuotaService {

    private long getId() {
        return (long) ((Math.random() * 100000) + 1);
    }

    @Override
    @RequestMapping(path = "cottonQuota", method = RequestMethod.POST)
    public String add(@RequestBody CottonQuota cottonQuota) {
        IStorage storage = StorageUtil.getInstance();
        cottonQuota.setId(getId());
        cottonQuota.setNumber(String.valueOf(new Date().getTime()));
        cottonQuota.setAuditstatus("");
        cottonQuota.setAddtime(new Date());
        cottonQuota.setAdduser("demo");
        storage.add(CottonQuota.class, cottonQuota);
        return "添加成功";
    }

    @Override
    @RequestMapping(path = "cottonQuota", method = RequestMethod.PUT)
    public String update(@RequestBody CottonQuota cottonQuota) {
        try {
            IStorage storage = StorageUtil.getInstance();
            CottonQuota cottonQuotaOrigin = getCottonQuota(storage, cottonQuota.getId());
            CottonQuota cottonQuotaNew = new CottonQuota();
            BeanUtils.copyProperties(cottonQuotaNew, cottonQuotaOrigin);
            cottonQuotaNew.setApplication(cottonQuota.getApplication());
            cottonQuotaNew.setModifytime(new Date());
            cottonQuotaNew.setModifyuser("demo");
            storage.update(CottonQuota.class, cottonQuotaOrigin, cottonQuotaNew);
            return "更新成功";
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "更新失败";
    }

    @Override
    @RequestMapping(path = "cottonQuota/{ids}", method = RequestMethod.DELETE)
    public String delete(@PathVariable("ids") String ids) {
        IStorage storage = StorageUtil.getInstance();
        String[] idArray = ids.split(",");
        for (String id : idArray) {
            if (NumberUtils.isNumber(id)) {
                CottonQuota cottonQuota = getCottonQuota(storage, Long.valueOf(id));
                storage.delete(CottonQuota.class, cottonQuota);
            }
        }
        return "删除成功";
    }

    @Override
    @RequestMapping(path = "cottonQuota/{id}", method = RequestMethod.GET)
    public CottonQuota get(@PathVariable("id") long id) {
        IStorage storage = StorageUtil.getInstance();
        return getCottonQuota(storage, id);
    }

    @Override
    @RequestMapping(path = "cottonQuota", method = RequestMethod.GET)
    public List<CottonQuota> list(@RequestParam String number, @RequestParam String companyName, @RequestParam String pageIndex,
            @RequestParam String pageSize) {
        IStorage storage = StorageUtil.getInstance();
        return storage.find(CottonQuota.class, null);
    }

    @Override
    @RequestMapping(path = "cottonQuota/audit/{ids}/{status}", method = RequestMethod.PUT)
    public String audit(@PathVariable("ids") String ids, @PathVariable("status") String status) {
        String[] idArray = ids.split(",");
        try {
            for (String id : idArray) {
                if (NumberUtils.isNumber(id)) {
                    IStorage storage = StorageUtil.getInstance();
                    CottonQuota cottonQuotaOrigin = getCottonQuota(storage, Long.valueOf(id));
                    CottonQuota cottonQuota = new CottonQuota();
                    BeanUtils.copyProperties(cottonQuota, cottonQuotaOrigin);
                    cottonQuota.setAuditstatus(status);
                    cottonQuota.setModifytime(new Date());
                    cottonQuota.setModifyuser("demo");
                    storage.update(CottonQuota.class, cottonQuotaOrigin, cottonQuota);
                }
            }
            return "审核成功";
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "审核失败";
    }

    private CottonQuota getCottonQuota(IStorage storage, long id) {
        List<CottonQuota> list = storage.find(CottonQuota.class, null);
        for (CottonQuota cottonQuota : list) {
            if (cottonQuota.getId() == id) {
                return cottonQuota;
            }
        }
        return null;
    }
}
