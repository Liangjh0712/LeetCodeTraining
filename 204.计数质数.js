/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  n--;
  if (n <= 1) return 0;
  let count = 0;
  while (n > 1) {
    let sign = false;

    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) {
        sign = true;
        break;
      }
    }

    if (!sign) {
      count++;
    }
    n--;
  }
  return count;
};
// @lc code=end

countPrimes(10);
