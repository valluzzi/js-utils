import {isArray, isObject, isString} from "./types.js";

/**
 * lower - cast to lower case
 * @param {*} text 
 * @returns 
 */


export const lower = (text) => {
    return (""+text).toLowerCase()
}

/**
 * upper - cast to upper case
 * @param {*} text 
 * @returns 
 */
export const upper = (text) => {
    return (""+text).toUpperCase()
}
  

/**
 * len - returns the object/array length
 * @param {*} obj 
 * @returns 
 */
export const len = (obj) => {

    if (obj === undefined || obj === null || obj === false)
      return 0;

    if (isString(obj)||isArray(obj))
        return obj.length;

    // Collections  
    if (isObject(obj) && obj.getLength)  
        return obj.getLength();

    // Dictionary
    if (isObject(obj) && Object.keys)
        return Object.keys(obj).length;

    // Objects 
    if (isObject(obj) && !Object.keys){
        let keys = [];
        for(let prop in obj){
            if(obj.hasOwnProperty(prop))
                keys.push(prop);
        }//end for
        return keys.length;
    }
    
    //otherwise
    return 0;
}//end len


/**
 *  listify
 */
 export const listify = (text, c, removeEmpty) => {

    if (!text) return [];

    if (isString(text)){
  		c = (c)?c:",";
  		text = text.split(c);
  	}
    if (isObject(text) && text.getArray){
        return text.getArray()
    }

    if (isArray(text)){

        if (removeEmpty){
            return text.filter(item=>(item!=="" && item!==undefined && item!==null));
        }

  		return text;
  	}

    return [text];
}

/**
*  mapify
*/
export const mapify = (text, sep) => {
   let res ={};
   if (isString(text)){
       sep = (sep)?sep:";";
       let items = text.split(sep);
       for(let j=0;j<items.length;j++){
           let name_value = items[j].split("=");
           let key   = decodeURIComponent(name_value[0].trim());
           let value = decodeURIComponent(name_value[1]);
           res[key] = value;
       }
   }else if (isArray(text)){
     let items = text
     for(let j=0;j<items.length;j++){
        let key   = items[j]["@k"]||items[j]["@name"]
        let value = items[j]["@v"]||items[j]["@value"]
        res[key] = value;
     }
   }
   return res;
}