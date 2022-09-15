/*
 * @lc app=leetcode.cn id=119 lang=typescript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
function getRow(rowIndex: number): number[] {
  if(rowIndex === 0) return [1];
  if(rowIndex === 1) return [1, 1];
  let result: number[][] = [[1], [1, 1]];
  for(let i = 2; i <= rowIndex; i++) {
    let temp = [1];
    for(let j = 1; j < i; j++) {
      temp.push(result[i - 1][j - 1] + result[i - 1][j]);
    }
    temp.push(1);
    result.push(temp);
  }
  return result[rowIndex];
};
// @lc code=end

