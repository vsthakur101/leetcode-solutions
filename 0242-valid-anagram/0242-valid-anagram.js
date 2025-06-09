/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length)
        return false;
    let map = new Map();
    for (let char= 0; char < s.length; char++) {
        map.set(s[char], (map.get(s[char]) || 0) + 1);
        map.set(t[char], (map.get(t[char]) || 0) - 1)
    }
    for (let i=0; i < s.length; i++) {
        if (map.get(s[i]) > 0 ) {
            return false
        }
    }
    return true
};