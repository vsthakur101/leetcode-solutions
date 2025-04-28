/*
Given a sorted array of nums consisting of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.


Examples:
Input: nums = [1, 3, 5, 6], target = 5

Output: 2

Explanation: The target value 5 is found at index 2 in the sorted array. Hence, the function returns 2.

Input: nums = [1, 3, 5, 6], target = 2

Output: 1

Explanation: The target value 2 is not found in the array. However, it should be inserted at index 1 to maintain the sorted order of the array.

*/

function searchInsert(nums, target) {
    for (let i = 0; i <= nums.length; i++) {
        if (nums[i] >= target) {
            return i;
        }
    }
    return nums.length
}

function searchInsertOpti(nums, target) {
    let low = 0, high = nums.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (nums[mid] === target) {
            return mid; // Target found
        } else if (nums[mid] < target) {
            low = mid + 1; // Search right half
        } else {
            high = mid - 1; // Search left half
        }
    }
    return low; // Target not found, return insertion point
}
// Example usage:
const nums = [1, 3, 5, 6];
const target = 2;
const result = searchInsertOpti(nums, target);
console.log(result); // Output: 1