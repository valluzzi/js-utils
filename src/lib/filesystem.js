/**
 * normpath
 */
const normpath = (pathname)=>{
	if (!pathname)
		return "";
	return pathname.replace(/\\/gi,"/")
                .replace(/\/\//gi,"/")
                .replace(/\/\.\//gi,"/" )
                .replace(/http:\//gi,"http://")
                .replace(/https:\//gi,"https://")
}

/**
 * juststem
 */
const juststem = (pathname) => {
   let fname = justfname(pathname)
   let arr = (fname.indexOf(".")>=0)?fname.split("."):[fname, ""];
   return arr.slice(0,arr.length-1).join(".");
}

/**
 *  justfname
 */
const justfname = (filename) => {
    return (""+filename).replace(/\\/g,'/').replace( /.*\//, '' );
}


/**
 * justpath
 */
const justpath = (pathname) => {
  	let arr = normpath(pathname).split("/");
  	return arr.slice(0,arr.length-1).join("/");
}

/**
 *  justext
 */
const justext = (filename) => {
		if (!filename)return "";
    //return (""+filename).substr((~-filename.lastIndexOf(".") >>> 0) + 2);
    return (""+filename).replace(/\\/g,'/').replace( /.*\./, '' );
}

/**
 *  justdomain
 */
const justdomain = (filename) => {	
    if (!filename)return "";
	const regex = /(?:^https?:\/\/([^/]+)(?:[/,]|$)|^(.*)$)/g
	const found = filename.match(regex);
    return (found.length)?found[0]:""
}
/**
 *  forceext
 */
const forceext = (filename,ext) => {
	filename = (!filename)?"":filename;
	if (justext(filename)==="") return filename+"."+ext;
	let re = /(?:\.([^.]+))?$/;
    return filename.replace(re,(ext)?"."+ext:"");
}

module.exports = { normpath, juststem, justfname, justpath, justext, justdomain, forceext }