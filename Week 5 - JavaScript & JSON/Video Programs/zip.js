function isMNZip(code) {
    // MN zip codes fall between 55001 & 56763
    if (code>=55001 && code <= 56763){
        return true
    } else {return false}
}

console.log(isMNZip('55001'))
console.log(isMNZip('55403'))
console.log(isMNZip('56763'))
