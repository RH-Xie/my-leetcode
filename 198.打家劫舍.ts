/*
 * @lc app=leetcode.cn id=198 lang=typescript
 *
 * [198] 打家劫舍
 */

// @lc code=start
function rob(nums: number[]): number {
    let dp = [];
    let max = 0;
    if (!nums.length) return 0;
    if (nums.length < 2) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1]);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    // dp[1] = nums[1]; // 注意，[2,1,1,2]这种情况就说明了，dp[1]不一定要偷，投dp[0]仍有可能是最高的
    // 第一次做错在定了dp[0] dp[1]从dp[2]开始，没有考虑dp[1]也是要判断偷不偷的
    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2]);
        console.log(dp[i]);
        max = Math.max(max, dp[i]);
    }
    return max;
}

// console.log(rob([2, 1, 1, 2]));
// @lc code=end
