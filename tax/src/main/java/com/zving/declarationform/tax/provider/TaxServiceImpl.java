package com.zving.declarationform.tax.provider;

import java.net.InetAddress;
import java.net.UnknownHostException;

import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.zving.declarationform.dto.ResponseDTO;
import com.zving.declarationform.model.DeclarationForm;
import com.zving.declarationform.model.PackingItem;
import com.zving.declarationform.storage.StorageUtil;
import com.zving.declarationform.tax.model.TaxRate;
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
@Path("/")
@Produces(MediaType.APPLICATION_JSON)

public class TaxServiceImpl implements TaxService {

	@Path("check")
	@POST

	public String check(DeclarationForm form) {
		try {
			for (PackingItem item : form.getPackingList()) {
				TaxRate rate = new TaxRate();
				rate.setSKU(item.getSKU());
				rate = StorageUtil.getInstance().get(TaxRate.class, rate);
				if (rate == null) {
					return InetAddress.getLocalHost().getHostName() + ":计税检查失败，未找到税率";
				}
			}
			return InetAddress.getLocalHost().getHostName() + ":应缴税款:" + compute(form);
		} catch (UnknownHostException e) {
			throw new RuntimeException(e);
		}
	}

	@Override
	@Path("compute2")
	@POST

	public ResponseDTO compute2(DeclarationForm form) {
		return new ResponseDTO(compute(form));
	}

	@Override
	@Path("compute")
	@POST

	public String compute(DeclarationForm form) {
		double total = 0;
		for (PackingItem item : form.getPackingList()) {
			TaxRate rate = new TaxRate();
			rate.setSKU(item.getSKU());
			rate = StorageUtil.getInstance().get(TaxRate.class, rate);
			if (item.getTotalPrice() < rate.getExemption()) {// 低于免征额
				continue;
			}
			total += rate.getRate() * item.getTotalPrice() / 100;
		}
		return (String.format("%.2f", total));

	}

}
