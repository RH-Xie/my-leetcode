/*
 * @lc app=leetcode.cn id=92 lang=typescript
 *
 * [92] 反转链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

let successor : ListNode = null;
function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  if(left === 1) {
    return reverseN(head, right);
  }
  head.next = reverseBetween(head.next, left - 1, right - 1)
  return head;
};
function reverseN(head: ListNode | null, n): ListNode | null {
  if(n === 1) {
    successor = head.next;
    return head;
  }
  let last : ListNode = reverseN(head.next, n - 1);
  head.next.next = head;
  head.next = successor;
  return last;
};
// @lc code=end

