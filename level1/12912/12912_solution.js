function solution(a, b) {
  if (a === b) return a;
  let answer = 0;
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    answer += i;
  }
  return answer;
}

const result1 = solution(3, 5);
const result2 = solution(5, 3);

console.log(result1, result2); // 12 12
