/*
Given an array of integers nums and an integer limit as the threshold value, find the smallest positive integer divisor such that upon dividing all the elements of the array by this divisor, the sum of the division results is less than or equal to the threshold value.

Each result of the division is rounded up to the nearest integer greater than or equal to that element.


Examples:
Input: nums = [1, 2, 3, 4, 5], limit = 8

Output: 3

Explanation: We can get a sum of 15(1 + 2 + 3 + 4 + 5) if we choose 1 as a divisor. 

The sum is 9(1 + 1 + 2 + 2 + 3) if we choose 2 as a divisor. Upon dividing all the elements of the array by 3, we get 1,1,1,2,2 respectively. Now, their sum is equal to 7 <= 8 i.e. the threshold value. So, 3 is the minimum possible answer.

Input: nums = [8,4,2,3], limit = 10

Output: 2

Explanation: If we choose 1, we get 17 as the sum. If we choose 2, we get 9 (4+2+1+2) <= 10 as the answer. So, 2 is the answer.
*/

class Solution {
    smallestDivisor(nums, limit) {
        let low = 1;
        let high = Math.max(...nums);
        let result = high;

        const computeSum = (divisor) => {
            return nums.reduce((sum, num) => sum + Math.ceil(num / divisor), 0);
        };

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            let sum = computeSum(mid);

            if (sum <= limit) {
                result = mid; // possible answer, try smaller
                high = mid - 1;
            } else {
                low = mid + 1; // sum too large, try bigger divisor
            }
        }

        return result;
    }
}

// Example usage:
const solution = new Solution();
console.log(solution.smallestDivisor([1, 2, 3, 4, 5], 8)); // Output: 3
console.log(solution.smallestDivisor([8, 4, 2, 3], 10)); // Output: 2
console.log(solution.smallestDivisor([1, 2, 3, 4, 5], 15)); // Output: 1
console.log(solution.smallestDivisor([1, 2, 3, 4, 5], 7)); // Output: 3