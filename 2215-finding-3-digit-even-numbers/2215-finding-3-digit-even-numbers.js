/**
 * @param {number[]} digits
 * @return {number[]}
 */
function findEvenNumbers(digits) {
    const result = new Set();
    const freq = new Array(10).fill(0);

    // Count frequency of each digit
    for (const d of digits) freq[d]++;

    // Try all 3-digit numbers
    for (let num = 100; num <= 999; num++) {
        if (num % 2 !== 0) continue; // must be even

        const tempFreq = [...freq];
        const a = Math.floor(num / 100);
        const b = Math.floor((num % 100) / 10);
        const c = num % 10;

        // Try to form num with digits from array
        if (--tempFreq[a] >= 0 && --tempFreq[b] >= 0 && --tempFreq[c] >= 0) {
            result.add(num);
        }
    }

    return [...result].sort((a, b) => a - b);
}