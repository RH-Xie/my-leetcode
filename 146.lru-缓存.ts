/*
 * @lc app=leetcode.cn id=146 lang=typescript
 *
 * [146] LRU 缓存
 */

// @lc code=start
// 整体思路其实十分简单：Map+双向链表，头部是最久未使用，尾部是最新，一旦被get就移动到尾部
// 🎏双向链表对删除的支持十分友好，而单向链表只能重新遍历，找到再删
// 为了能够以O(1)速度查询节点，用一个Map记录key对应每个节点，即key => {key, val}
// 涉及的主要操作为：删除第一个、添加到队尾。删除第一个的同时要能返回第一个
// 🥵注意删除了cache内容后还要删掉map的key。

class MyNode {
    key: number;
    value: number;
    next: MyNode;
    prev: MyNode;
    constructor(key: number, value: number) {
        this.key = key;
        this.value = value;
        this.next = null; // 后驱
        this.prev = null; // 前驱
    }
}

class DoubleList {
    size: number;
    head: MyNode;
    tail: MyNode;
    constructor() {
        this.head = new MyNode(0, 0);
        this.tail = new MyNode(0, 0);
        this.size = 0;

        // 初始化双向链表
        this.head.next = this.tail;
        this.tail.prev = this.head; // 💥小心这里，是prev即只有前驱，而不会成环，如果是next那就成环了
        // 真这么做的了，这里会是一个很小的环，是尾节点和最后一个元素组成的，是个bug）
    }
    addLast(node: MyNode) {
        // 添加到链表尾部，但tail不是链表的一员，而是辅助作用的
        node.prev = this.tail.prev; // 新节点的前驱是tail的前驱节点（最后一个节点）
        node.next = this.tail; // 新节点的后驱是tail本身
        this.tail.prev.next = node; // tail的前驱节点的后驱指向node
        this.tail.prev = node; // tail的前驱节点变为node，即node变为最后一个元素
        // this.tail.next是故意留空的，很有可能是为了判别是否到链表尾
        this.size++;
    }
    remove(node: MyNode) {
        node.prev.next = node.next; // node前驱节点的后驱指向node的后驱节点
        node.next.prev = node.prev; // node后驱节点的前驱指向node的前驱节点
        this.size--;
    }

    // 移除第一个节点（最久未使用）
    removeFirst() {
        if (this.head.next === this.tail) {
            // 无元素
            return null;
        }
        let first = this.head.next;
        this.remove(first);
        return first;
    }
}

class LRUCache {
    map: Map<number, MyNode>;
    cache: DoubleList;
    cap: number;
    constructor(capacity: number) {
        this.cap = capacity;
        this.cache = new DoubleList();
        this.map = new Map<number, MyNode>();
    }
    // 已有节点更新至最新
    makeRecently(key) {
        let node = this.map.get(key);
        this.cache.remove(node);
        this.cache.addLast(node);
    }
    // 添加一个最新使用节点
    addRecently(key, val) {
        let node = new MyNode(key, val);
        this.cache.addLast(node);
        this.map.set(key, node); // key => {key, val} : MyNode
    }
    // 按key删除
    deleteKey(key) {
        let node = this.map.get(key);
        if (!node) {
            console.log("无此元素");
            return;
        }
        this.cache.remove(node);
        // key也要记得删除
        this.map.delete(key);
    }
    // 删除最久未使用
    removeLeastRecently() {
        let node = this.cache.removeFirst();
        this.map.delete(node.key);
        //这里就能回答之前的问答题「为什么要在链表中同时存储 key 和 val，而不是只存储 val」
    }

    get(key: number): number {
        let node = this.map.get(key);
        if (!node) return -1;
        this.makeRecently(node.key);
        return node.value;
    }

    put(key: number, value: number): void {
        let node = this.map.get(key);
        if (node) {
            // 存在
            // node.val = value
            // this.makeRecently(key) // 注意，这里不能用makeRecently，这样map的那个key还是会指向原来的地方，至少也得set一下
            this.deleteKey(key);
            this.map.delete(key);
            this.addRecently(key, value);
        } else {
            // 不存在
            if (this.cap === this.cache.size) {
                this.removeLeastRecently();
            }
            this.addRecently(key, value);
        }
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
