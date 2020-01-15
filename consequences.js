function print_log(consequence, data){
    logService.error('condition matched, the result is bigger than 100, data:' + JSON. stringify(data));
}
EXTENDED_CONSEQUENCE_FUNCTION_MAP.set('print_log',print_log);
