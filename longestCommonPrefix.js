var longestCommonPrefix = function(strs) {
    let shortestStr = ""
    shortestStr = strs.reduce((a, b) => a.length <= b.length ? a : b)
    for(i=shortestStr.length;i>0;i--){
        let currentStr = shortestStr.substring(0, i);
        
        let checkLen = 0
        strs.map(function (x) { 
            if(x.startsWith(currentStr)){
                checkLen++
            }
        });
        if(checkLen == strs.length){
            return currentStr
        }
        checkLen = 0
    }
    return ""
};

console.log(longestCommonPrefix(["dog","racecar","car"]))
