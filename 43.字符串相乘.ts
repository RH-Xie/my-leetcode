/*
 * @lc app=leetcode.cn id=43 lang=typescript
 *
 * [43] 字符串相乘
 */

// @lc code=start
function multiply(num1: string, num2: string): string {
    if (num1[0] === "0" || num2[0] === "0") return "0";
    let res = new Array(num1.length + num2.length).fill(0);
    for (var i = num1.length - 1; i >= 0; i--) {
        for (var j = num2.length - 1; j >= 0; j--) {
            var mul = parseInt(num1[i]) * parseInt(num2[j]);
            // 乘积在 res 对应的索引位置
            var p1 = i + j;
            var p2 = i + j + 1;
            // 叠加到 res 上
            var sum = mul + res[p2];
            res[p2] = sum % 10;
            res[p1] += Math.floor(sum / 10); // 这一步其实就是进位
        }
    }
    let str = "";
    i = 0;
    while (res[i] === 0) {
        i++;
    }
    for (; i < res.length; i++) {
        str += res[i];
    }
    return str;
}
// @lc code=end
