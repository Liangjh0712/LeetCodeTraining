/*
 * @lc app=leetcode.cn id=221 lang=typescript
 *
 * [221] 最大正方形
 */

// @lc code=start
function maximalSquare(matrix: string[][]): number {
  const arr: number[][] = new Array(matrix.length).fill([]);

  let maxSlideNum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      arr[i][j] = 0;
      if (matrix[i][j] === "1") {
        if (i === 0 || j === 0) {
          arr[i][j] = 1;
        } else {
          arr[i][j] =
            Math.min(arr[i - 1][j - 1], arr[i][j - 1], arr[i - 1][j]) + 1;
        }
      }
      maxSlideNum = Math.max(maxSlideNum, arr[i][j]);
    }
  }

  console.log(arr);
  return maxSlideNum * maxSlideNum;
}
// @lc code=end
//  if (matrix(i - 1, j - 1) == '1') {
//     dp(i, j) = min(dp(i - 1, j), dp(i, j - 1), dp(i - 1, j - 1)) + 1;
// }

//https://leetcode-cn.com/problems/maximal-square/solution/li-jie-san-zhe-qu-zui-xiao-1-by-lzhlyle/
