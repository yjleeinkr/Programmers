function solution(arr, divisor) {
  let answer = [];
  arr.forEach((num) => num % divisor === 0 && answer.push(num));
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}

const result1 = solution([5, 9, 7, 10], 5);
const result2 = solution([3, 2, 6], 10);

console.log(result1, result2); // [ 5, 10 ] [ -1 ]
