/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function(digits) {
  const result = [];
  const repeats = new Array(10).fill(0);

  // Count each digit's frequency
  for (const digit of digits) {
    repeats[digit]++;
  }

  // Try every 3-digit even number
  for (let i = 100; i <= 999; i += 2) {
    const hundreds = Math.floor(i / 100);
    const tens = Math.floor((i % 100) / 10);
    const ones = i % 10;

    const temp = [...repeats];
    temp[hundreds]--;
    temp[tens]--;
    temp[ones]--;

    if (temp[hundreds] >= 0 && temp[tens] >= 0 && temp[ones] >= 0) {
      result.push(i);
    }
  }

  return result;
};
