function solution(s, skip, index) {
  const sArr = [...s];
  const skipArr = [...skip];
  const alphabetArr = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 97));
  const skippedArr = alphabetArr.filter((v) => !skipArr.includes(v));
  const answer = sArr
    .map((v, i) => {
      const originalIndex = skippedArr.findIndex((alphabet) => alphabet === v);
      const changedIndex = originalIndex + index;
      return changedIndex < skippedArr.length - 1
        ? skippedArr[changedIndex]
        : skippedArr[changedIndex % skippedArr.length];
    })
    .join("");
  return answer;
}
// test 
const result = solution("aukks", "wbqd", 5);
console.log(result) // happy
