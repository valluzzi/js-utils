


/**
 * filetostr
 * @param {*} pathname 
 * @returns 
 */
export const fetchText = async(pathname, params) => {

    const token = undefined
    //const token = (window.sessionStorage)?window.sessionStorage.getItem("token"):undefined

    const headers = {
        //'Authorization': `Token ${sessionStorage.getItem("token")}`,
        'Accept': 'text/plain',
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': '*',
    }

    if (token){
        headers['Authorization'] = `Token ${token}`
    }

    const text = await fetch(pathname, {...params, headers:headers})
                        .then((response) => response.text())
                        .catch((ex)=>{console.error(ex);return ""})
    return (text.startsWith("<!DOCTYPE")) ? null: text; 
}

/**
 * fetchJSON
 * @param {*} pathname 
 * @returns 
 */
export const fetchJSON = async(pathname, params) => {

    let res = {}
    const text = await fetchText(pathname, params)
    if (text){
        try{
            res = JSON.parse(text);
        }catch(ex){
            console.error("Error parsing file: ")
            console.error(ex)
        }
    }
    return res;
}