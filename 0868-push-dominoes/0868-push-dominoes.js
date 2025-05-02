/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function (dominoes) {
    const len = dominoes.length;
    let l = -1;
    let head = 'L';
    let ans = '';

    for (let i = 0; i <= len; i++) {
        const c = dominoes[i] || 'R';

        if (c === '.') {
            if (l === -1) l = i;
        } else {
            if (l !== -1) {
                const r = i - 1;
                const count = r - l + 1;

                if (head === 'L' && c === 'L') {
                    ans += 'L'.repeat(count);
                } else if (head === 'R' && c === 'R') {
                    ans += 'R'.repeat(count);
                } else if (head === 'L' && c === 'R') {
                    ans += '.'.repeat(count);
                } else {
                    const half = Math.floor(count / 2);
                    ans += 'R'.repeat(half);
                    if (count % 2 === 1) ans += '.';
                    ans += 'L'.repeat(half);
                }
                l = -1;
            }
            if (i < len) ans += c;

            head = c;
        }
    }

    return ans;
};