function solution(s) {
  let idxArr = [];
  let strArr = [];
  for (let i = 0; i < s.length; i++) {
    const originalArr = [...s];
    const idx = [...strArr].lastIndexOf(originalArr[i]);
    strArr.push(originalArr[i]);
    idx === -1 ? idxArr.push(-1) : idxArr.push(i - idx);
  }
  return idxArr;
}

const result = solution("banana");
console.log(result); // [ -1, -1, -1, 2, 2, 2 ]

const result2 = solution("foobar");
console.log(result2); // [ -1, -1, 1, -1, -1, -1 ]

function betterSolution(s) {
  const hashTable = {};

  return [...s].map((v, i) => {
    let idxArr = hashTable[v] !== undefined ? i - hashTable[v] : -1;
    hashTable[v] = i;
    return idxArr;
  })
}
