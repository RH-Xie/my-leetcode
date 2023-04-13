/*
 * @lc app=leetcode.cn id=34 lang=typescript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
function searchRange(nums: number[], target: number): number[] {
    return [left_bound(nums, target), right_bound(nums, target)];
}

function left_bound(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length;
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);
        if (nums[mid] === target) {
            right = mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid;
        }
    }
    return nums[left] === target ? left : -1;
}

function right_bound(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length;
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);
        if (nums[mid] === target) {
            left = mid + 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid;
        }
    }
    if (left - 1 < 0) return -1;
    return nums[left - 1] === target ? left - 1 : -1;
}
// @lc code=end
