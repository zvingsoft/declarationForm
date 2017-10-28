#!/bin/bash
#´ò°ü³Édocker¾µÏñ
images=("baseData" "cottonQuota" "form" "license" "mainui" "manifest" "processingTrade" "riskAnalysis" "tax" "taxCutting")
for var in ${images[@]};  
do  
    typeset -l lowerVar
    lowerVar=$var
    echo $lowerVar
    docker build -t $lowerVar $var
done