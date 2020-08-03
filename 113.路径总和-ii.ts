/*
 * @lc app=leetcode.cn id=113 lang=typescript
 *
 * [113] 路径总和 II
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

function pathSum(root: TreeNode | null, sum: number): number[][] {
  const arr: Array<number[]> = [];
  const path: number[] = [];

  const fn = (node: TreeNode | null, sum = 0) => {
    if (!node) return;
    path.push(node.val);
    sum -= node.val;

    if (!node.left && !node.right && sum === 0) {
      arr.push([...path]);
    } else {
      fn(node.left, sum);
      fn(node.right, sum);
    }

    path.pop();
  };

  fn(root, sum);
  return arr;
}
// @lc code=end
