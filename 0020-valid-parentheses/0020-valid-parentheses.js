/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length < 2) return false
    let OpenB = [];
    for(let i = 0; i < s.length; i++){
        if(s[i] === ']' && OpenB[OpenB.length - 1] === '['){
            OpenB.pop();
        } else if(s[i] === '}' && OpenB[OpenB.length - 1] === '{'){
            OpenB.pop();
        } else if(s[i] === ')' && OpenB[OpenB.length - 1] === '('){
            OpenB.pop();
        }else {
            OpenB.push(s[i]);
        }
    }
    return OpenB.length ? false : true
};