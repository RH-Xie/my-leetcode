/*
 * @lc app=leetcode.cn id=202 lang=typescript
 *
 * [202] 快乐数
 */

// @lc code=start
function isHappy(n: number): boolean {
  let slow = n, fast = get_happy(n);
  while(slow !== fast) {
    slow = get_happy(slow);
    fast = get_happy(get_happy(fast));
  }
  // 相等之下，只有两种情况
  // 遇到环了 或 都等于1
  return slow === 1;
};

function get_happy(n: number): number {
  let res = 0;
  while(n != 0) {
    let remainder = n % 10; 
    n = Math.floor(n / 10);
    res += remainder ** 2;
  }
  console.log(res);
  return res;
}
// @lc code=end

