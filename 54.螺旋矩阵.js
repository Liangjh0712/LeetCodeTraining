/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

const { maroon } = require("color-name");

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const arr = [];
  while (matrix.length !== 0) {
    arr.push(...matrix.shift()); // 水平1
    if (matrix.length === 0) break;
    for (let i = 0; i < matrix.length; i++) {
      // 竖直最后1
      arr.push(matrix[i].pop());
    }

    if (matrix[0].length === 0 || matrix.length === 0) break;
    arr.push(...matrix.pop().reverse());
    if (matrix.length === 0) break;
    for (let i = matrix.length - 1; i >= 0; i--) {
      arr.push(matrix[i].shift());
    }
    if (matrix[0].length === 0 || matrix.length === 0) break;
  }

  return arr;
};
// @lc code=end

// [1,2,3,4],[5,6,7,8],[9,10,11,12]
// console.log(
//   spiralOrder([
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//   ])
// );

console.log(spiralOrder([[1], [2], [3]]));
