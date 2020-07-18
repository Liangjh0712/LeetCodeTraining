/*
 * @lc app=leetcode.cn id=538 lang=typescript
 *
 * [538] 把二叉搜索树转换为累加树
 */

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

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

function convertBST(root: TreeNode | null): TreeNode | null {
  if (root === null) return root;
  let prevNode: TreeNode | null = null;
  const fn = (root: TreeNode | null) => {
    if (!root) return null;
    fn(root.right);
    if (prevNode) {
      root.val += prevNode.val;
    }
    prevNode = root;
    fn(root.left);
  };

  fn(root);
  return root;
}
// @lc code=end
// 层级遍历
// 倒序遍历相加最好
// 二叉搜索树特点: 左孩子 小于 双亲节点; 右孩子 大于 双亲节点

//[2,0,3,-4,1]
