function helper(num: number) {
  num -= 1;
  console.log(num);
  if(num === 0) return true;
  return num === 1 && helper(num);
}
// 测试结果表明，===的优先级比&&高！
// MDN文档上的排序是反过来的，比如逗号","最低，优先级为1，而&&的优先级是5，比逗号高。
console.log(helper(2));