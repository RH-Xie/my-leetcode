/*
 * @lc app=leetcode.cn id=123 lang=typescript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
function maxProfit(prices: number[]): number {
    let n: number = prices.length;
    let dp_1_0: number = 0,
        dp_1_1: number = -Infinity;
    let dp_2_0: number = 0,
        dp_2_1: number = -Infinity;
    for (let i = 0; i < n; i++) {
        // 可视作第一次购入（反过来看也有奇效）
        dp_1_0 = Math.max(dp_1_0, dp_1_1 + prices[i]);
        dp_1_1 = Math.max(dp_1_1, -prices[i]); // k = 0时，即一次都不给买，那利润必然为0
        // 第二次购入，不买/不卖也没事，数据跟着第一次的更新
        dp_2_0 = Math.max(dp_2_0, dp_2_1 + prices[i]);
            dp_2_1 = Math.max(dp_2_1, dp_1_0 - prices[i]);
            // 提问：在大范围上，k是“剩余次数”还是“已购次数”，在每次遍历后结果相同可以理解
            // 那么在小范围上，为何dp_1_0和dp_1_1的顺序互换也是可以的？（字面上看两者是存在数据依赖的）
            // 答：这有可能就是“状态机”的神秘之处，运行完了状态都是一致的。
            // 9.17回来补充：其实是依赖问题，
        }
        return dp_2_0;
}
// @lc code=end
