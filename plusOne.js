var plusOne = function(digits) {
    i = digits.length-1
    add1 = false
    digits.push(0)
    while(i>=0){
        if(digits[i] == 9){
            if(i==0){
                digits[i]=1
            }else{
                digits[i]=0
            }
            add1 = true
            
        }else{
            digits[i]=digits[i]+1
            add1 = false
            i=-1
        }
        //console.log(digits[i])
        i--
    }
    if(add1==false){
        digits.pop()
    }
    return digits
};

arr1 = [1,8,9,9]
console.log(plusOne(arr1))

var plusOneFor = function(digits) {
    let digitLen= digits.length-1
    add1 = false
    digits.push(0)
    for(i=digitLen;i>=0;i--){
        if(digits[i] == 9){
            if(i==0){
                digits[i]=1
            }else{
                digits[i]=0
            }
            add1 = true
            
        }else{
            digits[i]=digits[i]+1
            add1 = false
            i=-1
        }
    }
    if(add1==false){
        digits.pop()
    }
    return digits
};

arr1 = [9,9,9]
console.log(plusOneFor(arr1))