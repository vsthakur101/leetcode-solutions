/*
Given an array nums sorted in non-decreasing order. Every number in the array except one appears twice. Find the single number in the array.


Examples:
Input :nums = [1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6]

Output:4

Explanation: Only the number 4 appears once in the array.

Input : nums = [1, 1, 3, 5, 5]

Output:3

Explanation: Only the number 3 appears once in the array.

Input :nums = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7]

Output:
2
*/

class Solution {
    singleNonDuplicate(nums) {
        let low = 0;
        let high = nums.length - 1;

        while (low < high) {
            let mid = Math.floor((low + high) / 2);

            // Ensure mid is even (because pairs start at even index)
            if (mid % 2 === 1) {
                mid--;
            }

            // If the pair is intact, the single number is on the right
            if (nums[mid] === nums[mid + 1]) {
                low = mid + 2;
            } else {
                // Pair is broken → single is on the left
                high = mid;
            }
        }

        return nums[low];
    }
}
// Example usage:
const solution = new Solution();
const nums1 = [1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6];
const result1 = solution.singleNonDuplicate(nums1);
console.log(result1); // Output: 4  