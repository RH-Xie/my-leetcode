/*
 * @lc app=leetcode.cn id=21 lang=typescript
 *
 * [21] 合并两个有序链表
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
// class ListNode {
//     val: number;
//     next: ListNode | null;
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = val === undefined ? 0 : val;
//         this.next = next === undefined ? null : next;
//     }
// }
function mergeTwoLists(list1, list2) {
    if (list1 === null) {
        return list2;
    }
    if (list2 === null) {
        return list1;
    }
    if (list1.val > list2.val) {
        list2.next = mergeTwoLists(list2.next, list1);
        return list2;
    }
    else {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    }
}
// @lc code=end
