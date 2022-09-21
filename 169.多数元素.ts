/*
 * @lc app=leetcode.cn id=169 lang=typescript
 *
 * [169] 多数元素
 */

// @lc code=start
function majorityElement(nums: number[]): number {
  let target = 0;
  let count = 0;
  for(let i = 0; i < nums.length; i++) {
    if(count === 0) {
      target = nums[i];
      count = 1;
    }
    else if(nums[i] === target) {
      count++;
    }
    else {
      count--;
    }
  }
  return target;
};
// @lc code=end

