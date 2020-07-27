/*
 * @lc app=leetcode.cn id=455 lang=typescript
 *
 * [455] 分发饼干
 */

// @lc code=start
function findContentChildren(g: number[], s: number[]): number {
  const copyG = g.sort((a, b) => a - b); // 胃口
  const copyS = s.sort((a, b) => a - b); // 挡饱值

  let count = 0;
  for (let i = 0; i < copyS.length; i++) {
    if (copyG[count] <= copyS[i]) {
      count++;
    }
  }
  return count;
}
// @lc code=end
