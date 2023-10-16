var longestCommonSubsequence = function(text1, text2) {
    let j=0
    let i=0
    let temp = 0
    let big = 0
    let prevbig = 0
    if(text1.length<text2.length){
        let temptxt = ""
        temptxt = text1
        text1 = text2
        text2 = temptxt
    }
    while(j<text2.length){
        if(i>=text1.length){
            console.log("----------------")
            i=0
            j+=1
            if(big > prevbig){
                prevbig = big
            }
            big = 0
        }
        if(text2[j]==text1[i]){
            console.log(text2[j])
            i+=1
            j+=1
            big+=1
            /* if(j==text2.length){
                return j
            } */

            
        }else{
            i+=1
        }
        
        
        if(temp>= (text1.length*text2.length)){
            return "Break"
        }
        temp++
    }
    return 
};

str1 = "vozsh" //bdcagkbcadc bl
str2 = "psvo" //yby psnw
console.log(longestCommonSubsequence(str1,str2))


var longestCommonSubsequence = function(text1, text2) {
    let j=0
    let i=0
    let prev_i = 0
    let prev_j = 0
    let temp = 0
    let arr_obj1 = []

    if(text1.length<text2.length){
        let temptxt = ""
        temptxt = text1
        text1 = text2
        text2 = temptxt
    }

    while(j<text2.length){
        
        if(text2[j]==text1[i] && i>prev_i){
            
            //if(i>prev_i){
                console.log(i +"||"+prev_i)
                prev_i = i
                prev_j = j
                arr_obj1.push(text1[i])
                i+=1
                j+=1
           // }
            
            
            
        }else{
            console.log(j)
            i++
        }
        if(j-prev_j > 1){
            prev_i=0
           // j-=1
        }
        if(i>=text1.length-1){
            console.log("----------------")
            i=0
            j+=1
        }
        
        if(temp>= (text1.length*text2.length)){
            return "Break"
        }
        temp++
    }
    return arr_obj1
};

str1 = "bcg" //bdcagkbcadc bl bsbininm
str2 = "bdcagkbcadc" //dbca yby psnw jmjkbkjkv
console.log(longestCommonSubsequence(str1,str2))



let arr_obj1 = []
let arr_obj2 = []
var longestCommonSubsequence = function(text1, text2) {
    let j=0
    let i=0
    let prev_i = 0
    let prev_j = 0
    let temp = 0
    

    /* if(text1.length<text2.length){
        let temptxt = ""
        temptxt = text1
        text1 = text2
        text2 = temptxt
    } */

    while(j<text2.length){
        if(text2[j]==text1[i]){
            if(prev_i>i || prev_j>j){
                //console.log("prev" + prev_i)
                //console.log("Deleted="+ text1[prev_i])
                arr_obj1.push([text2[j],i])
            }else{
                
            }
            //console.log("i="+i+" || j="+j)
            
            
            arr_obj2.push([text2[j],i,j])
            prev_i = i
            prev_j = j
            i+=1
            //j+=1
        }else{
            //console.log(i+"----------------"+j)
            i++
        }
        
        if(i>text1.length){
            //console.log("----------------")
            i=0
            j+=1
        }
        
        if(temp>= 1000){
            return "Break"
        }
        temp++ 
    }
    /* for(let x=0;x<arr_obj1.length-1;x++){
        if(arr_obj1[x][1] < arr_obj1[x+1][1]){
            console.log("Final:"+arr_obj1[x] + "||" +arr_obj1[x+1])
        }
    } */
    let x=0;
    let y=0;
    let totaln = 0
    let lenAr = arr_obj2.length
    while(x<lenAr){
        //console.log("Loop:"+x)
        if(x != y){
            
            console.log("y: " +y)
            console.log("x: " +x)
            
            if(y<lenAr){
                if(arr_obj2[x][2] < arr_obj2[y][2] && arr_obj2[x][1] < arr_obj2[y][1]){
                    totaln+=1
                }
                y++
                
            }else{
                console.log("Total: " +totaln)
                totaln = 0
                y=0
                x++
                //debugger
            }
            
        }else{
            if(x==lenAr){
                return arr_obj2
            }
            y++
        }
        
    }
    return arr_obj2
};

str1 = "dbca" //bdcagkbcadc bl bsbininm abcde abc ezupkr oxcpqrsvwf
str2 = "bdcagkbcadc" //dbca yby psnw jmjkbkjkv bicceg ace def ubmrapg shmtulqrypy mnnpsnw
console.log(longestCommonSubsequence(str1,str2))


let arr_obj1 = []
let arr_obj2 = []
var longestCommonSubsequence = function(text1, text2) {
    let j=0
    let i=0
    let prev_i = 0
    let prev_j = 0
    let temp = 0
    

    /* if(text1.length<text2.length){
        let temptxt = ""
        temptxt = text1
        text1 = text2
        text2 = temptxt
    } */

    while(j<text2.length){
        if(text2[j]==text1[i]){
            if(prev_i>i || prev_j>j){
                //console.log("prev" + prev_i)
                //console.log("Deleted="+ text1[prev_i])
                arr_obj1.push([text2[j],i])
            }else{
                
            }
            //console.log("i="+i+" || j="+j)
            
            
            arr_obj2.push([text2[j],i,j])
            prev_i = i
            prev_j = j
            i+=1
            //j+=1
        }else{
            //console.log(i+"----------------"+j)
            i++
        }
        
        if(i>text1.length){
            //console.log("----------------")
            i=0
            j+=1
        }
        
        if(temp>= 1000){
            return "Break"
        }
        temp++ 
    }
    /* for(let x=0;x<arr_obj1.length-1;x++){
        if(arr_obj1[x][1] < arr_obj1[x+1][1]){
            console.log("Final:"+arr_obj1[x] + "||" +arr_obj1[x+1])
        }
    } */
    let x=0;
    let y=0;
    let totaln = 0
    let lenAr = arr_obj2.length
    while(x<lenAr){
        //console.log("Loop:"+x)
        if(x != y){
            
            console.log("y: " +y)
            console.log("x: " +x)
            
            if(y<lenAr){
                if(arr_obj2[x][2] < arr_obj2[y][2] && arr_obj2[x][1] < arr_obj2[y][1]){
                    totaln+=1
                }
                y++
                
            }else{
                console.log("Total: " +totaln)
                totaln = 0
                y=0
                x++
                //debugger
            }
            
        }else{
            if(x==lenAr){
                return arr_obj2
            }
            y++
        }
        
    }
    return arr_obj2
};

str1 = "dbca" //bdcagkbcadc bl bsbininm abcde abc ezupkr oxcpqrsvwf
str2 = "bdcagkbcadc" //dbca yby psnw jmjkbkjkv bicceg ace def ubmrapg shmtulqrypy mnnpsnw
console.log(longestCommonSubsequence(str1,str2))