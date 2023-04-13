/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
    let window: Map<string, number> = new Map<string, number>();
    let len: number = 0;
    let right: number = 0;
    let left: number = 0;
    let res: number = 0;

    while (right < s.length) {
        let c: string = s.charAt(right);
        right++;
        window.set(c, (window.get(c) || 0) + 1);
        while (window.get(c) > 1) {
            let d: string = s.charAt(left);
            left++;
            window.set(d, window.get(d) - 1);
        }
        res = Math.max(res, right - left);
    }
    return res;
}

console.log(lengthOfLongestSubstring("bbbbb"));
// @lc code=end
