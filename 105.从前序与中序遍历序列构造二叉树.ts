/*
 * @lc app=leetcode.cn id=105 lang=typescript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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

// interface TreeNode {
//   val: number;
//   left?: TreeNode;
//   right?: TreeNode;
// }

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (preorder.length === 0 && inorder.length === 0) return null;
  const node = new TreeNode(preorder[0]);

  let i = 0;
  for (i = 0; i < inorder.length; i++) {
    if (inorder[i] === preorder[0]) {
      break;
    }
  }
  console.log(i);
  node.left = buildTree(preorder.slice(1, i + 1), inorder.slice(0, i));
  node.right = buildTree(preorder.slice(i + 1), inorder.slice(i + 1));

  return node;
}
// @lc code=end
// 前序  中 左 右  3 xxx 9 20 15 7
// 中序  左 中 右  9 xxx 3 15 20 7
// 0
// start xxxxxx  yyyyyyy
// xxxxxx start yyyyyyy
// [1,2,3] \n
// [2,3,1]
