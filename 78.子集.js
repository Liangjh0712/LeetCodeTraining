/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    const result = [[]]
    for (let item of nums) {
        for (let i = 0, length = result.length; i < length; i++) {
            result.push([...result[i], item])
        }
    }

    return result
};
// @lc code=end


console.log(subsets([1, 2, 3]))