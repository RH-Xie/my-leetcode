/*
 * @lc app=leetcode.cn id=160 lang=typescript
 *
 * [160] 相交链表
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

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  if(!headA || !headB) return null;
  let pointerA = headA;
  let pointerB = headB;
  while(pointerA != pointerB) {
    if(pointerA !== null) pointerA = pointerA.next;
    else pointerA = headB;
    if(pointerB !== null) pointerB = pointerB.next;
    else pointerB = headA;
  }
  return pointerA;
};
// @lc code=end

