/**
 * @param {string} s
 * @return {string}
 */
var robotWithString = function(s) {
    const n = s.length;
    const result = [];
    const stack = [];

    const minFromRight = new Array(n);
    minFromRight[n - 1] = s[n - 1];

    for (let i = n - 2; i >= 0; i--) {
        minFromRight[i] = s[i] < minFromRight[i + 1] ? s[i] : minFromRight[i + 1];
    }

    for (let i = 0; i < n; i++) {
        stack.push(s[i]);

        while (
            stack.length > 0 &&
            (i === n - 1 || stack[stack.length - 1] <= minFromRight[i + 1])
        ) {
            result.push(stack.pop());
        }
    }

    return result.join('');
};