function solution(k, m, score) {
  let sum = 0;
  const sellQty = score.length - (score.length % m);
  const appleForSell = score.sort((a, b) => b - a).slice(0, sellQty);
  appleForSell.forEach((score, i) => {
    if ((i + 1) % m === 0) sum += score * m;
  });
  return sum;
}

// test
const k1 = 3
const m1 = 4
const score1 = [1, 2, 3, 1, 2, 3, 1]
const result = solution(k1, m1, score1);
console.log(result); // 8
