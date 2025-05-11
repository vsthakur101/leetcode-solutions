/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    if(arr.length < 3) return false
    let ans = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 !== 0){
            ans++
        }else{
            ans =0;
        }
        if(ans === 3) return true
    }
    return false;
};