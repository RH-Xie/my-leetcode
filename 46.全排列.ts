/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 */

// @lc code=start
let res = [];
function backtrack(
    nums: number[],
    track: number[],
    used: boolean[]
): number[][] {
    // 结束条件（track已包含所有nums里的数字）
    if (track.length === nums.length) {
        res.push(new Array(...track));
        return res;
    }
    for (let i = 0; i < nums.length; i++) {
        if (used[i]) {
            continue;
        }
        track.push(nums[i]);
        used[i] = true;
        backtrack(nums, track, used);
        track.pop();
        used[i] = false;
    }
    return res;
}

function permute(nums: number[]): number[][] {
    if (nums.length <= 1) return [nums];
    let track = [];
    res = [];
    let used = new Array(nums.length);
    used.fill(false);
    backtrack(nums, track, used);
    return res;
}
// @lc code=end
