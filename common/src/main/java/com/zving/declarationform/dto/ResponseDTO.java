package com.zving.declarationform.dto;

/**
 * @author lwb
 * @mail lwb@zving.com
 * @date 2017年10月21日 下午1:28:22
 * @description:
 */
public class ResponseDTO {

	private int status;
	private String message;
	private String data;
	private int total;

	public ResponseDTO() {
	}

	public ResponseDTO(String message) {
		this.message = message;
	}

	public ResponseDTO(int status, String message, String data, int total) {
		this.status = status;
		this.message = message;
		this.data = data;
		this.total = total;
	}

	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}

	public int getTotal() {
		return total;
	}

	public void setTotal(int total) {
		this.total = total;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

}
