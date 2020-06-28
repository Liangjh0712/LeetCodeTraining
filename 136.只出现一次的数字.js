/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    return nums.reduce((cur,num)=>{
        return cur^num
    })
};
// @lc code=end

// sum = x + 剩余 * 2
//  sum
