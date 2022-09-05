/*
 * @lc app=leetcode.cn id=58 lang=typescript
 *
 * [58] 最后一个单词的长度
 */
// @lc code=start
function lengthOfLastWord(s) {
    let index = s.length - 1;
    while (s[index] === ' ' && index >= 0) {
        index--;
    }
    let end = index;
    while (s[index] !== ' ' && index >= 0) {
        index--;
    }
    let start = index;
    return end - start;
}
;
// @lc code=end
