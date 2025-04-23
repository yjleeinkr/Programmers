/**
 *  prices 길이 2 이상 100,000 이하 => O(n^2)는 웬만하면 피하는 게 좋음..
 *  스택을 활용한 풀이 / O(n)
 */
function solution(prices) {
  const idxStack = [0];
  const answer = new Array(prices.length).fill(0);

  for (let i = 0; i < prices.length; i++) {
    while (idxStack.length > 0 && prices[i] < prices[idxStack.at(-1)]) {
      // 현재 가격이 이전 가격보다 떨어짐
      const j = idxStack.pop(); // 이전 가격 인덱스
      answer[j] = i - j; // 현재 가격 인덱스 - 이전 가격 인덱스
    }
    idxStack.push(i);
  }

  while (idxStack.length > 0) {
    const j = idxStack.pop();
    answer[j] = prices.length - 1 - j;
  }

  return answer;
}

console.log(solution([1, 2, 3, 2, 3])); // [ 4, 3, 1, 1, 0 ]
console.log(solution([1, 6, 9, 5, 3, 2, 7])); // [6, 2, 1, 1, 1, 1, 0]
/**
 * 2중 for문 / O(n^2)
 */
function solution2(prices) {
  const answer = [];

  for (let i = 0; i < prices.length; i++) {
    let count = 0;
    for (let j = i + 1; j < prices.length; j++) {
      count++;
      if (prices[i] > prices[j]) break;
    }
    answer.push(count);
  }
  return answer;
}
