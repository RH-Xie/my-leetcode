/*
 * @lc app=leetcode.cn id=234 lang=typescript
 *
 * [234] 回文链表
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

function isPalindrome(head: ListNode | null): boolean {
  let stack : number[] = [];
  let fast : ListNode = head;
  let slow : ListNode = head;
  while(fast && fast.next) {
    stack.push(slow.val);
    slow = slow.next;
    fast = fast.next.next;
  }
  if(fast) {
    while(stack.length > 0) {
      slow = slow.next;
      if(stack.pop() !== slow.val) return false;
    }
    return true;
  }
  else {
    while(stack.length > 0) {
      if(stack.pop() !== slow.val) return false;
      slow = slow.next;
    }
    return true;
  }
};
// @lc code=end

