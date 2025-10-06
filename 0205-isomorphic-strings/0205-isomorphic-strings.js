/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    if (s.length !== t.length) return false;

    const map = new Map();
    const used = new Set();

    for (let i = 0; i < s.length; i++) {
        const a = s[i], b = t[i];

        if (!map.has(a)) {
            if (used.has(b)) return false;
            map.set(a, b);
            used.add(b);
        } else if (map.get(a) !== b) {
            return false;
        }
    }

    return true;
};