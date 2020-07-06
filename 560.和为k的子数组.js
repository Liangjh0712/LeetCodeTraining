/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为K的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  const mp = new Map();
  mp.set(0, 1);
  let count = 0,
    pre = 0;
  for (const x of nums) {
    pre += x;
    if (mp.has(pre - k)) count += mp.get(pre - k);
    if (mp.has(pre)) mp.set(pre, mp.get(pre) + 1);
    else mp.set(pre, 1);
  }
  return count;
};
// @lc code=end

// 解法一:
// let count = 0;
// for (let i = 0; i < nums.length; i++) {
//   let sum = 0;
//   for (let j = i; j < nums.length; j++) {
//     sum += nums[j];
//     if (sum === k) {
//       count++;
//     }
//   }
// }

// return count;
