/*
 * @lc app=leetcode.cn id=111 lang=typescript
 *
 * [111] 二叉树的最小深度
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

function minDepth(root: TreeNode | null): number {
  // if(!root) return 0;
  // if(!root.left) return minDepth(root.right) + 1;
  // if(!root.right) return minDepth(root.left) + 1;
  // return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
  if(!root) return 0;
  let queue : TreeNode[] = [];
  queue.push(root);
  let depth = 1;
  while(queue.length !== 0) {
    let rootLength : number = queue.length; 
    // 下面直接写queue.length是不对的，queue在动态变化
    // 但解决问题，也只需要记录一下进入时的队列长度，循环该长度的次数
    // 完全不需要另开一个所谓“暂时队列2号”之类的东西
    // 也算是对我之前嗯造算法的一个优化点了
    for(let i = 0; i < rootLength; i++) {
      let node : TreeNode | null = queue.shift();;
      if(!node.left && !node.right) return depth; // 遇到最小的了
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
    depth++;
  }
  return depth; // depth就是maxDepth，小心别写错位置
}
// @lc code=end

