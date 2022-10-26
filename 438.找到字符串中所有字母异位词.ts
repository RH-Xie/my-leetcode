/*
 * @lc app=leetcode.cn id=438 lang=typescript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
function findAnagrams(s: string, p: string): number[] {
  let need : Map<string, number> = new Map<string, number>();
  let window : Map<string, number> = new Map<string, number>();
  for(let c of p) {
    need.set(c, (need.get(c) || 0) + 1);
  }
  let valid = 0;
  let left = 0, right = 0;
  let result : number[] = [];
  while(right < s.length) {
    let c : string = s.charAt(right);
    right++;
    if(need.has(c)) {
      window.set(c, (window.get(c) || 0) + 1);
      if(window.get(c) === need.get(c)) {
        valid++;
      }
    }
    while(right - left >= p.length) {
      if(valid === need.size) {
        result.push(left);
      }
      let d : string = s.charAt(left);
      left++;
      if(need.has(d)) {
        if(window.get(d) === need.get(d)) {
          valid--;
        }
        // 注意顺序，上面用到了window.get，颠倒会有问题的
        // 在这里具体就是valid根本不会减少，因为window对应d值已经减少了
        // 无论如何都达不到满足need那个条件（上面的if）。
        window.set(d, window.get(d) - 1);
      }
    }
  }
  return result;
};

// @lc code=end

