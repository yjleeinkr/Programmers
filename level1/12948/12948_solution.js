function solution(phone_number) {
  const hiddenLength = phone_number.length - 4;
  const backNum = phone_number.slice(hiddenLength);
  return "*".repeat(hiddenLength).concat(backNum);
}

const result = solution("01033334444");
const result2 = solution("027778888");

console.log(result, result2); // *******4444 *****8888
