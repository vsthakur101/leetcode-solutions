/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let maxOnes = 0;
    let currentOne = 0;
    for(let i =0; i < nums.length; i++){
        if(nums[i] === 1) {
            currentOne += 1;
        } else {
            maxOnes = Math.max(maxOnes, currentOne);
            currentOne = 0;
        }
    }
    return Math.max(maxOnes, currentOne)
};