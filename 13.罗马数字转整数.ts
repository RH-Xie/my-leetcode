/*
 * @lc app=leetcode.cn id=13 lang=typescript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
function romanToInt(s: string): number {
  const map = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
  ]);
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const current = map.get(s[i]);
    const next = map.get(s[i + 1]);
    if (next && next > current) {
      result += next - current;
      i++;
    } else {
      result += current;
    }
  }
  return result;
};
// @lc code=end

