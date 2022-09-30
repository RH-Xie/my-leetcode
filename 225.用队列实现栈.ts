/*
 * @lc app=leetcode.cn id=225 lang=typescript
 *
 * [225] 用队列实现栈
 */

// @lc code=start
class MyStack {
    // 队列应该使用的：shift和push
    private q : Array<number> = [];
    private q2 : Array<number> = [];
    private top_element : number = 0;
    constructor() {
    }

    push(x: number): void {
        this.q.push(x);
        this.top_element = x;
    }
    // 本题的巧妙之处：我们只需一个队列
    // 由于另一队列单向进出的特点
    // 用一个变量存储长度，即可模拟另一队列
    pop(): number {
        let size = this.q.length;
        while(size > 2) {
            this.q.push(this.q.shift());
            size--;
        }
        this.top_element = this.q.shift();
        this.q.push(this.top_element);
        return this.q.shift();
    }

    top(): number {
        return this.top_element;
    }

    empty(): boolean {
        return this.q.length === 0;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end

