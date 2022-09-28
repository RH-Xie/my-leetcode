/*
 * @lc app=leetcode.cn id=219 lang=typescript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  // 哈希表  
  const length = nums.length;
    const set = new Set();
    for (let i = 0; i < length; i++) {
        if (i > k) {
            set.delete(nums[i - k - 1]);
        }
        if (set.has(nums[i])) {
            return true;
        }
        set.add(nums[i]);
    }
    return false;
}
// @lc code=end
