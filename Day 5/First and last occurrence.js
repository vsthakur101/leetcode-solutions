/*
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value. If the target is not found in the array, return [-1, -1].


Examples:
Input: nums = [5, 7, 7, 8, 8, 10], target = 8

Output: [3, 4]

Explanation:The target is 8, and it appears in the array at indices 3 and 4, so the output is [3,4]

Input: nums = [5, 7, 7, 8, 8, 10], target = 6

Output: [-1, -1]

Expalantion: The target is 6, which is not present in the array. Therefore, the output is [-1, -1].

Input: nums = [5, 7, 7, 8, 8, 10], target = 5

Output:
4

*/

class Solution {
    searchRange(nums, target) {
        function findBound(isFirst) {
            let left = 0;
            let right = nums.length - 1;
            let result = -1;

            while (left <= right) {
                const mid = Math.floor((left + right) / 2);

                if (nums[mid] === target) {
                    result = mid;
                    if (isFirst) {
                        right = mid - 1; // look left
                    } else {
                        left = mid + 1; // look right
                    }
                } else if (nums[mid] < target) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }

            return result;
        }

        const first = findBound(true);
        const last = findBound(false);

        return [first, last];
    }
}
const solution = new Solution();
console.log(solution.searchRange([5, 7, 7, 8, 8, 10], 8)); // Output: [3, 4]
console.log(solution.searchRange([5, 7, 7, 8, 8, 10], 6)); // Output: [-1, -1]
console.log(solution.searchRange([5, 7, 7, 8, 8, 10], 5)); // Output: [0, 0]
console.log(solution.searchRange([5, 7, 7, 8, 8, 10], 10)); // Output: [5, 5]  