/**
 * @param {string} s
 * @param {number} t
 * @return {number}
 */
var lengthAfterTransformations = function (s, t) {
    const MOD = 1e9 + 7;

    let dp = new Array(26).fill(0);
    let temp = new Array(26).fill(0);

    for (let c of s) {
        dp[c.charCodeAt(0) - 97]++;
    }

    for (let step = 0; step < t; step++) {
        temp.fill(0); // reuse array instead of creating new one
        for (let i = 0; i < 26; i++) {
            if (i === 25) { // 'z' case
                temp[0] = (temp[0] + dp[25]) % MOD;
                temp[1] = (temp[1] + dp[25]) % MOD;
            } else {
                temp[i + 1] = (temp[i + 1] + dp[i]) % MOD;
            }
        }
        // swap dp and temp
        [dp, temp] = [temp, dp];
    }

    return dp.reduce((sum, count) => (sum + count) % MOD, 0);
};
