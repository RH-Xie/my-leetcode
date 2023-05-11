/*
 * @lc app=leetcode.cn id=200 lang=typescript
 *
 * [200] 岛屿数量
 */

// @lc code=start
function numIslands(grid: string[][]): number {
    let land = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === "1") {
                land++;
                dfs(grid, i, j);
            }
        }
    }
    return land;
}
function dfs(grid, i, j) {
    if (i < 0 || j < 0 || i === grid.length || j === grid[0].length) {
        return;
    }
    if (grid[i][j] === "0") {
        return;
    }
    grid[i][j] = "0";
    // 吞没
    dfs(grid, i + 1, j);
    dfs(grid, i - 1, j);
    dfs(grid, i, j + 1);
    dfs(grid, i, j - 1);
}
// @lc code=end
