/*
 * @lc app=leetcode.cn id=509 lang=typescript
 *
 * [509] 斐波那契数
 */

// @lc code=start
function fib(n: number): number {
  if(n == 0 || n == 1) return n;
  let dp_1 = 1, dp_2 = 0;
  for(let i = 2; i <= n; i++) {
    // dp[i] = dp[i - 1] + dp[i - 2];
    let dp = dp_1 + dp_2;
    dp_2 = dp_1;
    dp_1 = dp; // For last calculation dp_1 is also the result.
  }
  return dp_1;
};
// @lc code=end

