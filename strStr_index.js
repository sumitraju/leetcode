var strStr = function(haystack, needle) {
    let formed_str = ""
    if(haystack.length < needle.length){
        return -1
    }
    for(i=0;i<haystack.length;i++){
        for(j=0;j<needle.length;j++){
            if(((needle[j] == haystack[j+i]))){
                formed_str = formed_str+haystack[j+i]
                if(formed_str == needle){
                    return i
                }
            }
        }
        formed_str =""
    }
    if(formed_str == ""){
        return -1
    }
};

console.log(strStr("sadbutsad","sad"))