function solution(n, k, cmd) {
  const up = [...new Array(n + 2)].map((_, i) => i - 1);
  const down = [...new Array(n + 1)].map((_, i) => i + 1);

  const deleted = [];

  k = k + 1;

  for (const command of cmd) {
    const [action, num] = command.split(" ");
    switch (action) {
      case "U":
        for (let i = 0; i < num; i++) {
          k = up[k];
        }
        break;
      case "D":
        for (let i = 0; i < num; i++) {
          k = down[k];
        }
        break;
      case "C":
        deleted.push(k);
        up[down[k]] = up[k];
        down[up[k]] = down[k];
        k = n < down[k] ? up[k] : down[k];
        break;
      case "Z":
        const reverted = deleted.pop();
        up[down[reverted]] = reverted;
        down[up[reverted]] = reverted;
        break;
    }
  }

  const answer = new Array(n).fill("O");
  for (const row of deleted) {
    answer[row - 1] = "X";
  }
  return answer.join("");
}

const test1 = solution(8, 2, [
  "D 2",
  "C",
  "U 3",
  "C",
  "D 4",
  "C",
  "U 2",
  "Z",
  "Z",
]);
const test2 = solution(8, 2, [
  "D 2",
  "C",
  "U 3",
  "C",
  "D 4",
  "C",
  "U 2",
  "Z",
  "Z",
  "U 1",
  "C",
]);
console.log(test1); // OOOOXOOO
console.log(test2); // OOXOXOOO
