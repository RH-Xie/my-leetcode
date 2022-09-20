/*
 * @lc app=leetcode.cn id=141 lang=typescript
 *
 * [141] 环形链表
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

function hasCycle(head: ListNode | null): boolean {
    if(!head) return false;
    let fast = head.next;
    let slow = head;
    // 类似跑圈问题，又或是星体运转周期问题
    while(fast !== slow) {
        if(!fast || !fast.next) return false;
        fast = fast.next.next;
        slow = slow.next;
    }
    return true;
};
// @lc code=end

