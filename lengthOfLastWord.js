var lengthOfLastWord = function(s) {
    let charLen = s.length-1
    let spacees = 0
    for(let i=charLen;i>=0;i--){
        if(s[i]==' '){
            spacees+=1
            if(charLen-i > 0){
                return charLen-i
            }else{
                charLen-=1
            }
        }
        if(i==0){
            return s.length - spacees
        }
    }

};
str = "luffy"
console.log(lengthOfLastWord(str))