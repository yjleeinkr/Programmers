function solution(n) {
  return n % 2 === 0
    ? "수박".repeat(n / 2)
    : "수박".repeat(Math.trunc(n / 2)) + "수";
}

const result = solution(5);
console.log(result) // 수박수박수
