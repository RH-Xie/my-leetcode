/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let n = prices.length;
  let dp_i_0 = 0, dp_i_1 = -Infinity;
  for(let i = 0; i < n; i++) {
    // 今日我未持有，那么昨天可能发生了什么？
    // 1.（rest）昨天我也没持有，所以利润跟昨天一样
    // 2.（sell）昨天我其实有，但我拿去卖掉了，持有由1变0，利润就写在今天里
    // 看看哪个收益高，如果卖掉收益高就卖，如果不卖收益高，那就不卖
    // 这下卖掉，终于有利润了，如果还买第二次，那么这次的利润就是下次的本金
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
    // 今日我持有，那么昨天可能发生了什么？
    // 1.（rest）昨天我也有，不卖，利润跟昨天一样
    // 2.（buy）昨天我没有，好在买了，由0变1，但买是不是要本金？所以剩下余额为本金-prices[i]
    // 然而我们只买一次，也就是第一次，本金肯定为0
    dp_i_1 = Math.max(dp_i_1, -prices[i]);
    // 在这里，我再提个问题：我怎么知道我这次买/卖或是不买/不卖，整体利润是最大的？我都没遍历到后面
    // 也就是说，我在不知道全貌的情况下，怎么做到利益最大化？
    // 哦我理解错了。。实际上dp_i_0一直在更新为最大值，比如一开始是0，到[7,1,5,3,6,4]的5时是4，那么这样最后得到的自然是最大利润了
    // 反而是不记哪一次买入卖出，你可以加点东西记录一下
    // 为什么我只跟昨天的对比，因为最大利润一直跟着更新上来
  }
  return dp_i_0;
};
// @lc code=end

