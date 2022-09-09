/*
 * @lc app=leetcode.cn id=145 lang=typescript
 *
 * [145] 二叉树的后序遍历
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

function postorderTraversal(root: TreeNode | null): number[] {
  const result : number[] = [];
  const stack : TreeNode[] = [];
  while(root || stack.length) {
    // 后序遍历为 左右根，所以先将根节点压入栈中，然后将左节点压入栈中，最后将右节点压入栈中
    // 上面这段是机器人写的，我只能说卧槽
    // 后序遍历为 左右中，而我们做中右左的访问顺序比较简单，所以我们可以先将中右左的顺序压入栈中，然后再将结果反转即可
    // 当然，别忘了我们有unshift方法，可以直接将结果插入到数组头部，这样就不用反转了
    while(root) {
      result.unshift(root.val);
      stack.push(root);
      root = root.right;
    }
    let node = stack.pop();
    root = node.left;
  }
  return result;
};
// @lc code=end

