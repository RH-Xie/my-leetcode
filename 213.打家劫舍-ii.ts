/*
 * @lc app=leetcode.cn id=213 lang=typescript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
// 环形的情况下，可偷的房子少了一个（要么不偷最后那个，要么不偷开始那个，而之前可以都偷）
// 首位都不偷的话选择再少一个，所以和这一题不是同类
function rob(nums: number[]): number {
    if (!nums.length) return 0;
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1]);
    return Math.max(limit(nums.slice(1)), limit(nums.slice(0, -1)));
}

function limit(nums: number[]): number {
    let dp = [];
    let max = 0;
    if (!nums.length) return 0;
    if (nums.length < 2) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1]);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    // dp[1] = nums[1]; // 注意，[2,1,1,2]这种情况就说明了，dp[1]不一定要偷，偷dp[0]仍有可能是最高的
    // 第一次做错在定了dp[0] dp[1]从dp[2]开始，没有考虑dp[1]也是要判断偷不偷的
    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2]);
        console.log(dp[i]);
        max = Math.max(max, dp[i]);
    }
    return max;
}
// @lc code=end
