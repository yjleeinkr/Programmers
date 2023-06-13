function solution1(x) {
  const digitSum = [...`${x}`].reduce((a, b) => +a + +b, 0);
  return x % digitSum === 0;
}

function solution2(x) {
  let originalX = x;
  let digitSum = 0;
  do {
    digitSum += x % 10; // 10으로 나눈 나머지 즉, 일의 자리를 sum에 더함
    x = Math.floor(x / 10); // x의 일의 자리 반복해서 떼내기
  } while (x > 0);

  return originalX % digitSum === 0;
}

[10, 12, 11, 13].forEach((x) => console.log(solution1(x)));
[10, 12, 11, 13].forEach((x) => console.log(solution2(x)));
// true true false false
