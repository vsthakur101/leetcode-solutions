/* 

Given a sorted array of nums and an integer x, write a program to find the lower bound of x. The lower bound algorithm finds the first or the smallest index in a sorted array where the value at that index is greater than or equal to a given key i.e. x.

If no such index is found, return the size of the array.


Examples:
-> Input : nums= [1,2,2,3], x = 2

Output:1

Explanation: Index 1 is the smallest index such that arr[1] >= x.

-> Input : nums= [3,5,8,15,19], x = 9

Output: 3

Explanation: Index 3 is the smallest index such that arr[3] >= x.

-> Input : nums= [3,5,8,15,19], x = 3

Output: 3

Constraints:
  1 <= nums.length <= 105
  -105 < nums[i], x < 105
  nums is sorted in ascending order.

*/


// Approach: Brute Force
class Solution {
    lowerBound(nums, x) {
      for(let i = 0; i < nums.length; i++){
        if(nums[i] >= x){
            return i
        }
      }
      return nums.length;
    }
}

// Approach: Optimal (Binary Search)

class Solution2 {
    // Function to find the lower bound
    lowerBound(nums, x) {
        let low = 0, high = nums.length - 1;
        let ans = nums.length;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);

            if (nums[mid] >= x) {
                ans = mid;
                high = mid - 1;
            } 
            else {
                low = mid + 1;
            }
        }
        return ans;
    }
}