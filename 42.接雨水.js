/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;

  let sum = 0;
  while (left < right) {
    leftMax = Math.max(height[left], leftMax);
    rightMax = Math.max(height[right], rightMax);
    if (leftMax <= rightMax) {
      if (left > 0) {
        sum += leftMax - height[left];
      }
      left++;
    } else {
      if (right < height.length - 1) {
        sum += rightMax - height[right];
      }
      right--;
    }
  }

  return sum;
};
// @lc code=end

// let temp = height[0];
//   let sum1 = [];
//   for (let i = 0; i < height.length; i++) {
//     if (temp <= height[i]) {
//       temp = height[i];
//       sum1[i] = 0;
//     } else {
//       sum1[i] = temp - height[i];
//     }
//   }

//   let temp2 = height[height.length - 1];
//   let sum2 = [];
//   for (let i = height.length - 1; i >= 0; i--) {
//     if (temp2 <= height[i]) {
//       temp2 = height[i];
//       sum2[i] = 0;
//     } else {
//       sum2[i] = temp2 - height[i];
//     }
//   }

//   let sum3 = 0;
//   for (let i = 0; i < sum1.length; i++) {
//     sum3 += Math.min(sum1[i], sum2[i]);
//   }

//   return sum3;
