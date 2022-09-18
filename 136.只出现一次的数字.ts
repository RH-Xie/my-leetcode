/*
 * @lc app=leetcode.cn id=136 lang=typescript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
function singleNumber(nums: number[]): number {
    // let hashmap = {};
    // for(let index = 0; index < nums.length; index++) {
    //   if(hashmap[nums[index]] === '1') {
    //     delete hashmap[nums[index]];
    //   }
    //   else {
    //     hashmap[nums[index]] = '1';
    //   }
    // }
    // return parseInt(Object.keys(hashmap)[0]);
    let result = 0x0;
    for (let index = 0; index < nums.length; index++) {
        result ^= nums[index];
    }
    return result;
}
// @lc code=end
