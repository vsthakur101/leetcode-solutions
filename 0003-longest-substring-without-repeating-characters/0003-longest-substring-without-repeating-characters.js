/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let seen = new Set();
    let currSum = 0;
    let maxSum = 0;
    let left = 0;

    for(let i = 0; i < s.length; i++){
        while(seen.has(s[i])){
            seen.delete(s[left]);
            currSum -= 1;
            left++;
        }
        seen.add(s[i]);
        currSum += 1;
        maxSum = Math.max(currSum, maxSum);
    }
    return maxSum;
};