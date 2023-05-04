function solution(s, n) {
  const upperCase = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 65));
  const lowerCase = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 97));
  let newLetter = "";
  for (const letter of [...s]) {
    let alphabets = letter.toUpperCase() === letter ? upperCase : lowerCase;
    let ogIdx = alphabets.findIndex((alphabet) => alphabet === letter);
    if (ogIdx === -1) {
      newLetter += " ";
      continue;
    }
    let changedIdx = ogIdx + n > 25 ? ogIdx + n - 26 : ogIdx + n;
    newLetter += alphabets[changedIdx];
  }
  return newLetter;
}

// test
const result = solution("a B z", 4);
console.log(result); // e F d