package com.zving.declarationform.license.schema;

import java.util.HashMap;

import com.zving.declarationform.dto.ResponseDTO;

public interface TestService {
	ResponseDTO loadblanceTest();

	ResponseDTO tccTry(HashMap<String, Boolean> data);

	ResponseDTO tccConfirm(HashMap<String, Boolean> data);

	ResponseDTO tccCancel(HashMap<String, Boolean> data);

}
