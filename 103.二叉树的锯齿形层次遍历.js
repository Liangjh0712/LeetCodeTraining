/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  let deep = 0;
  const arr = [root];
  const result = [];
  while (arr.length > 0) {
    const newArr = [];
    const itemResult = [];
    for (let i = 0; i < arr.length; i++) {
      const node = arr[i];
      if (!node) continue;
      node.left && newArr.push(node.left);
      node.right && newArr.push(node.right);
      if (deep % 2 !== 0) {
        // 从右往左
        itemResult.unshift(node.val);
        // newArr.reverse();
      } else {
        itemResult.push(node.val);
      }
    }

    arr.length = 0;
    arr.push(...newArr);
    deep++;
    itemResult.length > 0 && result.push(itemResult);
  }

  return result;
};
// @lc code=end
