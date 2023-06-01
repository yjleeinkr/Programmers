function solution(s) {
  if (s.length !== 4 && s.length !== 6) return false;
  return [...s].every((v) => !isNaN(v));
}

const result = solution("a123");
const result2 = solution("1234");
console.log(result, result2); // false true
