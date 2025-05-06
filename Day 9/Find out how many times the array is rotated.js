/*
Given an integer array nums of size n, sorted in ascending order with distinct values. The array has been right rotated an unknown number of times, between 1 and n. Determine the number of rotations performed on the array.


Examples:
Input : nums = [4, 5, 6, 7, 0, 1, 2, 3]

Output: 4

Explanation: The original array should be [0, 1, 2, 3, 4, 5, 6, 7]. So, we can notice that the array has been rotated 4 times.

Input: nums = [3, 4, 5, 1, 2]

Output: 3

Explanation: The original array should be [1, 2, 3, 4, 5]. So, we can notice that the array has been rotated 3 times.

Input: nums = [4, 5, 1, 2]

Output:
1
*/

class Solution {
    findKRotation(nums) {
        let low = 0;
        let high = nums.length - 1;

        while (low < high) {
            let mid = Math.floor((low + high) / 2);

            // If middle element is greater than the last element,
            // rotation point is to the right of mid
            if (nums[mid] > nums[high]) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }

        // 'low' now points to the smallest element
        return low;
    }
}

// Example usage
const solution = new Solution();
const nums1 = [4, 5, 6, 7, 0, 1, 2, 3];
const nums2 = [3, 4, 5, 1, 2];
const nums3 = [4, 5, 1, 2];
console.log(solution.findKRotation(nums1)); // Output: 4
console.log(solution.findKRotation(nums2)); // Output: 3
console.log(solution.findKRotation(nums3)); // Output: 1
