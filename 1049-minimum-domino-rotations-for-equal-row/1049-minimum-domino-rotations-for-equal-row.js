/**
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 */
var minDominoRotations = function (tops, bottoms) {
    const n = tops.length;

    const check = (target) => {
        let topSwaps = 0, bottomSwaps = 0;

        for (let i = 0; i < n; i++) {
            if (tops[i] !== target && bottoms[i] !== target) {
                return Infinity; // not possible
            }
            if (tops[i] !== target) topSwaps++;
            if (bottoms[i] !== target) bottomSwaps++;
        }

        return Math.min(topSwaps, bottomSwaps);
    }

    const rotations = Math.min(
        check(tops[0]),
        check(bottoms[0])
    );

    return rotations === Infinity ? -1 : rotations;
};