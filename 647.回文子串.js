/*
 * @lc app=leetcode.cn id=647 lang=javascript
 *
 * [647] 回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let left = i;
    let right = i;

    while (left >= 0 && right < s.length) {
      if (s[left] === s[right]) {
        count++;
      } else {
        break;
      }
      left--;
      right++;
    }

    left = i;
    right = i + 1;

    while (left >= 0 && right < s.length) {
      if (s[left] === s[right]) {
        count++;
      } else {
        break;
      }
      left--;
      right++;
    }
  }

  return count;
};
// @lc code=end
