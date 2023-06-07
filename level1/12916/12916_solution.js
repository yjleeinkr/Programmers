function solution(s) {
  const lowered = s.toLowerCase();
  const pQty = [...lowered].filter((p) => p === "p").length;
  const yQty = [...lowered].filter((y) => y === "y").length;
  if (pQty === 0 && yQty === 0) return true;
  return pQty === yQty;
}

// 정규식을 이용한 다른 사람 풀이
function solution2(s) {
  return s.match(/p/gi).length === s.match(/y/gi).length;
}
const result = solution("pPoooyY");
const result2 = solution("Pyy");
console.log(result, result2); // true false
