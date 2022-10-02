/*
 * @lc app=leetcode.cn id=228 lang=typescript
 *
 * [228] 汇总区间
 */

// @lc code=start
function summaryRanges(nums: number[]): string[] {
  let res : string[] = [];
  let i = 0;
  while (i < nums.length) {
    let j = nums[i];
    while (i < nums.length - 1 && nums[i] + 1 === nums[i + 1]) {
      i++;
    }
    if(nums[i] === j) {
      res.push(`${j}`);
    }
    else {
      res.push(`${j}->${nums[i]}`);
    }
    i++;
  }
  return res;
};
// @lc code=end

