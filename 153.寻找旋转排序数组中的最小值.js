/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {

    let [leftIndex, rightIndex] = [0, nums.length - 1]
    if (nums.length === 1) return nums[0]
    while (leftIndex <= rightIndex) {
        if (nums[leftIndex] <= nums[rightIndex]) {
            return nums[leftIndex]
        }
        const middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        const middle = nums[middleIndex]
        if (middle >= nums[leftIndex]) {// 落在大的一边
            leftIndex = middleIndex + 1
        } else if (nums[rightIndex] >= middle) {// 落在小的一边
            rightIndex = middleIndex
        }
    }
};
// @lc code=end
// [3,4,5,1,2]


// 0 1 2 3 4 5 6
// 4,5,6,7,0,1,2


// 3

console.log(findMin([1, 2]))