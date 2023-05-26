function solution(numbers) {
  const sum = numbers.reduce((acc, cur) => acc + cur);
  return 45 - sum;
}

const result = solution([5, 8, 4, 0, 6, 7, 9]);
console.log(result); // 6
