/*
 * @lc app=leetcode.cn id=567 lang=typescript
 *
 * [567] 字符串的排列
 */

// @lc code=start
function checkInclusion(s1: string, s2: string): boolean {
    // 整体思路是收集valid，左右滑动窗口，找到是否有长度相同下的排列
    // 本次收缩的原因是需要找到与s1长度一样的排列，如果长度不限那就不需要收缩了
    let need: Map<string, number> = new Map<string, number>();
    let window: Map<string, number> = new Map<string, number>();
    for (let c of s1) {
        need.set(c, (need.get(c) || 0) + 1);
    }
    let valid = 0;
    let left = 0,
        right = 0;
    while (right < s2.length) {
        let c: string = s2.charAt(right);
        right++;
        if (need.has(c)) {
            window.set(c, (window.get(c) || 0) + 1);
            if (window.get(c) === need.get(c)) {
                valid++;
            }
        }
        // 注意大小、数量关系，right - left == 2时
        // right其实已经在第三格，如果用>，那么right要再走一步，第四格
        // 此时已经超出s1.length了，窗口太长
        // 导致99/107（也就是示例 2）的boa被认为是合法的
        while (right - left >= s1.length) {
            if (valid === need.size) {
                // 全找到了
                return true;
            }
            let d: string = s2.charAt(left);
            left++;
            if (need.has(d)) {
                if (window.get(d) === need.get(d)) {
                    valid--;
                }
                window.set(d, window.get(d) - 1);
            }
        }
    }
    return false;
}
// @lc code=end
