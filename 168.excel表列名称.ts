/*
 * @lc app=leetcode.cn id=168 lang=typescript
 *
 * [168] Excel表列名称
 */

// @lc code=start
function convertToTitle(columnNumber: number): string {
  let result = '';
  while(columnNumber > 0) {
    columnNumber--;
    result = String.fromCharCode(65 + columnNumber % 26) + result;
    columnNumber = Math.floor(columnNumber / 26);
  }
  return result;
};
// @lc code=end

