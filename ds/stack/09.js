/**
 * 10진수를 2진수로 변환하기
 * - decimal: 1억 이상 10억 미만의 자연수
 */
function solution(decimal) {
  const remainders = [];
  while (decimal > 0) {
    const remainder = decimal % 2;
    remainders.push(remainder);
    decimal = Math.trunc(decimal / 2);
  }
  return remainders.reverse().join("");
}

/** 다른 풀이
 * - 다른 건 내가 푼 풀이법과 같으나
 * - 스택의 활용을 보여주기 위해 reverse & join 사용 대신 pop을 사용했다!
 */
function solution2(decimal) {
  const remainders = [];
  while (decimal > 0) {
    const remainder = decimal % 2;
    remainders.push(remainder);
    decimal = parseInt(decimal / 2);
  }

  let binary = "";
  while (remainders.length > 0) {
    binary += remainders.pop();
  }
  return binary;
}

console.log(solution(10)); // 반환값 :  1010
console.log(solution(27)); // 반환값 :  11011
console.log(solution(12345)); // 반환값 : 11000000111001

// 괄호 회전하기
// 짝지어 제거하기
