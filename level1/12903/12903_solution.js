function solution(s) {
  let isEven = s.length % 2 === 0;
  let halfS = Math.trunc(s.length / 2);
  return isEven ? s.slice(halfS - 1, halfS + 1) : s.slice(halfS, halfS + 1);
}

const result = solution("abcde");
const result2 = solution("qwer");

console.log(result, result2); // c we
