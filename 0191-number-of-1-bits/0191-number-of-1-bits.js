/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let result = 0;
    for(let i = 0; i < 32; i++){
        if((n >> i) & 1){
            result += 1;
        }
    }
    return result;
};