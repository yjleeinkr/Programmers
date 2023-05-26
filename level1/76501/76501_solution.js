function solution(absolutes, signs) {
  return absolutes.reduce((acc, cur, i) => {
    return signs[i] ? (acc += cur) : (acc -= cur);
  }, 0);
}

const result = solution([4, 7, 12], [true, false, true]);
console.log(result); // 9
