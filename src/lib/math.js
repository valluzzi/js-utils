export const randint = (a,b) => {
    a = a?a:0
    b = b?b:1.0
    return Math.round(a + Math.random() *(b-a))  
}

export const hex = (n) => {
    let h = Number(n).toString(16)
    h = h.length===1?"0"+h:h
    return h
}