/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const arr = [
    0,
    0,
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
    ["j", "k", "l"],
    ["m", "n", "o"],
    ["p", "q", "r", "s"],
    ["t", "u", "v"],
    ["w", "x", "y", "z"],
  ];
  if (!digits) return [];
  let result = [...arr[digits[0]]];
  for (let i = 1; i < digits.length; i++) {
    //   arr[i]
    const tempArr = [];
    arr[digits[i]].forEach((key) => {
      tempArr.push(...result.map((key2) => key2 + key));
    });
    result = tempArr;
  }
  return result;
};
// @lc code=end
