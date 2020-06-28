/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  console.log(nums);
  const arr = [];
  for (let i = 0; i < nums.length - 2 && nums[i] <= 0; i++) {
    if (nums[i - 1] === nums[i]) continue;

    let [s, e] = [i + 1, nums.length - 1];

    while (s < e) {
      if (nums[i] + nums[s] + nums[e] === 0) {
        arr.push([nums[i], nums[s], nums[e]]);
        while (nums[s] === nums[s + 1]) s++;
        while (nums[e] === nums[e - 1]) e--;
        s++;
        e--;
      } else if (-nums[i] > nums[s] + nums[e]) {
        s++;
      } else {
        e--;
      }
    }
  }

  return arr;
};
// @lc code=end
//

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
