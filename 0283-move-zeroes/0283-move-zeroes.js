/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if(nums.length <= 1) return nums;
    let slow = 0;
    let fast = 1;
    while(slow < fast && fast < nums.length){
        if(nums[slow] === 0 && nums[fast] !== 0){
            [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
            slow++;
            fast++;
        } else if(nums[slow] === 0 && nums[fast] === 0){
            fast++;
        } else {
            slow++;
            fast++;
        }
    }
    return nums
};