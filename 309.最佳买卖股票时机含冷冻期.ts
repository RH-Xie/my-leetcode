/*
 * @lc app=leetcode.cn id=309 lang=typescript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  // TODO: 这个算法我暂时无法理解，是怎么化简为一个dp_pre_0的
  let n = prices.length;
  let dp_i_0 = 0, dp_i_1 = -Infinity;
  let dp_pre_0 = 0;
  for(let i = 0; i < n; i++) {
    let temp = dp_i_0; 
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
    dp_i_1 = Math.max(dp_i_1, dp_pre_0 - prices[i]);
    dp_pre_0 = temp;
  }
  return dp_i_0;
};
// @lc code=end

