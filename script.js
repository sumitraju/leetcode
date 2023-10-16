var addBinary = function(a, b) {
    if(a.length < b.length){
        let c = b
        b=a
        a=c
    }
    for(let i=0;i<a.length;i++){
        console.log(a[i])
    }
};

let a = "11"
let b = "1"
addBinary(a,b)