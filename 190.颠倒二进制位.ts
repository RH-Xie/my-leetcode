/*
 * @lc app=leetcode.cn id=190 lang=typescript
 *
 * [190] 颠倒二进制位
 */

// @lc code=start
function reverseBits(n: number): number {
    let res = 0;
    for(let i = 0; i < 32; i++) {
        res = (res << 1) + (n & 1);
        n = n >> 1;
    }
    return res >>> 0;
};
// @lc code=end

