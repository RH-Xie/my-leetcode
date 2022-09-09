/*
 * @lc app=leetcode.cn id=144 lang=typescript
 *
 * [144] 二叉树的前序遍历
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

function preorderTraversal(root: TreeNode | null): number[] {
  const result : number[] = [];
  const stack : TreeNode[] = [];
  while(root || stack.length) {
    while(root) {
      result.push(root.val);
      stack.push(root);
      root = root.left;
    }
    let node = stack.pop();
    root = node.right;
  }
  return result;
};
// @lc code=end

