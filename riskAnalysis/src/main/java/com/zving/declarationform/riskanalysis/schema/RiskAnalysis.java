package com.zving.declarationform.riskanalysis.schema;

import com.zving.declarationform.model.DeclarationForm;

public interface RiskAnalysis {

    String check(DeclarationForm form);

    String confirm(DeclarationForm form);
}
