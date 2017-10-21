package com.zving.declarationform.base;

import com.zving.declarationform.dto.ResponseDTO;

/**
 * @author lwb
 * @mail lwb@zving.com
 * @date 2017年10月21日 下午1:59:17
 * @description:ui方法基类
 */
public class BaseUI {

    public static final int SUCESS = 1;
    public static final int FAIL = 0;

    public ResponseDTO fail(String message) {
        return response(FAIL, message, "", 0);
    }

    public ResponseDTO success() {
        return response(SUCESS, "", "", 0);
    }

    public ResponseDTO success(String message) {
        return response(SUCESS, message, "", 0);
    }

    public ResponseDTO success(String message, Object data) {
        return response(SUCESS, message, data, 0);
    }

    public ResponseDTO success(String message, Object data, int total) {
        return response(SUCESS, message, data, total);
    }

    public ResponseDTO response(int status, String message, Object data, int total) {
        return new ResponseDTO(status, message, data, total);
    }
}
