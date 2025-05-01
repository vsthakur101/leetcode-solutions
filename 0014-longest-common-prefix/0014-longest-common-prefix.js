/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (!strs.length) return "";

    let minLen = Math.min(...strs.map(s => s.length));

    let low = 1, high = minLen;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let prefix = strs[0].slice(0, mid);

        if (strs.every(s => s.startsWith(prefix))) {
            low = mid + 1; // try longer prefix
        } else {
            high = mid - 1; // try shorter prefix
        }
    }

    return strs[0].slice(0, Math.floor((low + high) / 2));
};