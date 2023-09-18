function solution(n, m, section) {
  const wall = Array(n).fill(true);
  for (let i = 0; i < section.length; i++) {
    wall[section[i] - 1] = false;
  }
  const paintBrush = Array(m).fill(true);
  let paintNum = 0;
  while (wall.includes(false)) {
    wall.splice(wall.indexOf(false), m, ...paintBrush);
    paintNum++;
  }
  return paintNum;
}

// test
const result1 = solution(8, 4, [2, 3, 6]);
const result2 = solution(5, 4, [1, 3]);
const result3 = solution(4, 1, [1, 2, 3, 4]);
console.log(result1); // 2
console.log(result2); // 1
console.log(result3); // 4

// 다른 사람의 풀이
function solution2(n, m, sections) {
  let answer = 0;
  let painted = 0;

  for (let section of sections) {
    if (painted < section) {
      answer++;
      painted = section + m - 1;
    }
  }
  return answer;
}
