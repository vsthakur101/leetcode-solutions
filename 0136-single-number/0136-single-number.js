/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let n = nums.length;
    if(n < 2) return nums[0]
    let result = nums[0]
    for(let i = 1; i < n; i++){
        result ^= nums[i]
    }
    return result;
};