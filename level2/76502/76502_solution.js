function solution(s) {
  // s를 순회하면서 열린 괄호면 push, 닫힌 괄호면 pop
  const stack = [];

  function checkIsCorrect(str) {
    for (const brk of str) {
      const isFirst = stack.length === 0;
      switch (brk) {
        case "(":
        case "{":
        case "[":
          stack.push(brk);
          break;
        case ")":
          if (isFirst) return false;
          if (stack.at(-1) === "(") stack.pop();
          break;
        case "}":
          if (isFirst) return false;
          if (stack.at(-1) === "{") stack.pop();
          break;
        case "]":
          if (isFirst) return false;
          if (stack.at(-1) === "[") stack.pop();
          break;
      }
    }
    return stack.length === 0;
  }

  const brackets = [...s];
  // s의 길이만큼 순회를 돈다
  let answer = 0;
  for (let i = 0; i < brackets.length; i++) {
    const isCorrectString = checkIsCorrect(brackets);
    if (isCorrectString) answer++;
    // s의 앞쪽을 잘라서 뒤로 보내기
    const firstBracket = brackets.shift();
    brackets.push(firstBracket);
  }
  return answer;
}

function solution2(s) {
  if (s.length % 2 !== 0) return 0;
  let answer = 0;
  const mapping = { "(": ")", "{": "}", "[": "]" };

  for (let i = 0; i < s.length; i++) {
    const stack = [];
    const rotateBrackets = s.slice(i) + s.slice(0, i);
    // str.slice(i) i번째~끝까지까지 자름
    // str.slice(0, i) 첫번째~i-1번째까지 자름
    let isCorrect = true;

    for (let j = 0; j < s.length; j++) {
      const curBracket = rotateBrackets[j];
      if (curBracket === "(" || curBracket === "{" || curBracket === "[") {
        stack.push(curBracket);
      } else {
        const last = stack.pop();
        if (mapping[last] !== curBracket) {
          isCorrect = false;
          break;
        }
      }
    }
    if (isCorrect) answer++;
  }

  return answer;
}
/** 문자열 회전 시 (맨 앞을 잘라 맨 뒤로 보내는 회전)
 * 진짜 문자열을 회전시키면 연산 비용이 많이 들기 때문에 인덱스 활용한 풀이 */
function solution3(s) {
  let answer = 0;
  const mapping = { "(": ")", "{": "}", "[": "]" };

  for (let i = 0; i < s.length; i++) {
    const stack = [];
    let isCorrect = true;
    for (let j = 0; j < s.length; j++) {
      const cur = s[(i + j) % s.length]; // 0~문자열길이까지 시작점 회전시키기 -> (i+j) % 문자열길이
      if (cur === "(" || cur === "{" || cur === "[") {
        stack.push(cur);
      } else {
        if (stack.length === 0) {
          isCorrect = false;
          break;
        }
        const top = stack.at(-1);
        if (cur === mapping[top]) {
          stack.pop();
        } else {
          isCorrect = false;
          break;
        }
      }
    }
    if (isCorrect && stack.length === 0) answer++;
    // stack.length === 0 추가한 이유: 여는 괄호만 있어서 isCorrect 값이 바뀌지 않을 수도 있기 때문에
    // 모든 괄호의 짝이 올바른 경우엔 스택에서 다 빠져나갔을 것이므로 스택이 비어있는 조건까지 추가
  }
  return answer;
}

console.log(solution("[](){}")); // 3
console.log(solution("}]()[{")); // 2
console.log(solution("[)(]")); // 0
console.log(solution("}}}")); // 0
