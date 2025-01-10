function solution(k, scores) {
  let answer = [];
  let fameHall = [];
  for (let i = 0; i < scores.length; i++) {
    if (i < k) {
      fameHall.push(scores[i]);
      fameHall.sort((a, b) => b - a);
    } else if (fameHall[fameHall.length - 1] < scores[i]) {
      // 명전 최하위 < 현재 점수
      fameHall.pop();
      fameHall.push(scores[i]);
      fameHall.sort((a, b) => b - a);
    }
    answer.push(fameHall[fameHall.length - 1]);
  }
  return answer;
}

const result = solution(3, [10, 100, 20, 150, 1, 100, 200]);
const result2 = solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]);
console.log(result); // [10, 10, 10, 20, 20, 100, 100]
console.log(result2); // [0, 0, 0, 0, 20, 40, 70, 70, 150, 300]
