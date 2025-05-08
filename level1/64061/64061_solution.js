function solution(board, moves) {
  let anwer = 0;

  const stack = [];

  for (const move of moves) {
    let lastRow = 0;
    let toy = board[lastRow][move - 1]; // 인형 선택
    // 인형이 없고 && lastRow가 기계 마지막 줄보다 작다면
    while (toy === 0 && lastRow < board.length - 1) {
      lastRow++; // 다음 줄로 넘어간다.
      toy = board[lastRow][move - 1]; // 다음줄로 넘어가서 인형 선택
    }

    if (toy === 0) continue; // 여전히 toy가 없다면 그냥 다음 move로 넘어간다.

    if (stack.length === 0) {
      stack.push(toy);
    } else {
      const lastToy = stack.at(-1);
      if (lastToy === toy) {
        stack.pop();
        anwer++;
      } else {
        stack.push(toy);
      }
    }
    board[lastRow][move - 1] = 0; // 뽑았으면 0으로 만들어주기
  }

  return anwer * 2;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
); // 4

/** 다른 사람들의 풀이 */
function solution2(board, moves) {
  /** 행과 열을 바꿔줌 */
  const transpose = (matrix) => {
    return matrix.reduce(
      (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
      []
    );
  };
  console.log(transpose(board));
  /**
   * [
  [ 0, 0, 0, 4, 3 ],
  [ 0, 0, 2, 2, 5 ],
  [ 0, 1, 5, 4, 1 ],
  [ 0, 0, 0, 4, 3 ],
  [ 0, 3, 1, 2, 1 ]
]
   */
  const stacks = transpose(board).map((row) =>
    row.reverse().filter((toy) => toy !== 0)
  ); // [ [ 3, 4 ], [ 5, 2, 2 ], [ 1, 4, 5, 1 ], [ 3, 4 ], [ 1, 2, 1, 3 ] ]
  const basket = [];
  let result = 0;

  for (const move of moves) {
    const pop = stacks[move - 1].pop();
    if (!pop) continue;
    if (pop === basket[basket.length - 1]) {
      basket.pop();
      result += 2;
      continue;
    }
    basket.push(pop);
  }
  return result;
}

console.log(
  solution2(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
