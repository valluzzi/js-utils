import { normpath, juststem, justfname, justpath, justext, justdomain, forceext} from "./filesystem.js"
import { isNumber, isString, isInteger, isArray, isDate, isNull, isObject, float, bool } from "./types.js"
import { lower, upper, len, listify, mapify } from "./strings.js"
import { fetchText } from "./http.js"

export {
    //filesystem
    normpath, 
    juststem, 
    justfname, 
    justpath, 
    justext, 
    justdomain, 
    forceext, 
    //types
    isNumber,
    isString,
    isInteger,
    isArray,
    isDate,
    isNull,
    isObject,
    float,
    bool,
    //strings
    lower,
    upper,
    len,
    listify,
    mapify,
    //http
    fetchText,
}