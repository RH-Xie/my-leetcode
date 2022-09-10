/*
 * @lc app=leetcode.cn id=101 lang=typescript
 *
 * [101] 对称二叉树
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
// 上一题是两棵树对比节点，这次是同一棵树左右子树对比节点，这就是唯一的区别了。
function isSymmetric(root: TreeNode | null): boolean {
  if(!root) return true;
  return isMirrow(root.left, root.right);
}

function isMirrow(p: TreeNode | null, q: TreeNode | null){
  if(!q && !p) return true;
  if(!q || !p) return false;
  return p.val === q.val && isMirrow(p.left, q.right) && isMirrow(p.right, q.left);
}
// @lc code=end
