var isValid = function(s) {
    const closepar = ")}]"

    let if_first_char_valid = closepar.includes(s.charAt(0)) ? false : true
    let trim_string_val = s.replace(/\{\}|\[\]|\(\)/g, '')
    let odd_parentheses = trim_string_val.match(/\(\}|\(\]|\[\}|\[\)|\{\)|\{\]/g)
    let odd_parentheses_check = odd_parentheses != null && odd_parentheses.length > 0 ? true : false
    let if_count_valid = (s.match(/\(/g)||[]).length == (s.match(/\)/g)||[]).length && (s.match(/\{/g)||[]).length == (s.match(/\}/g)||[]).length && (s.match(/\[/g)||[]).length == (s.match(/\]/g)||[]).length ? true : false
        
    if(trim_string_val.length > 0){
        if(if_count_valid == true && if_first_char_valid == true && odd_parentheses_check == false){
            return isValid(trim_string_val)
        }else{
            return false
        }
    }else{
        return true
    }
        
};

console.log(isValid("{[(())]}[[]]"))
console.log(isValid("{))((}"))

/* 



(){()}
({{}})({][})
|\]\[|\}\{|\)\(

const first_char_valid = function(s) {
    return closepar.includes(s.charAt(0)) ? false : true
};


    const parentheses = {
        "(" : ")",
        "{" : "}",
        "[" : "]",
    }

    const tree_parentheses = {

    }
let char_to_check = 0
    let next_substr = ""
    let current_substr = ""
    let current_index = 0
    let current_str_done = false
    let root_node = tree_parentheses
    
left_val = s.substring(1, s.indexOf(parentheses[s.charAt(0)]));
right_val = s.substring(s.indexOf(parentheses[s.charAt(0)])+1, s.length);
root_node["left_val"] = left_val
root_node["right_val"] = right_val */

/* if(s.length%2==0){
        countMatch=0
        for(i=0;i<(s.length);i++){

        }
        return countMatch == s.length/2 ? true : false
    }else{
        return false
    } 
        if(first_char_valid(s) ==false || if_count_valid(s) == false){
        return false
    }else{
        
        //return trim_string_val
    }
    
    */