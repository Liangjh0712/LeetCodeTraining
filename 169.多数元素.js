/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let num = null;
    let count = 0;
    for(let i =0;i<nums.length;i++){
        if(count===0){
            num = nums[i]
            count++
        }else{
            if(num===nums[i])count++
            else{
                count--
            }

        }
    }

    return num
};
// @lc code=end

//