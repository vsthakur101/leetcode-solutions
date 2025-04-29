/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (nums, k) {
    // Find Max Num
    const maxNum = Math.max(...nums);
    let left = 0;
    let countMax = 0; // How many maxNum inside window
    let result = 0;
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === maxNum) {
            countMax++;
        }
        // Shrink window until countMax >= k
        while (countMax >= k) {
            if (nums[left] === maxNum) {
                countMax--;
            }
            left++;
        }

        // Now all subarrays ending at right and starting before left are valid
        result += left;
    }
    return result;

};