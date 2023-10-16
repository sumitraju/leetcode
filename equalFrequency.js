var equalFrequency = function(word) {
    arr=[[word[0],1]]
    index=0;
    for(i=0;i<word.length;i++){
        for(j=0;j<arr.length;j++){
            if(i!=0){
                if(word[i] == arr[j][0]){
                    arr[j][1] = arr[j][1]+1
                    j=arr.length
                    //console.log("first: " + i + "||" + j)
                }else if(j==arr.length-1){
                    //console.log("second: " + i + "||" + j)
                    arr.push([word[i],1])
                    j=arr.length
                }
            }
        }
    }
    arr2=[[arr[0][1],1]]
    for(i=0;i<arr.length;i++){
        for(j=0;j<arr2.length;j++){
            if(i!=0){
                if(arr[i][1]==arr2[j][0]){
                    arr2[j][1] = arr2[j][1]+1
                    j=arr2.length
                }else if(j==arr2.length-1){
                    arr2.push([arr[i][1],1])
                    j=arr2.length
                }
            }
        }
    }
    //console.log(arr)
    //console.log(arr2)
    if(arr2.length == 2){
        index = null
        index2= null
        if(arr2[0][0] > arr2[1][0]){
            index = 0
            index2 = 1
        }else{
            index = 1
            index2 = 0
        }
       
        if((arr2[index][0]-1==arr2[index2][0] && arr2[index][1]==1)||(arr2[index2][0]-arr2[index2][1]==0)){
            return true
        }else{
            return false
        }
    }else if((arr2.length == 1 && arr2[0][0] == 1 )||(arr2.length == 1 && arr2[0][1] == 1 && arr2[0][0] > 1)){
        return true
    }else{
        return false
    }
    
};

str = "hhhhg"
console.log(equalFrequency(str))
