/**
 * 斐波那契数列
 * 迭代
 * 递归
 * 递归优化
 */

// 迭代
export function fibonacciIterative(n: number) {
  if (n < 1) { return 0; }
  let fibNMinus2 = 0;
  let fibNMinus1 = 1;
  let fibN = n;
  for (let i = 2; i <= n; i++) {
    fibN = fibNMinus1 + fibNMinus2;
    fibNMinus2 = fibNMinus1;
    fibNMinus1 = fibN;
  }
  return fibN;
}



// 递归
export function fibonacci(n: number): number {
  if (n < 1) { return 0; }
  if (n <= 2) { return 1; }
  return fibonacci(n - 1) + fibonacci(n - 2);
}




// 递归优化
export function fibonacciMemoization(n: number) {
  if (n < 1) { return 0; }
  const memo = [0, 1]; // 缓存不用重新计算直接返回
  const fibonacciMem = (num: number): number => {
    if (memo[num] != null) { return memo[num]; }
    return (memo[num] = fibonacciMem(num - 1) + fibonacciMem(num - 2));
  };
  return fibonacciMem(n);
}
