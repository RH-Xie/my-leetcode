/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */

// @lc code=start
function climbStairs(n: number): number {
  if(n <= 2) return n;
  let dp_1 = 2, dp_2 = 1;
  for(let i = 3; i <= n; i++) {
    // dp[i] = dp[i - 1] + dp[i - 2];
    let dp = dp_1 + dp_2;
    dp_2 = dp_1;
    dp_1 = dp; // For last calculation dp_1 is also the result.
  }
  return dp_1;
}
// @lc code=end

