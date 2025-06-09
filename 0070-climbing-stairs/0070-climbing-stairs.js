/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function(n) {
    if (n === 0 || n === 1) return 1;

    let noOfWays = new Array(n + 1);
    noOfWays[0] = 1;
    noOfWays[1] = 1;

    for (let i = 2; i <= n; i++) {
        noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
    }

    return noOfWays[n];
};