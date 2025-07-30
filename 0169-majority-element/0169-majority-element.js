/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0, max = 0
    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            max = nums[i]
            count = 1
        } else if (nums[i] === max) {
            count++
        } else {
            count--
        }
    }
    return max;
};