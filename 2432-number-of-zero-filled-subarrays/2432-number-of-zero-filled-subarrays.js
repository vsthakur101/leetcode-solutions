/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    let left = 0;
    let result = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 0){
            left++;
            result += left;
        }else{
            left = 0;
        }
    }
    return result
};