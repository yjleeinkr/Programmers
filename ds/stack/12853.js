// level 0 > 컨트롤 제트
// https://school.programmers.co.kr/learn/courses/30/lessons/120853

function solution(s) {
  const arr = s.split(" ");
  const stack = [];

  arr.forEach((str) => {
    if (str === "Z") stack.pop();
    else stack.push(+str);
  });

  return stack.length === 0 ? 0 : stack.reduce((a, b) => a + b);
}

console.log(solution("1 2 Z 3")); // 4
console.log(solution("10 20 30 40")); // 100
console.log(solution("10 Z 20 Z 1")); // 1
console.log(solution("10 Z 20 Z")); // 0
console.log(solution("-1 -2 -3 Z")); // -3
