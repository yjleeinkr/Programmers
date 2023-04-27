function solution(food) {
  const evenFood = food.map((v) => Math.trunc(v / 2)).slice(1);
  const singleLine = evenFood.map((v, i) => `${i + 1}`.repeat(v));
  const doubleLine = [...singleLine, 0, ...singleLine.reverse()].join("");
  return doubleLine;
}

// test
const result = solution([1, 3, 4, 6]);
console.log(result) // 1223330333221