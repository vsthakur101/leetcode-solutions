/*

Given a sorted array of nums and an integer x, write a program to find the upper bound of x. The upper bound algorithm finds the first or the smallest index in a sorted array where the value at that index is greater than a given key i.e. x.

If no such index is found, return the size of the array.


Examples:
Input : n= 4, nums = [1,2,2,3], x = 2

Output:3

Explanation: Index 3 is the smallest index such that arr[3] > x.

Input : n = 5, nums = [3,5,8,15,19], x = 9

Output: 3

Explanation: Index 3 is the smallest index such that arr[3] > x.


*/

function upperBound(nums, x) {
    let low = 0, high = nums.length - 1;
    let ans = nums.length;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        /* Check if mid element 
           is a potential answer */
        if (nums[mid] > x) {
            ans = mid;

            // Search left half
            high = mid - 1;
        } 
        else {
            // Search right half
            low = mid + 1;
        }
    }
    return ans;
}

// Example usage:
const nums = [1, 2, 2, 3];
const x = 2;
const result = upperBound(nums, x);
console.log(result); // Output: 3