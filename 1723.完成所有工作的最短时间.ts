/*
 * @lc app=leetcode.cn id=1723 lang=typescript
 *
 * [1723] 完成所有工作的最短时间
 */

// 这一题建议专门记下笔记

// @lc code=start
function minimumTimeRequired(jobs: number[], k: number): number {
    let sums = [];
    let res = Infinity;
    let len = jobs.length;
    dfs(0, 0, sums, 0); // 为什么这个能叫DFS？
    return res;
    function dfs(u, used, sums, max) {
        if (res <= max) return;
        if (len === u) {
            res = max;
            return;
        }
        if (used < k) {
            sums[used] = jobs[u];
            dfs(u + 1, used + 1, sums, Math.max(sums[used], max));
            sums[used] = 0;
        }
        for (let i = 0; i < used; i++) {
            sums[i] += jobs[u];
            dfs(u + 1, used, sums, Math.max(sums[i], max));
            sums[i] -= jobs[u];
        }
    }
}

// @lc code=end
