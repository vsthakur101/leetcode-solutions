/*
Given an integer array nums of size N, sorted in ascending order with distinct values, and then rotated an unknown number of times (between 1 and N), find the minimum element in the array.


Examples:
Input : nums = [4, 5, 6, 7, 0, 1, 2, 3]

Output: 0

Explanation: Here, the element 0 is the minimum element in the array.

Input : nums = [3, 4, 5, 1, 2]

Output: 1

Explanation:Here, the element 1 is the minimum element in the array.

Input : nums = [4, 5, 6, 7, -7, 1, 2, 3]

Output:
2

*/

class Solution {
    findMin(arr) {
      let low = 0, high = arr.length - 1;
      let min = Infinity;
      while(low <= high){
        let mid = Math.floor((low+high) / 2);
        if(arr[low] <= arr[mid]){
          min = Math.min(min, arr[low]);
          low = mid + 1
        }else{
          min = Math.min(min, arr[mid]);
          high = mid - 1;
        }
      }
      return min;
    }
}
// Example usage:
const nums = [4, 5, 6, 7, 0, 1, 2, 3];
const solution = new Solution();
const minElement = solution.findMin(nums);
console.log(minElement); // Output: 0