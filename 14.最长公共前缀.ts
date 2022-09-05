/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  const lens : number[] = strs.map(str => str.length);
  const minLen : number = Math.min(...lens);
  const minStr : string = strs[lens.indexOf(minLen)];
  let result : string = '';
  const getMin = (minS: string) => {
      if(strs.every(str => str.startsWith(minS))) {
          return (result = minS); // 递归调用，越调越短，直到满足条件
      }
      else {
          getMin(minS.slice(0, -1));
      }
      return result;
  }
  return getMin(minStr);
}
console.log(longestCommonPrefix(["abb", "abc"]));
// @lc code=end
