/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minSum = function (nums1, nums2) {
    let sum1 = 0, zero1 = 0;
    let sum2 = 0, zero2 = 0;

    for (let num of nums1) {
        if (num === 0) zero1++;
        else sum1 += num;
    }

    for (let num of nums2) {
        if (num === 0) zero2++;
        else sum2 += num;
    }

    // Minimum sums possible after replacing 0s with 1
    let min1 = sum1 + zero1;
    let min2 = sum2 + zero2;

    // Check if it's even possible to make them equal
    if (min1 > min2 && zero2 === 0 || min2 > min1 && zero1 === 0){
            return -1
    }

    // Minimum equal sum will be the larger of the two "minimums"
    return Math.max(min1, min2);
};
