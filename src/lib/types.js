




/**
 * isNumber
 * @param {*} obj 
 * @returns 
 */
export const isNumber = (obj) => {
    return !isNaN(Number(obj))
}
  
/**
 * isInteger
 * @param {*} obj 
 * @returns 
 */
export const isInteger = (obj) => {
    return isNumber(obj) && parseFloat(obj)===Math.floor(obj)
}
  
/**
 * isArray
 * @param {*} obj 
 * @returns 
 */
export const isArray = (obj) => {
    return Array.isArray(obj);
}

/**
 * isString
 * @param {*} obj 
 * @returns 
 */
export const isString = (obj) => {
    return typeof(obj)==="string";
}

/**
 * isDate
 * @param {*} obj 
 * @returns 
 */
export const isDate = (obj) => {
    return (obj instanceof Date)
}

/**
 * isNull
 * @param {*} obj 
 * @returns 
 */
export const isNull = (obj) => {
    return obj === undefined || obj === null
}

/**
 * isObject 
 * @param {*} obj 
 * @returns 
 */
export const isObject = (obj) => {
    return typeof(obj)==="object" && !Array.isArray(obj);
}

/**
 * float - cast to float
 * @param {*} obj 
 * @returns 
 */
export const float = (arr) => {
    if (arr===undefined || arr===null || arr===false)
        return NaN

    if (isArray(arr)){
        return arr.map(item=>parseFloat(item))
    }
    
    return parseFloat(arr)
}

/**
 * bool - cast to boolean
 * @param {*} obj 
 * @returns 
 */
export const bool = (arr) => {

    if (arr===true || arr===1)
        return true

    if (isString(arr)){
        return (arr.toLowerCase()==="true" || arr==="1")
    }
    
    if (isArray(arr)){
        return arr.map(item=>bool(item))
    }

    return false
}
