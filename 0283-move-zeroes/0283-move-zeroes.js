/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
   let l = 0;

    // Move all non-zero elements forward
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[l++] = nums[i];
        }
    }

    // Fill remaining positions with zeros
    for (let i = l; i < nums.length; i++) {
        nums[i] = 0;
    }
};