/*
 * @lc app=leetcode.cn id=437 lang=typescript
 *
 * [437] 路径总和 III
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

function pathSum(root: TreeNode | null, sum: number): number {
  let count = 0;
  const copySum = sum;

  const fn = (root: TreeNode | null, sum: number) => {
    if (root === null) return;
    sum -= root.val;
    if (sum === 0) {
      count++;
    }

    fn(root.left, sum);
    fn(root.right, sum);
  };

  const deep = (root: TreeNode | null) => {
    if (root === null) return;
    fn(root, sum);

    deep(root.left);
    deep(root.right);
  };

  deep(root);
  return count;
}
// @lc code=end
