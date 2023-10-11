function solution(strings, n) {
  const callback = (a, b) => {
    if (a[n] < b[n]) return -1;
    if (a[n] > b[n]) return 1;
    if (a[n] === b[n]) return a < b ? -1 : 1;
  };
  return strings.sort(callback);
}
const result1 = solution(["sun", "bed", "car"], 1);
const result2 = solution(["abce", "abcd", "cdx"], 2);
console.log(result1); // [ 'car', 'bed', 'sun' ]
console.log(result2); // [ 'abcd', 'abce', 'cdx' ]
