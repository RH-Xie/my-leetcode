/*
 * @lc app=leetcode.cn id=205 lang=typescript
 *
 * [205] 同构字符串
 */

// @lc code=start
function isIsomorphic(s: string, t: string): boolean {
  // 哈希映射，“用他们的办法解决他们的问题”
  // 即使用哈希表建立映射关系，存在key的话就get对应的value，等则同构，不等则不同构
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

