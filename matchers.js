function multiply_matcher(data, key, valuesArray) {
    if(data["factor1"] && data["factor2"] && data["factor1"] * data["factor2"] > 100){
        return true;
    }
    return false;
}

EXTENDED_MATCHER_MAP.set('multiply_matcher', multiply_matcher);
