/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
  const arr = new Array(T.length);
  if (T.length === 0) return arr;
  arr[T.length - 1] = 0;
  for (let i = T.length - 2; i >= 0; i--) {
    for (let j = i + 1; j < T.length; j += arr[j] || 0) {
      if (T[i] >= T[j]) {
        if (!arr[j]) {
          arr[i] = 0;
          break;
        }
      } else {
        arr[i] = j - i;
        break;
      }
    }
  }

  return arr;
};
// @lc code=end

//
