function solution(s) {
  if (s.length % 2 !== 0) return false;

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (i === 0 && s[i] === ")") return false;
    const last = stack.at(-1);

    if (last && last === "(" && s[i] !== last) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length === 0;
}

console.log(solution("()()")); // true
console.log(solution("(())()")); // true
console.log(solution(")()(")); // false
console.log(solution("(()(")); // false
console.log(solution("(()))(")); // false
