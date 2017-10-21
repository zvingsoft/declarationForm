package com.zving.declarationform.cottonquota.rest;

import java.util.List;

import javax.ws.rs.core.MediaType;

import org.springframework.stereotype.Controller;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.RestTemplate;

import com.zving.declarationform.base.BaseUI;
import com.zving.declarationform.dto.ResponseDTO;
import com.zving.declarationform.model.CottonQuota;

import io.servicecomb.provider.springmvc.reference.RestTemplateBuilder;

/**
 * @author lwb
 * @mail lwb@zving.com
 * @date 2017年10月20日 下午5:38:15
 * @description:棉花配额UI
 */
@Controller
@RequestMapping(path = "api/", produces = MediaType.APPLICATION_JSON)
public class CottonQuotaUI extends BaseUI {

    static RestTemplate restTemplate = RestTemplateBuilder.create();

    @RequestMapping(path = "cottonQuota/{id}", method = RequestMethod.GET)
    public @ResponseBody ResponseDTO get(@PathVariable("id") long id) {
        CottonQuota cottonQuota = restTemplate.getForObject("cse://cottonQuota/cottonQuota/" + id, CottonQuota.class);
        if (cottonQuota == null || ObjectUtils.isEmpty(cottonQuota)) {
            return fail("获取失败,不存在");
        }
        return success("获取成功", cottonQuota);
    }

    @RequestMapping(path = "cottonQuota", method = RequestMethod.GET)
    public @ResponseBody ResponseDTO list(@RequestParam String number, @RequestParam String companyName, @RequestParam String pageIndex,
            @RequestParam String pageSize) {
        try {
            List<?> list = restTemplate.getForObject("cse://cottonQuota/cottonQuota", List.class,
                    new Object[] { number, companyName, pageIndex, pageSize });
            return success("获取成功", list, list.size());
        } catch (Exception e) {
            return fail("获取失败");
        }
    }

    @RequestMapping(path = "cottonQuota", method = RequestMethod.POST)
    public @ResponseBody ResponseDTO add(@RequestBody CottonQuota cottonQuota) {
        return success(restTemplate.postForObject("cse://cottonQuota/cottonQuota", cottonQuota, String.class));
    }

    @RequestMapping(path = "cottonQuota", method = RequestMethod.PUT)
    public @ResponseBody ResponseDTO update(@RequestBody CottonQuota cottonQuota) {
        restTemplate.put("cse://cottonQuota/cottonQuota", cottonQuota);
        return success("更新成功");
    }

    @RequestMapping(path = "cottonQuota/{ids}", method = RequestMethod.DELETE)
    public @ResponseBody ResponseDTO deleta(@PathVariable("ids") String ids) {
        restTemplate.delete("cse://cottonQuota/cottonQuota/" + ids);
        return success("删除成功");
    }

    @RequestMapping(path = "cottonQuota/audit/{ids}/{status}", method = RequestMethod.PATCH)
    public @ResponseBody ResponseDTO audit(@PathVariable("ids") String ids, @PathVariable("status") String status) {
        restTemplate.put("cse://cottonQuota/cottonQuota/audit/" + ids + "/" + status, null);
        return success("审核成功");
    }

}
