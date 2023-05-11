/*
 * @lc app=leetcode.cn id=695 lang=typescript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
function maxAreaOfIsland(grid: number[][]): number {
    let res = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                res = Math.max(res, dfs(grid, i, j));
            }
        }
    }
    return res;
}
function dfs(grid, i, j): number {
    let area = 0;
    spread(grid, i, j);
    return area;
    function spread(grid, i, j) {
        if (i < 0 || j < 0 || i === grid.length || j === grid[0].length) {
            return;
        }
        if (grid[i][j] === 0) {
            return;
        }
        grid[i][j] = 0;
        // 吞没
        area++;
        spread(grid, i + 1, j);
        spread(grid, i - 1, j);
        spread(grid, i, j + 1);
        spread(grid, i, j - 1);
    }
}

// @lc code=end
