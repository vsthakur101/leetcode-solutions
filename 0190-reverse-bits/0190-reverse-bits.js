/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function (n) {
    let bin = n.toString(2).padStart(32, "0");
    let rev = bin.split("").reverse().join("");
    return parseInt(rev, 2);
};