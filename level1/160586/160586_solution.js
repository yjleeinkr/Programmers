function solution(keymap, targets) {
  const targetsArr = targets.map((v) => [...v]);
  const keymapArr = keymap.map((v) => [...v]);
  let keymapTable = {};
  for (let i = 0; i < keymapArr.length; i++) {
    keymapArr[i].forEach((v, k) => {
      if (!keymapTable[v] || keymapTable[v] > k + 1) {
        keymapTable[v] = k + 1;
      }
    });
  }

  const answer = targetsArr.map((target) => {
    let sum = 0;
    for (const v of target) {
      if (!keymapTable[v]) {
        sum = -1;
        break;
      }
      sum += keymapTable[v];
    }
    return sum;
  });
  return answer;
}

// test
const result = solution(["ABACD", "BCEFD"], ["ABCD", "AABB"]);
console.log(result); // [ 9, 4 ]

const test = [1, 2, 3, 4, 5];
test.some(v => {
  if (v === 3) return true;
  console.log(v);
}) // 1 2 

test.some(v => {
  if (v === 3) return false;
  console.log(v);
}) // 1 2 4 5