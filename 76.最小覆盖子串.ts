/*
 * @lc app=leetcode.cn id=76 lang=typescript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
function minWindow(s: string, t: string): string {
    let need: Map<string, number> = new Map();
    let window: Map<string, number> = new Map();
    for (let c of t) {
        need.set(c, (need.get(c) || 0) + 1);
    }
    let left = 0,
        right = 0;
    let valid = 0;
    let start = 0,
        len = Number.MAX_SAFE_INTEGER;
    while (right < s.length) {
        let c: string = s.charAt(right);
        // 扩大窗口
        right++;
        if (need.has(c)) {
            window.set(c, (window.get(c) || 0) + 1);
            if (window.get(c) === need.get(c)) {
                valid++;
            }
        }
        while (valid === need.size) {
            // 择优
            if (right - left < len) {
                start = left;
                len = right - left;
            }
            let d: string = s.charAt(left);
            // 收缩窗口
            left++;
            if (need.has(d)) {
                // valid本身含义是window和need内字符相同的个数，现在window里的要移出去了，自然就valid--了
                if (window.get(d) === need.get(d)) {
                    valid--;
                }
                window.set(d, window.get(d) - 1);
            }
        }
    }
    return len === Number.MAX_SAFE_INTEGER
        ? ""
        : s.substring(start, start + len);
}
// @lc code=end
