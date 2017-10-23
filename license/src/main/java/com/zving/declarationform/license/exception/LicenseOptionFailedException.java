package com.zving.declarationform.license.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * 许可证操作失败异常
 * 
 * @author 曾鹏
 * @mail zp@zving.com
 * @date 2017年10月24日
 */
@ResponseStatus(value = HttpStatus.BAD_REQUEST, reason = "License option failed.")
public class LicenseOptionFailedException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

}