var removeElement = function(nums, val) {
    let i=0
    while(i<nums.length){
        if(nums[i] == val){
            nums.splice(i,1)
        }else{
            i+=1
        }
    }
    return nums.length
};
let nums = [0,1,2,2,3,0,4,2]

console.log(removeElement(nums,2))

