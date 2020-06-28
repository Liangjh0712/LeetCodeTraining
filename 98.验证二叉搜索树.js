/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function (root) {
  //   const arr = [];
  let lastNum = null;
  let result = true;
  const fn = (node) => {
    if (!node) return;
    fn(node.left);
    // console.log(node.val);//
    // arr.push(node.val);
    if (lastNum === null) {
      lastNum = node.val;
    } else {
      if (lastNum >= node.val) {
        result = false;
        return;
      } else {
        lastNum = node.val;
      }
    }
    fn(node.right);
  };

  fn(root);

  //   console.log(arr);
  return result;
};
// @lc code=end
