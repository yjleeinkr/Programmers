// 왜 이렇게 풀었지?
function solution(s) {
  const lower = [];
  const upper = [];

  for (const ele of [...s]) {
    ele.toUpperCase() !== ele ? lower.push(ele) : upper.push(ele);
  }
  const sortedLower = lower.sort((a, b) => b.charCodeAt() - a.charCodeAt());
  const sortedUpper = upper.sort((a, b) => b.charCodeAt() - a.charCodeAt());

  return [...sortedLower, ...sortedUpper].join("");
}

// 간단한 솔루션
function solution2(s) {
  return [...s].sort().reverse().join("");
}

const result = solution("Zbcdefg");
const result2 = solution2("Zbcdefg");

console.log(result); // gfedcbZ
console.log(result2); // gfedcbZ
