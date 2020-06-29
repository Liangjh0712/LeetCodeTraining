/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
var isSymmetric = function (root) {
  let isSymmetric = true;
  const check = (node1, node2) => {
    if (node1 == null || node2 === null) {
      if (node1 === node2) {
        return;
      }
      return (isSymmetric = false);
    } else if (node1.val === node2.val) {
      check(node1.left, node2.right);
      check(node1.right, node2.left);
    } else {
      isSymmetric = false;
    }
  };
  check(root, root);
  return isSymmetric;
};
// @lc code=end

// console.log(
//   isSymmetric({
//     val: 1,
//     left: {
//       val: 2,
//       left: { val: 3, left: null, right: null },
//       right: { val: 4, left: null, right: null },
//     },
//     right: {
//       val: 2,
//       left: { val: 4, left: null, right: null },
//       right: { val: 3, left: null, right: null },
//     },
//   })
// );

// console.log(
//   isSymmetric({
//     val: 1,
//     left: {
//       val: 2,
//       left: null,
//       right: { val: 3, left: null, right: null },
//     },
//     right: {
//       val: 2,
//       left: { val: 3, left: null, right: null },
//       right: null,
//     },
//   })
// );

/**遍历
 *   let isSymmetric = true;
  const traverse = (nodes = []) => {
    if (nodes.length === 0) return;
    const arr = [];
    let flag = true;
    const result = [];
    for (node of nodes) {
      !node && (node = {});
      result.push(node.val);
      if (node.left || node.right) flag = false;
      arr.push(node.left, node.right);
    }
    let left = 0;
    let right = result.length - 1;
    while (left <= right) {
      if (result[left] === result[right]) {
        left++;
        right--;
      } else {
        isSymmetric = false;
        return;
      }
    }
    if (flag) return;
    traverse(arr);
  };

  traverse([root]);

  return isSymmetric;
 */

/**
 * // 迭代
 * var isSymmetric = function (root) {
  let arr = [root];
  if (!root) return true;
  while (arr.length > 0) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      if (
        arr[left] === arr[right] ||
        (arr[left] && arr[right] && arr[left].val === arr[right].val)
      ) {
        left++;
        right--;
      } else {
        return false;
      }
    }

    const newArr = [];
    let isAllEmpty = true;
    for (let node of arr) {
      !node && (node = { left: null, right: null });
      if (node.left || node.right) isAllEmpty = false;
      newArr.push(node.left, node.right);
    }
    if (isAllEmpty) return true;
    arr = newArr;
  }
  return true;
};
 */
