function solution(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i - 1] === arr[i]) {
      continue;
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

function solution2(arr) {
  return arr.filter((v, i) => v !== arr[i - 1]);
}

const result1 = solution([1, 1, 3, 3, 0, 1, 1]);
const result2 = solution2([1, 1, 3, 3, 0, 1, 1]);
console.log(result1) // [ 1, 3, 0, 1 ]
console.log(result2) // [ 1, 3, 0, 1 ]
