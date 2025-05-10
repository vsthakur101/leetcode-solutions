/*
Given two numbers N and M, find the Nth root of M. The Nth root of a number M is defined as a number X such that when X is raised to the power of N, it equals M. If the Nth root is not an integer, return -1.


Examples:
Input: N = 3, M = 27

Output: 3

Explanation: The cube root of 27 is equal to 3.

Input: N = 4, M = 69

Output:-1

Explanation: The 4th root of 69 does not exist. So, the answer is -1.

Input: N = 4, M = 81

Output:
1
*/

class Solution {
    NthRoot(n, m) {
        let low = 1;
        let high = m;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            let power = Math.pow(mid, n);

            if (power === m) return mid;
            if (power < m) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return -1; // No integer root found
    }
}
// Example usage:
const solution = new Solution();
console.log(solution.NthRoot(3, 27)); // Output: 3
console.log(solution.NthRoot(4, 69)); // Output: -1
console.log(solution.NthRoot(4, 81)); // Output: 3
console.log(solution.NthRoot(2, 16)); // Output: 4  