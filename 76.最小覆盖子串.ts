/*
 * @lc app=leetcode.cn id=76 lang=typescript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
function minWindow(s: string, t: string): string {
  let need : Map<string, number> = new Map();
  let window : Map<string, number>  = new Map();
  for(let i = 0; i < t.length; i++) {
    let c : string = t.charAt(i);
    need.set(c, (need.get(c) ?? 0) + 1);
  }

  let start : number = 0;
  let len : number = Number.MAX_VALUE;

  let left = 0;
  let right = 0;
  let valid = 0;
  while(right < s.length) {
    let c = s.charAt(right);
    right++;
    if(need.has(c)) {
      window.set(c, (window.get(c) ?? 0) + 1);
      if(window.get(c) === need.get(c)) {
        valid++;
      }
    }
    while(valid === need.size) {
      if(right - left < len) {
        start = left;
        len = right - left;
      }
      let d : string = s.charAt(left);
      left++;
      if(need.has(d)) {
        if(window.get(d) === need.get(d)) {
          valid--;
        }
        window.set(d, window.get(d) - 1);
      }
    }
  }
  return len === Number.MAX_VALUE ? "" : s.substring(start, start + len)
};
// @lc code=end

