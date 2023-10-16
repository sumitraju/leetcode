let nums = [0,0,1,1,1,2,2,3,3,4]


var removeDuplicates = function(nums) {
    if(numCount >= nums.length){
        return nums
    }

    if(nums[numCount] == nums[numCount+1]){
        nums.splice(numCount,1)
    }else{
        numCount+=1
    }
    return removeDuplicates(nums)


};

let numCount = 0

console.log(removeDuplicates(nums))

//Accepted solutions

var removeDuplicates = function(nums) {
    if(nums.length == 0){
        return 0
    }
    let numCount = 0
    for(i=1;i<nums.length;i++){
        if(nums[i] != nums[numCount]){
            numCount +=1
            nums[numCount] = nums[i];
        }
    }
    return numCount +1

};

var removeDuplicates = function(nums) {
    if(nums.length == 0){
        return 0
    }
    let numCount = 0
    let i=1
    while(i<nums.length){
        if(nums[i] != nums[numCount]){
            numCount +=1
            nums[numCount] = nums[i];
        }
        i+=1
    }
    return numCount +1

};

console.log(removeDuplicates(nums))