/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

function isPossible(nums, m, max) {
    let s = 1;
    let p = 0;

    for (let num of nums) {
        if (p + num > max) {
            s++;
            p = num;

            if (s > m) return false;
        } else {
            p += num;
        }
    }
    return true;
}
var splitArray = function (nums, k) {
    if (k > nums.length) return -1;

    let low = Math.max(...nums);
    let high = nums.reduce((a, b) => a + b, 0);
    let result = -1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (isPossible(nums, k, mid)) {
            result = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return result;
};