var mySqrt = function(x) {
    if(x==0){
        return 0
    }
    sqrt = x/2
    check_change = 0
    while(check_change !=sqrt){
        console.log("sqrt: "+(sqrt))
        check_change=sqrt
        sqrt = (sqrt + (x / sqrt)) / 2
    }
    return Math.floor(sqrt)
};

num = 512
console.log(mySqrt(num))