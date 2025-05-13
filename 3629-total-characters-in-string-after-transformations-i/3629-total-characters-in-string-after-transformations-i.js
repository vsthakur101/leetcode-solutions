/**
 * @param {string} s
 * @param {number} t
 * @return {number}
 */
var lengthAfterTransformations = function (s, t) {
    const MOD = 1e9 + 7;
    const dp = new Array(26).fill(0);

    // Step 1: Count letters
    for (let c of s) {
        dp[c.charCodeAt(0) - 97]++;
    }

    // Step 2: Perform t transformations
    for (let step = 0; step < t; step++) {
        const next = new Array(26).fill(0);

        for (let i = 0; i < 26; i++) {
            if (i === 25) { // 'z'
                next[0] = (next[0] + dp[25]) % MOD;
                next[1] = (next[1] + dp[25]) % MOD;
            } else {
                next[i + 1] = (next[i + 1] + dp[i]) % MOD;
            }
        }

        // update for next round
        for (let i = 0; i < 26; i++) {
            dp[i] = next[i];
        }
    }

    // Step 3: Sum final string length
    return dp.reduce((a, b) => (a + b) % MOD, 0);
};
