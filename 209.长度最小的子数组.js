/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
  let start = 0;
  let end = 0;
  let tt = nums.length;
  if (nums.length === 0) return 0;

  while (end < nums.length) {
    s -= nums[end];
    while (s <= 0) {
      tt = Math.min(tt, end - start + 1);
      if (s + nums[start] <= 0) {
        s += nums[start];
        start++;
        tt = Math.min(tt, end - start + 1);
      } else {
        break;
      }
    }

    end++;
  }
  if (s > 0) return 0;
  return tt;
};
// @lc code=end

// console.log(minSubArrayLen(15, [1, 2, 3, 4, 5]));

// console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));

console.log(minSubArrayLen(5, [2, 3, 1, 1, 1, 1, 1]));
