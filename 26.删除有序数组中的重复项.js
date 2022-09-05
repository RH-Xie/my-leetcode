/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除有序数组中的重复项
 */
// @lc code=start
function removeDuplicates(nums) {
    let slow = 0;
    let fast = 0;
    while (fast < nums.length) {
        if (nums[fast] === nums[slow]) {
            fast++;
        }
        else {
            slow++;
            if (nums[fast] !== nums[slow]) {
                nums[slow] = nums[fast];
            }
            fast++;
        }
    }
    return slow + 1;
}
// console.log(removeDuplicates([1,1,2]));
// @lc code=end
