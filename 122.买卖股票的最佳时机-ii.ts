/*
 * @lc app=leetcode.cn id=122 lang=typescript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let n = prices.length;
  let dp_i_0 = 0, dp_i_1 = -Infinity;
  // 如果说可以进行无数次交易，那是否会造成死循环？
  // 答：不会，今日必须进行一次且仅一次选择（咱们只写了一个for循环）
  // 而不会不断地在一天内买入卖出，只是没有“买入前必须卖出上一次的”
  for(let i = 0; i < n; i++) {
    let temp = dp_i_0; // 存下本金，这回就有本金这东西了，但是不限购次数
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
    dp_i_1 = Math.max(dp_i_1, temp - prices[i]);

  }
  return dp_i_0;
};
// @lc code=end

