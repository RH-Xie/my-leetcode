/*
 * @lc app=leetcode.cn id=188 lang=typescript
 *
 * [188] 买卖股票的最佳时机 IV
 */

// @lc code=start
function maxProfit(k: number, prices: number[]): number {
  let n: number = prices.length;
  if (n <= 0) {
    return 0;
}
  if(k > n / 2) { 
    // 就像4天顶多只能进行2次交易一样，不可能是3次甚至4次，这种算作k = Infinity了
    // 不过注意，题目给的就是k < n/2，所以这些其实可以不要
    maxProfit_infinity(prices);
  }
  let dp :number[][][] = new Array(n);
  // 初始化k = 0的情况
  for(let i = 0; i < n; i++) {
    dp[i] = new Array(k + 1);
    for(let j = 0; j <= k; j++) {
      dp[i][j] = new Array(2); 
    }
    dp[i][0][0] = 0,
    dp[i][0][1] = -Infinity;
  }
  for (let i = 0; i < n; i++) {
      // 这里为何是j = k而非j = k - 1？
      // 其实是因为本质上需要多一次（k + 1）记录
      // 多一次是记录剩余交易次数k时的情况
      // （你说是0时也没问题，头尾都要存）
      for(let j = k; j > 0; j--) {
        if (i - 1 == -1) {
          // 处理 i = -1 时的 base case
          dp[i][j][0] = 0;
          dp[i][j][1] = -prices[i];
          continue;
        }
        dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i - 1][j][1] + prices[i]);
        dp[i][j][1] = Math.max(dp[i - 1][j][1], dp[i - 1][j - 1][0] - prices[i]);
      // 为何dp[i - 1][j - 1][0]不是undefined？你看i，i是递增的
      // 所以这时候dp[i - 1][...][...]必然已经算好了
      // 这也解释了昨天为什么“小范围内颠倒顺序也可以”
      // 因为依赖的不是本回合循环的数据，所以顺序当然是不会影响结果的。 
      }
  }
  // 注意了哈，有k的地方，都是多一次的，所以这里是k不是k-1，之前就在这栽跟头。
  return dp[n - 1][k][0];
};

function maxProfit_infinity(prices: number[]): number {
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

