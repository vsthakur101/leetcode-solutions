/*
Given n roses and an array nums where nums[i] denotes that the 'ith' rose will bloom on the nums[i]th day, only adjacent bloomed roses can be picked to make a bouquet. Exactly k adjacent bloomed roses are required to make a single bouquet. Find the minimum number of days required to make at least m bouquets, each containing k roses. Return -1 if it is not possible.


Examples:
Input: n = 8, nums = [7, 7, 7, 7, 13, 11, 12, 7], m = 2, k = 3

Output: 12

Explanation: On the 12th the first 4 flowers and the last 3 flowers would have already bloomed. So, we can easily make 2 bouquets, one with the first 3 and another with the last 3 flowers.

Input: n = 5, nums = [1, 10, 3, 10, 2], m = 3, k = 2

Output: -1

Explanation: If we want to make 3 bouquets of 2 flowers each, we need at least 6 flowers. But we are given only 5 flowers, so, we cannot make the bouquets.
*/

class Solution {
    canMake(day, nums, k, m) {
        let flowers = 0;
        let bouquets = 0;
        for (let num of nums) {
            if (num <= day) {
                flowers++;
                if (flowers >= k) {
                    bouquets++;
                    flowers = 0;
                }
            } else {
                flowers = 0;
            }
        }
        return bouquets >= m;
    }
    roseGarden(n, nums, k, m) {
        if (n < m * k) return -1;

        let low = Math.min(...nums);
        let high = Math.max(...nums);
        let result = -1;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (this.canMake(mid, nums, k, m)) {
                result = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return result;
    }
}

// Example usage:
const solution = new Solution();
const n = 8;
const nums = [7, 7, 7, 7, 13, 11, 12, 7];
const m = 2;
const k = 3;
const result = solution.roseGarden(n, nums, k, m);
console.log(result); // Output: 12