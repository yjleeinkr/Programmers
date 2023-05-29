function solution(n) {
  let tritArr = [];
  while (n !== 0) {
    tritArr.push(n % 3);
    n = Math.trunc(n / 3);
  }
  return tritArr.reverse().reduce((acc, cur, i) => (acc += cur * 3 ** i), 0);
}

function solution2(n) {
  return parseInt([...n.toString(3)].reverse().join(""), 3);
}

const result = solution(45);
console.log(result); // 7
const result2 = solution2(45);
console.log(result2); // 7
