// 给定数组a(长度为n)，i>=0且a[i]>0, 求0<=i<j<=n下max((a[i] - a[j]) /  a[i])
// 要求时间复杂度为O(n)

// 如题，等价于max(1 - a[j]/a[i])，即max(a[i]/a[j])，即a[i]↑ a[j]↓
// 思路：j从第二个数开始往右扫，依次计算与左边数组最大值的结果
function minus(a: number[]): number {
    let res = -Infinity;
    let max_i = 0;
    for (let j = 1; j < a.length; j++) {
        max_i = a[max_i] > a[j - 1] ? max_i : j - 1;
        res = Math.max(res, 1 - a[j] / a[max_i]);
    }
    console.log(max_i);
    return res;
}

console.log(minus([10, 100, 10000, 1000]));
