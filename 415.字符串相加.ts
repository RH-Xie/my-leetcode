/*
 * @lc app=leetcode.cn id=415 lang=typescript
 *
 * [415] 字符串相加
 */

// @lc code=start
function addStrings(num1: string, num2: string): string {
    let carry = false;
    let min_len = Math.min(num1.length, num2.length);
    let res = "";
    let i, j;
    for (i = num1.length - 1, j = num2.length - 1; i > -1 && j > -1; i--, j--) {
        let temp = parseInt(num1[i]) + parseInt(num2[j]) + (carry ? 1 : 0);
        carry = temp > 9;
        res += temp %= 10;
    }
    console.log("res", res);
    let left = num1.length > num2.length ? num1 : num2;

    for (let index = i === -1 ? j : i; index > -1; index--) {
        let temp = parseInt(left[index]) + (carry ? 1 : 0);
        carry = temp > 9;
        res += temp %= 10;
    }
    if (carry) {
        res += "1";
    }
    console.log("res", res);
    return res.split("").reverse().join("");
}

addStrings("123", "1129");
// @lc code=end
