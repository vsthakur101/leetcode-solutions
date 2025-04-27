/**
 * @param {number[]} nums
 * @return {number}
 */
var countSubarrays = function(nums) {
let count = 0;
    
    for (let i = 0; i <= nums.length - 3; i++) {
        let a = nums[i];
        let b = nums[i + 1];
        let c = nums[i + 2];
        
        if (b % 2 === 0 && (a + c) === (b / 2)) {
            count++;
        }
    }
    
    return count;
};