/*
 * @lc app=leetcode.cn id=726 lang=typescript
 *
 * [726] 原子的数量
 */

// @lc code=start
function countOfAtoms(formula: string): string {
    let sym_stack = [];
    let offset_stack = []
    let offset = 0
    let bracket = 0;
    let rate = 1;
    let el = "";
    let end = false;
    let map = new Map();
    let set = new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9"]);
    for (let i = 0; i < formula.length; i++) {
        const c = formula.charAt(i);
        const code = formula.charCodeAt(i);
        if (code < 58 && code > 47) {
            // 数字
        } else if (c === "(") {
          if(offset_stack.length) {
            offset +=1
          }
            continue;
        } else if (c === ")") {
            let _rate = rate;
            rate *= parseInt(formula.charAt(i + 1));
            ;
            rate = _rate;
        } else {
            if (end) {
                // 没有接数字
                // 栈里无元素
                if (!sym_stack.length) map.set(c, map.get(c) ? map.get(c) : 0);
                for(let i = 0;i < offset;i++ ) {
                  if()
                }
            }
            // 字母
            el += c;
            if (code > 96) {
                // 小写
                end = true;
            } else {
                // 大写
            }
        }
    }
}
// @lc code=end
