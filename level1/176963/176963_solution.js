function solution(name, yearning, photo) {
  let yearningPerName = {};
  name.forEach((name, i) => {
    if (!yearning[i]) return;
    yearningPerName[name] = yearning[i]
  });
  const scoreArr = photo.map((aPhoto) => aPhoto.map((name) => yearningPerName[name] ?? 0));
  const scoreSumArr = scoreArr.map((arr) => arr.reduce((acc, cur) => acc + cur), 0);
  return scoreSumArr;
}

// test
const name = ["may", "kein", "kain", "radi"];
const yearning = [5, 10, 1, 3];
const photo = [
  ["may", "kein", "kain", "radi"],
  ["may", "kein", "brin", "deny"],
  ["kon", "kain", "may", "coni"],
];
const result = solution(name, yearning, photo); 
console.log(result) // [ 19, 15, 6 ]
