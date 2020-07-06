/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map();

  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  const arr = [];
  for (let [key, val] of map) {
    arr.push([key, val]);
  }
  arr.sort((a, b) => -a[1] + b[1]);

  return arr.slice(0, k).map((item) => item[0]);
};
// @lc code=end
