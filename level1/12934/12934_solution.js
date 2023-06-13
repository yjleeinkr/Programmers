function solution(n) {
  const rootN = Math.sqrt(n);
  return parseInt(rootN) === rootN ? Math.pow(rootN + 1, 2) : -1;
}

const result1 = solution(121);
const result2 = solution(3);
console.log(result1, result2); // 144 -1
