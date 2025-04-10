function solution(wallpaper) {
  let minRow = null;
  let minCol = null;
  let maxRow = 0;
  let maxCol = 0;

  for (let row = 0; row < wallpaper.length; row++) {
    const rows = wallpaper[row];
    const colIdx = rows.indexOf("#");
    if (colIdx < 0) continue; // # 없을 경우 다음 루프로

    const lastColIdx = rows.lastIndexOf("#");
    // #이 하나라도 있을 경우 minRow, minCol 설정
    if (minRow === null) minRow = row; // row는 루프를 돌수록 커지기 때문에 최소 row를 구하는 것이므로 값이 할당되지 않았을 경우(null)에만 row 할당
    maxRow = row; // row는 반복할 수록 커지므로 maxRow에 항상 row 재할당
    if (minCol === null || minCol > colIdx) minCol = colIdx; // col에 아무값도 할당되지 않았거나 최소col이 첫 파일 위치보다 클 경우 재할당
    if (maxCol < lastColIdx) maxCol = lastColIdx; // 최대col이 한 row의 마지막 파일 위치보다 작을 경우 재할당
  }

  return [minRow, minCol, maxRow + 1, maxCol + 1];
}

function solution2(wallpaper) {
  let left = []; // 최소 x
  let top = []; //최소 y
  let right = []; // 최대 x
  let bottom = []; // 최대 y

  wallpaper.forEach((filePos, i) => {
    [...filePos].forEach((pos, idx) => {
      if (pos === "#") {
        left.push(i);
        top.push(idx);
        right.push(i + 1);
        bottom.push(idx + 1);
      }
    });
  });
  return [
    Math.min(...left),
    Math.min(...top),
    Math.max(...right),
    Math.max(...bottom),
  ];
}

console.log(solution([".#...", "..#..", "...#."])); //  0, 1, 3, 4 ]
console.log(
  solution([
    "..........",
    ".....#....",
    "......##..",
    "...##.....",
    "....#.....",
  ])
); // [1, 3, 5, 8]
console.log(
  solution([
    ".##...##.",
    "#..#.#..#",
    "#...#...#",
    ".#.....#.",
    "..#...#..",
    "...#.#...",
    "....#....",
  ])
); // [ 0, 0, 7, 9 ]
console.log(solution(["..", "#."])); // [ 1, 0, 2, 1 ]
