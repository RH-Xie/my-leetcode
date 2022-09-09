/*
 * @lc app=leetcode.cn id=100 lang=typescript
 *
 * [100] 相同的树
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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  // 如果论效率，要遍历的同时进行比较，就不搞先序遍历后序遍历那一套了，直接递归就好了。
  if (!p && !q) return true; // 都为空，返回true，因为这是与运算形成的“连环比较”。
  if (!p || !q) return false; // 有一个为空，返回false
  // 都不为空，比较值
  return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
// @lc code=end

