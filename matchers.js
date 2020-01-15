function multiply_matcher(data, key, valuesArray) {
    if(data["data.contextdata.factor1"] && data["data.contextdata.factor2"]
       && data["data.contextdata.factor1"] * data["data.contextdata.factor2"] > 100){
        return true;
    }
    return false;
}

EXTENDED_MATCHER_MAP.set('multiply_matcher', multiply_matcher);
