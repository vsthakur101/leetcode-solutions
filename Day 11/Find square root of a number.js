/*
Given a positive integer n. Find and return its square root. If n is not a perfect square, then return the floor value of sqrt(n).


Examples:
Input: n = 36

Output: 6

Explanation: 6 is the square root of 36.

Input: n = 28

Output: 5

Explanation: The square root of 28 is approximately 5.292. So, the floor value will be 5.

Input: n=50

Output:
3
*/

class Solution {
    /* Function to compute the floor of
       square root of a given integer */
    floorSqrt(n) {
        let low = 1, high = n;

        // Binary search on the answer space
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            let val = mid * mid;

            // Check if val is less than or equal to n
            if (val <= n) {
                // Move to the right part
                low = mid + 1;
            } else {
                // Move to the left part
                high = mid - 1;
            }
        }

        // Return the floor of square root
        return high;
    }
}

// Example usage
let sol = new Solution();
console.log(sol.floorSqrt(36)); // Output: 6
console.log(sol.floorSqrt(28)); // Output: 5
console.log(sol.floorSqrt(50)); // Output: 7
console.log(sol.floorSqrt(0));  // Output: 0
console.log(sol.floorSqrt(1));  // Output: 1