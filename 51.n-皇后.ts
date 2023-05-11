/*
 * @lc app=leetcode.cn id=51 lang=typescript
 *
 * [51] N 皇后
 */

// @lc code=start
let res = [];
function isValid(board: string[][], row: number, col: number) {
    // 同一列
    for (let i = 0; i < row; i++) {
        if (board[i][col] === "Q") return false;
    }
    // 左上方，因为是按行前进，所以下方肯定是没有初始化的，可以忽略
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] === "Q") return false;
    }
    // 右上方
    for (
        let i = row - 1, j = col + 1;
        i >= 0 && j < board[0].length;
        i--, j++
    ) {
        if (board[i][j] === "Q") return false;
    }
    return true;
}

function backtrack(board: string[][], row: number) {
    if (row === board.length) {
        const r = board.map((row) => row.join(""));
        res.push(r);
        return;
    }
    for (let i = 0; i < board[0].length; i++) {
        if (!isValid(board, row, i)) {
            continue;
        }
        board[row][i] = "Q";
        backtrack(board, row + 1);
        board[row][i] = ".";
    }
}

function solveNQueens(n: number): string[][] {
    res = [];
    let board = Array.from({ length: n }, () => Array(n).fill("."));
    backtrack(board, 0);
    return res;
}
// @lc code=end
