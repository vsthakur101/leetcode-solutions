/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let last = s.length - 1;
    let first = 0;
    while (first < last) {
        let temp = s[first];
        s[first] = s[last]
        s[last] = temp;
        last--;
        first++
    }
    return s
};