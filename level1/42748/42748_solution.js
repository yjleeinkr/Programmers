function solution(array, commands) {
  let newArr = [];
  for (let n = 0; n < commands.length; n++) {
    const [start, end, idx] = commands[n];
    const sliced = array.slice(start - 1, end).sort((a, b) => a - b);
    newArr.push(sliced[idx - 1]);
  }
  return newArr;
}

const result = solution(
  [1, 5, 2, 6, 3, 7, 4],
  [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
  ]
);
console.log(result); // [ 5, 6, 3 ]
