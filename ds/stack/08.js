/**
 * 괄호 짝 맞추기
 * - 소괄호가 정상으로 열고 닫혔는지 판별하는 solution 구현
 * - 정상적으로 열고 닫혔으면 true, 아니면 false 반환
 */
function solution(s) {
  const stack = [];

  for (const br of s) {
    if (br === "(") {
      stack.push(br);
    } else {
      if (stack.length === 0) return false; // 첫 시작부터 닫힌 괄호 ) 가 나오면 바로 false 반환
      stack.pop();
    }
  }

  return stack.length === 0;
}

console.log(solution("(())()")); // 반환값 : true
console.log(solution("((())()")); // 반환값 : false
console.log(solution("))()")); // 반환값 : false

/**
 *  데이터를 그냥 저장하고 순서와 상관없이 임의 접근하기만 해도 되면 배열을 사용하면 되지만
 * ✨ 최근에 삽입한 데이터를 대상으로 뭔가 연산해야 한다면 스택을 떠올리는 것이 좋다
 * 위 문제에서도 닫힌 괄호가 임의의 위치에 있는 열린 괄호와 상쇄되는 것이 아니라 닫힌 괄호가 나오기 바로 전의 가장 가까운, 가장 최신의 열린 괄호와 상쇄된다.
 * 🔥 가장 가까운, 최근 이라는 키워드를 본다면 => 스택을 떠올려보자...
 *  */
