/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let vowels = 'aeiou';
    let maxNum = 0;
    let maxWindowNum = 0;

    for(let i = 0; i < k; i++){
        if(vowels.includes(s[i])){
            maxWindowNum++;
        }
    }
    maxNum = maxWindowNum;

    for(let i = k; i < s.length; i++){
        if (vowels.includes(s[i])) maxWindowNum++;
        if (vowels.includes(s[i - k])) maxWindowNum--;
        maxNum = Math.max(maxNum, maxWindowNum);
    }
    return maxNum
};