/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hashMap = new Map();
    for(let i = 0; i < nums.length; i++){
        const value = nums[i]
        if(!hashMap.has(target - value)){
            hashMap.set(value, i);
        }else{
            return [hashMap.get(target - value), i]
        }
    }
};