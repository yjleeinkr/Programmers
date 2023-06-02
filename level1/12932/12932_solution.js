function solution(n) {
  return [...n.toString()].reverse().map((v) => parseInt(v));
}

const result = solution(12345);
console.log(result); // [ 5, 4, 3, 2, 1 ]
