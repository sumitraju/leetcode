var romanToInt = function(s) {
    const roman = {
        "IV":4,
        "XL":40,
        "CD":400,
        "IX":9,
        "XC":90,
        "CM":900,
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
}

for (var key of Object.keys(roman)) {
    if(s.includes(key)){
        regexval = key
        var re = new RegExp(regexval,"g");
        s = s.replace(re, roman[key]+",");
    }
    
}

let AddNum = 0
let arrNum = s.split(",")

arrNum.map(function (x) { 
    if(x != ''){
        AddNum = AddNum + parseInt(x)
    }
});

return AddNum

};

console.log(romanToInt("MCMXCIV"))