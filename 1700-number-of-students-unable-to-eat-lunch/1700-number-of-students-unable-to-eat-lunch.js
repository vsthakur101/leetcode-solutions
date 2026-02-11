/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    let n = students.length;
    let count0 = 0;
    let count1 = 0;
    for(let student of students){
        if(student === 0) count0++;
        else count1++;
    }
    for(let sandwiche of sandwiches){
        if(sandwiche === 0 && count0 > 0) count0--;
        else if(sandwiche === 1 && count1 > 0) count1--;
        else break;
    } 
    return count0+count1
};