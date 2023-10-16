// 1. Two Sum Leetcode

const nums = [2,7,11,15]
const target = 13

var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums.length;j++){
            if(i != j && nums[i]+nums[j] == target){
                let arrVal = []
                arrVal.push(i)
                arrVal.push(j)
                return arrVal
            }
        }
    }
};
console.log(twoSum(nums, target))