/**
 * 문자열 1,000,000 이하의 자연수
 */
function solution(s) {
  if (s.length % 2 !== 0) return 0;

  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack.length === 0) {
      stack.push(s[i]);
    } else {
      const top = stack.at(-1);
      if (top === s[i]) {
        stack.pop();
      } else {
        stack.push(s[i]);
      }
    }
  }
  return stack.length === 0 ? 1 : 0;
}

function solution2(s) {
  const stack = [];

  for (const c of s) {
    if (stack.length > 0 && stack[stack.length - 1] === c) {
      stack.pop();
    } else {
      stack.push(c);
    }
  }

  return stack.length === 0 ? 1 : 0;
}

console.log(solution("baabaa")); // 1
console.log(solution("cdcd")); // 1
