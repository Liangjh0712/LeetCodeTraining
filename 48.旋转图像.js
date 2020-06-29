/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix.length; j++) {
      [matrix[j][i], matrix[i][j]] = [matrix[i][j], matrix[j][i]];
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = matrix[i].reverse();
  }

  //   console.log(matrix);
};
// @lc code=end

// [1, 1, 1, 1, 1];

rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
[
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
];
