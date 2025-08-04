/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const output = Array(nums.length).fill(1);

    let main = 1;
    for (let i = 0; i < nums.length; i++) {
        output[i] *= main;
        main *= nums[i];
    }

    main = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        output[i] *= main;
        main *= nums[i];
    }

    return output;    
};