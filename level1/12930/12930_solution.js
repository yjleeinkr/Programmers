function solution(s) {
  const arr = s.split("");
  let newArr = [];
  let k = 0;
  for (const v of arr) {
    if (v === " ") {
      k = 0;
      newArr.push(" ");
      continue;
    }
    k % 2 === 0 ? newArr.push(v.toUpperCase()) : newArr.push(v.toLowerCase());
    k++;
  }
  return newArr.join("");
}

const result = solution("try hello world");
console.log(result) // TrY HeLlO WoRlD
