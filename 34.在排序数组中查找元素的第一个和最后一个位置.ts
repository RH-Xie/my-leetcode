/*
 * @lc app=leetcode.cn id=34 lang=typescript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
function searchRange(nums: number[], target: number): number[] {
    return [left_bound(nums, target), right_bound(nums, target)];
}
// 寻找左边界
function left_bound(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length;
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);
        if (nums[mid] === target) {
            //不返回，而是右边界不断往左缩小，寻找第一个
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
            // 不返回，而是左边界不断往右，寻找最后一个
            left = mid + 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid;
        }
    }
    // 由于left = mid + 1，程序运行到这里left肯定不是mid了，而是mid+1，但是索引mid处才是我们的target，故left - 1
    // if (left - 1 < 0) return -1;
    // return nums[left - 1] === target ? left - 1 : -1;
    return target === nums[right - 1] ? right - 1 : -1;
}
// @lc code=end
