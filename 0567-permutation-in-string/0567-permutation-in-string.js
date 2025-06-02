/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false;

    const aCharCode = 'a'.charCodeAt(0);
    let count1 = new Array(26).fill(0);
    let count2 = new Array(26).fill(0);

    // Step 1: Fill both counts initially
    for (let i = 0; i < s1.length; i++) {
        count1[s1.charCodeAt(i) - aCharCode]++;
        count2[s2.charCodeAt(i) - aCharCode]++;
    }

    // Step 2: Check for match
    let matches = 0;
    for (let i = 0; i < 26; i++) {
        if (count1[i] === count2[i]) matches++;
    }

    // Step 3: Slide window through s2
    let left = 0;
    for (let right = s1.length; right < s2.length; right++) {
        if (matches === 26) return true;

        let indexIn = s2.charCodeAt(right) - aCharCode;
        count2[indexIn]++;
        if (count2[indexIn] === count1[indexIn]) matches++;
        else if (count2[indexIn] === count1[indexIn] + 1) matches--;

        let indexOut = s2.charCodeAt(left) - aCharCode;
        count2[indexOut]--;
        if (count2[indexOut] === count1[indexOut]) matches++;
        else if (count2[indexOut] === count1[indexOut] - 1) matches--;

        left++;
    }

    return matches === 26;
};