/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function(nums) {
    let maxSum = 0;
    let currSum = 0;
    let left = 0;
    let seen = new Set();
    for(let right = 0; right < nums.length; right++){
        while(seen.has(nums[right])){
            seen.delete(nums[left]);
            currSum -= nums[left];
            left++;
        }
        seen.add(nums[right]);
        currSum += nums[right];
        maxSum = Math.max(currSum, maxSum);
    }
    return maxSum
};