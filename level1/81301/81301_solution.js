const words = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

function solution(s) {
  const words3 = ["one", "two", "six"];
  const words4 = ["zero", "four", "five", "nine"];
  const words5 = ["three", "seven", "eight"];

  if (!isNaN(s)) return Number(s);
  let letters = "";
  let arr = [];
  for (let letter of [...s]) {
    if (!isNaN(letter)) {
      arr.push(letter);
      continue;
    }
    letters += letter;
    if (
      (letters.length === 3 && words3.includes(letters)) ||
      (letters.length === 4 && words4.includes(letters)) ||
      (letters.length === 5 && words5.includes(letters))
    ) {
      arr.push(words[letters]);
      letters = "";
    }
  }
  return Number(arr.join(""));
}

// ✨ 배열 메소드를 활용한 방법
function solution2(s) {
  const numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let answer = s;
  for (let i = 0; i < numbers.length; i++) {
    const splited = answer.split(numbers[i]);
    answer = splited.join(i);
  }
  return Number(answer);
}

function solution3(s) {
  let answer = s;
  for (let word in words) {
    const regExp = new RegExp(word, "g");
    answer = answer.replace(regExp, words[word]);
  }
  return Number(answer);
}

const result1 = solution("one4seveneight");
const result2 = solution2("one4seveneight");
const result3 = solution2("one4seveneight");
const result1_1 = solution("2three45sixseven");
const result2_1 = solution2("2three45sixseven");
const result3_1 = solution2("2three45sixseven");
console.log(result1); // 1478
console.log(result2); // 1478
console.log(result3); // 1478
console.log(result1_1); // 234567
console.log(result2_1); // 234567
console.log(result3_1); // 234567
