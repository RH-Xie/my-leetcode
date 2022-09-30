/*
 * @lc app=leetcode.cn id=232 lang=typescript
 *
 * [232] 用栈实现队列
 */

// @lc code=start
class MyQueue {
    public stack : Array<number> = [];
    public _stack : Array<number> = [];
    constructor() {

    }

    push(x: number): void {
        this.stack.push(x);
    }

    pop(): number {
        this.peek();
        return this._stack.pop();
    }

    peek(): number {
        if(this._stack.length === 0) {
            while(!(this.stack.length === 0)) {
                this._stack.push(this.stack.pop());
            }
        }
        return this._stack[this._stack.length - 1];
    }

    empty(): boolean {
        return (this.stack.length === 0)
        && (this._stack.length === 0);
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

