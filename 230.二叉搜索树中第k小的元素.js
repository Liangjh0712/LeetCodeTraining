/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  // while(k>0){
  // }
  //   const arr = [root];
  //   while (arr.length > 0) {
  //     const node = arr.pop();
  //     console.log(node.val);
  //     node.right && arr.push(node.right);
  //     node.left && arr.push(node.left);
  //   }
  let count = 1;
  let result = 0;
  const fn = (root) => {
    root.left && fn(root.left);
    if (count === k) {
      //   console.log(root.val, count, k);
      result = root.val;
    }
    count++;
    root.right && fn(root.right);
  };

  fn(root);
  return result;
};
// @lc code=end
