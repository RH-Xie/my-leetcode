/*
 * @lc app=leetcode.cn id=225 lang=typescript
 *
 * [225] 用队列实现栈
 */

// @lc code=start
class MyStack {
    // 队列应该使用的：shift和push
    private q : Array<number> = [];
    private top_element : number = 0;
    constructor() {
    }

    push(x: number): void {
        this.q.push(x);
        this.top_element = x;
    }

    pop(): number {
        if(this.q.length !== 1) {
            this.top_element = this.q[this.q.length - 2];
        }
        else {
            this.top_element = 0;
        }
        return this.q.pop();
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

