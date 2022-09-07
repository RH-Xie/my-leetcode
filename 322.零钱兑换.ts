/*
 * @lc app=leetcode.cn id=322 lang=typescript
 *
 * [322] 零钱兑换
 */

// @lc code=start
function coinChange(coins: number[], amount: number): number {
    let dp: number[] = Array(amount + 1);
    dp.fill(amount + 1, 0, dp.length);

    // base case, something like f(1) = 1
    dp[0] = 0;
    for (let i = 0; i < dp.length; i++) {
        coins.forEach((coin) => {
            // return when no solution for subquestion
            if (i - coin < 0) return;
            // Get least coins cost from several solutions.
            dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
        });
    }
    return dp[amount] === amount + 1 ? -1 : dp[amount];
}
// @lc code=end
