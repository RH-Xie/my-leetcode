/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
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

function addTwoNumbers(
    l1: ListNode | null,
    l2: ListNode | null
): ListNode | null {
    let carry: boolean = false;
    if (!l1) return l2;
    if (!l2) return l1;
    let head: ListNode = l1;
    while (l1 || l2) {
        l1.val += l2.val;
        if (carry) {
            l1.val++;
            carry = false;
        }
        if (l1.val >= 10) {
            l1.val -= 10;
            carry = true;
        }
        if (!l1.next && !l2.next) {
            if (carry) {
                l1.next = new ListNode(1);
            }
            return head;
        }
        if (!l1.next) {
            l1.next = new ListNode(0);
        }
        if (!l2.next) {
            l2.next = new ListNode(0);
        }
        l1 = l1.next;
        l2 = l2.next;
    }
    return head;
}
// @lc code=end
