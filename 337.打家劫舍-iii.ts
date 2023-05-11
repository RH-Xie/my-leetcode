/*
 * @lc app=leetcode.cn id=337 lang=typescript
 *
 * [337] 打家劫舍 III
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
const memo = new Map();
function rob(root: TreeNode | null): number {
    if (root === null) return 0;
    if (memo.has(root)) {
        return memo.get(root);
    }
    // 抢
    let to_do =
        root.val +
        (root.left ? rob(root.left.left) + rob(root.left.right) : 0) +
        (root.right ? rob(root.right.left) + rob(root.right.right) : 0);
    // 不抢
    let not_do = rob(root.left) + rob(root.right);
    let max = Math.max(to_do, not_do);
    memo.set(root, max);
    return max;
}

// @lc code=end
