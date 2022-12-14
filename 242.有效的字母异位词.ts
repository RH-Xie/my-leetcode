/*
 * @lc app=leetcode.cn id=242 lang=typescript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
  // 好像有个时间刷题。。已经好久没刷了，最近DDL太多，没办法保持活跃，但更新又不该断，实是为难
  if (s.length !== t.length) {
    return false;
  }
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    map.set(char, (map.get(char) || 0) + 1);
  }
  for (let i = 0; i < t.length; i++) {
    const char = t[i];
    const count = map.get(char);
    if (!count) {
      return false;
    }
    map.set(char, count - 1);
  }
  return true;
};  
// @lc code=end

