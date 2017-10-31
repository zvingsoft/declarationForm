package com.zving.declarationform.license.provider;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.HashMap;
import java.util.Random;

import javax.ws.rs.core.MediaType;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zving.declarationform.dto.ResponseDTO;
import com.zving.declarationform.license.model.License;
import com.zving.declarationform.license.schema.TestService;
import com.zving.declarationform.model.TCCLock;
import com.zving.declarationform.storage.StorageUtil;

import io.servicecomb.provider.rest.common.RestSchema;

/**
 * @author lwb
 * @mail lwb@zving.com
 * @date 2017年10月23日 下午2:33:09
 * @description:企业管理
 */
@RestSchema(schemaId = "test")
@RequestMapping(path = "/test", produces = MediaType.APPLICATION_JSON)
@Controller
public class TestServiceImpl implements TestService {

	static long id = Math.abs(new Random().nextInt(100000000));

	@Override
	@RequestMapping(path = "loadblance", method = RequestMethod.GET)
	@ResponseBody
	public ResponseDTO loadblanceTest() {
		try {
			return new ResponseDTO(String.format("Loadblance license: HostName=%s Time=%s", InetAddress.getLocalHost().getHostName(),
					System.currentTimeMillis()));
		} catch (UnknownHostException e) {
			return new ResponseDTO(String.format("Loadblance license: ID=%s Time=%s", id, System.currentTimeMillis()));
		}
	}

	@Override
	@RequestMapping(path = "tccTry", method = RequestMethod.POST)
	@ResponseBody
	public ResponseDTO tccTry(HashMap<String, Boolean> data) {
		License old = new License();
		old.setLicenseKey("100");
		License license = StorageUtil.getInstance().get(License.class, old);
		if (license == null) {
			return new ResponseDTO("license执行tccTry失败:不存在许可证号为100的记录");
		}
		if (data.containsKey("try") && data.get("try")) {// try==true
			license.setCount(license.getCount() - 1);

			TCCLock lock = new TCCLock();
			lock.setType("License");
			lock.setRelaId(license.getLicenseKey());
			lock.setLockedValue("1");

			StorageUtil.getInstance().add(TCCLock.class, lock);
			StorageUtil.getInstance().update(License.class, old, license);
			return new ResponseDTO("license执行tccTry成功");
		} else {
			return new ResponseDTO("license执行tccTry失败:锁定许可证失败");
		}
	}

	@Override
	@RequestMapping(path = "tccConfirm", method = RequestMethod.POST)
	@ResponseBody
	public ResponseDTO tccConfirm(HashMap<String, Boolean> data) {
		return null;
	}

	@Override
	@RequestMapping(path = "tccCancel", method = RequestMethod.POST)
	@ResponseBody
	public ResponseDTO tccCancel(HashMap<String, Boolean> data) {
		return null;
	}
}
