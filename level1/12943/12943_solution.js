function solution(num) {
  if (num === 1) return 0;
  let count = 0;
  while (num !== 1) {
    num = num % 2 === 0 ? num / 2 : num * 3 + 1;
    count++;
    if (count >= 500 && num !== 1) return -1;
  }
  return count;
}

const result1 = solution(6);
const result2 = solution(16);
const result3 = solution(626331);

console.log(result1, result2, result3); // 8 4 -1
