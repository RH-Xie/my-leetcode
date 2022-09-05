/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        // 这里和C/C++这样的强类型不同，如果不floor会出现小数
        // 同时为了避免整型溢出，用left + (right - left) / 2 会好点
        let mid = Math.floor(left + (right - left) / 2);
        if (target > nums[mid]) {
            left = mid + 1;
        } else if (target === nums[mid]) {
            return mid;
        } else {
            right = mid - 1;
        }
    }
    return left;
}
// @lc code=end
