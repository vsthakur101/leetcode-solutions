/*
Given an integer array nums, sorted in ascending order (may contain duplicate values) and a target value k. Now the array is rotated at some pivot point unknown to you. Return True if k is present and otherwise, return False.


Examples:
Input : nums = [7, 8, 1, 2, 3, 3, 3, 4, 5, 6], k = 3

Output: True

Explanation: The element 3 is present in the array. So, the answer is True.

Input : nums = [7, 8, 1, 2, 3, 3, 3, 4, 5, 6], k = 10

Output: False

Explanation:The element 10 is not present in the array. So, the answer is False.

Input : nums = [7, 8, 1, 2, 3, 3, 3, 4, 5, 6], k = 7

Output:
1

*/

class Solution {
    searchInARotatedSortedArrayII(nums, k) {
      let low = 0;
      let high = nums.length - 1;
  
      while (low <= high) {
        let mid = Math.floor((low + high) / 2);
  
        if (nums[mid] === k) return true;
  
        // If duplicates are at the edges
        if (nums[low] === nums[mid] && nums[mid] === nums[high]) {
          low++;
          high--;
        }
        // Left half is sorted
        else if (nums[low] <= nums[mid]) {
          if (nums[low] <= k && k < nums[mid]) {
            high = mid - 1;
          } else {
            low = mid + 1;
          }
        }
        // Right half is sorted
        else {
          if (nums[mid] < k && k <= nums[high]) {
            low = mid + 1;
          } else {
            high = mid - 1;
          }
        }
      }
  
      return false;
    }
  }

// Example usage:
const solution = new Solution();
const nums = [7, 8, 1, 2, 3, 3, 3, 4, 5, 6];
const k1 = 3;
const k2 = 10;
const k3 = 7;
console.log(solution.searchInARotatedSortedArrayII(nums, k1)); // Output: true
console.log(solution.searchInARotatedSortedArrayII(nums, k2)); // Output: false
console.log(solution.searchInARotatedSortedArrayII(nums, k3)); // Output: true