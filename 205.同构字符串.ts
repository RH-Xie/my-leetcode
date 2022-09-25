/*
 * @lc app=leetcode.cn id=205 lang=typescript
 *
 * [205] 同构字符串
 */

// @lc code=start
function isIsomorphic(s: string, t: string): boolean {
  // !!!!  
  let map: Map<string, string> = new Map();
    let set: Set<string> = new Set();
    for (let i = 0; i < s.length; i++) {
        let sChar: string = s[i];
        let tChar: string = t[i];
        if (map.has(sChar)) {
            if (map.get(sChar) != tChar) {
                return false;
            }
        } else {
            if (set.has(tChar)) {
                return false;
            }
            map.set(sChar, tChar);
            set.add(tChar);
        }
    }
    return true;
};
// @lc code=end

