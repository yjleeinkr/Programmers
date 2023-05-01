function solution(t, p) {
  let count = 0;
  for (let i = 0; i <= t.length - p.length; i++) {
    const possibleStr = t.slice(i, i + p.length);
    if (+p >= +possibleStr) count++;
  }
  return count;
}

// test "3141592"	"271"	2
const result = solution("3141592", "271");
console.log(result) // 2