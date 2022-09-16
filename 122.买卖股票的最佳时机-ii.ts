/*
 * @lc app=leetcode.cn id=122 lang=typescript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let n = prices.length;
  let dp_i_0 = 0, dp_i_1 = -Infinity;
  for(let i = 0; i < n; i++) {
    let temp = dp_i_0; // 存下本金，这回就有本金这东西了，但是不限购次数
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
    dp_i_1 = Math.max(dp_i_1, temp - prices[i]);

  }
  return dp_i_0;
};
// @lc code=end

