function solution(n) {
  return +[...`${n}`].sort((a, b) => b - a).join("");
}

const result = solution(118372);
console.log(result); // 873211
