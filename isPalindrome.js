var isPalindrome = function(x) {
    let strx = x.toString()
    let stry = ""
    for(let i=strx.length-1;i>=0;i--){
        stry = stry + strx.charAt(i)
    }
    console.log(stry)
    if(x==parseInt(stry)){
        return true
    }else{
        return false
    }
};

console.log(isPalindrome(415514))