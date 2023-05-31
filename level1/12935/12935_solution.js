function solution(arr) {
  if (arr.length === 1) return [-1];
  const min = Math.min(...arr);
  return arr.filter((v) => v !== min);
}

const result = solution([4, 3, 2, 1]);
const result2 = solution([10]);

console.log(result); // [ 4, 3, 2 ]
console.log(result2); // [ -1 ]
