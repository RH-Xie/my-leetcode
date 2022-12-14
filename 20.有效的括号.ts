/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
    let arr = [s[0]];
    enum Match {
        "(" = ")",
        "[" = "]",
        "{" = "}",
    }
    for (let i = 1; i < s.length; i++) {
        if (s[i] === Match[arr[arr.length - 1]]) {
            arr.pop();
        } else {
            arr.push(s[i]);
        }
    }
    return arr.length > 0 ? false : true;
}
// @lc code=end
