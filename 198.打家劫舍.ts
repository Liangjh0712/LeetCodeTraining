/*
 * @lc app=leetcode.cn id=198 lang=typescript
 *
 * [198] 打家劫舍
 */

// @lc code=start
function rob(nums: number[]): number {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(...nums);

  let dpi2 = nums[0];
  let dpi1 = Math.max(nums[0], nums[1]);
  let dp = 0;

  for (let i = 2; i < nums.length; i++) {
    dp = Math.max(dpi2 + nums[i], dpi1);
    dpi2 = dpi1;
    dpi1 = dp;
  }

  return dp;
}
// @lc code=end

// dp[i]=max(dp[i−2]+nums[i],dp[i−1])
