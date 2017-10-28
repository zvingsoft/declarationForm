#!/bin/bash
#推送到registry，第一个参数为registry前缀
images=("baseData" "cottonQuota" "form" "license" "mainui" "manifest" "processingTrade" "riskAnalysis" "tax" "taxCutting")
for var in ${images[@]};  
do  
    typeset -l lowerVar
    lowerVar=$var
    docker tag $lowerVar "$1/$lowerVar"
    docker push "$1/$lowerVar"
done