/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = new Map();
    let maxChar = 0;
    let res = 0
    for(let i of nums){
        if(count.has(i)){
            count.set(i, count.get(i)+1)
        }else{
            count.set(i,1)
        }
    }
    for(let [k,v] of count){
      if(v > maxChar){
          maxChar = v;
          res = k
      }
        
    }
    return res
};