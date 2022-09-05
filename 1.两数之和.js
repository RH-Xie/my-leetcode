/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */
// @lc code=start
function twoSum(nums, target) {
    let obj = {};
    for (let index = 0; index < nums.length; index++) {
        let left = target - nums[index];
        if (obj[left] !== undefined) {
            return [obj[left], index];
        }
        else {
            obj[nums[index]] = index;
        }
    }
}
console.log(twoSum([-3, 4, 3, 90], 0));
// @lc code=end
