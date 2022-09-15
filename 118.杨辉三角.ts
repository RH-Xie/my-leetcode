/*
 * @lc app=leetcode.cn id=118 lang=typescript
 *
 * [118] 杨辉三角
 */

// @lc code=start
function generate(numRows: number): number[][] {
  if(numRows === 0) return [];
  if(numRows === 1) return [[1]];
  let result: number[][] = [[1], [1, 1]];
  for(let i = 2; i < numRows; i++) {
    let temp = [1];
    for(let j = 1; j < i; j++) {
      temp.push(result[i - 1][j - 1] + result[i - 1][j]);
    }
    temp.push(1);
    result.push(temp);
  }
  return result;
};
// @lc code=end

