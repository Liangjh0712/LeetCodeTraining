/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let quick = head;
  let slow = head;

  while (quick && quick.next) {
    quick = quick.next.next;
    slow = slow.next;
    if (quick === slow) return true;
  }

  return false;
};
// @lc code=end

// let node = head;
//   while (node) {
//     if (node.count) {
//       return true;
//     }
//     node.count = 1;
//     node = node.next;
//   }

//   return false;
