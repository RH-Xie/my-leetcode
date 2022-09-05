/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */
// @lc code=start
function longestCommonPrefix(strs) {
    const lens = strs.map(str => str.length);
    const minLen = Math.min(...lens);
    const minStr = strs[lens.indexOf(minLen)];
    let result = '';
    const getMin = (minS) => {
        if (strs.every(str => str.startsWith(minS))) {
            return (result = minS); // 递归调用，越调越短，直到满足条件
        }
        else {
            getMin(minS.slice(0, -1));
        }
        return result;
    };
    return getMin(minStr);
}
console.log(longestCommonPrefix(["abb", "abc"]));
// @lc code=end
