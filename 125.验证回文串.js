/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const length = s.length;

  let left = 0;
  let right = length - 1;

  const reg = /[^a-zA-Z0-9]/;
  while (left < right) {
    if (reg.test(s[left])) {
      left++;
      continue;
    }
    if (reg.test(s[right])) {
      right--;
      continue;
    }

    if (s[left].toLowerCase() === s[right].toLowerCase()) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
};
// @lc code=end

console.log(isPalindrome("A man, a plan, a canal: Panama"));

// const newStr = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
// const length = newStr.length;
// for (let i = 0; i < length / 2; i++) {
//   if (newStr[i] === newStr[length - i - 1]) {
//     continue;
//   } else {
//     return false;
//   }
// }
// return true;
