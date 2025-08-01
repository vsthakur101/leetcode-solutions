/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let init = prices[0];
    let res = 0;

    for (let i = 1; i < prices.length; i++) {
        if (init > prices[i]) {
            init = prices[i];
        }

        res = Math.max(res, prices[i] - init);
    }

    return res;
};