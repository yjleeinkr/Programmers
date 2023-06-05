function solution1(n, m) {
  let answer = "";
  const star = "*".repeat(n);
  for (let i = 0; i < m; i++) {
    if (i === m - 1) {
      answer += `${star}`;
    } else {
      answer += `${star}\n`;
    }
    // 마지막에선 개행을 하고 싶지않아서 if문을 추가했다.
    // 삼항 연산자를 선호하지만 여기선 if-else 문이 가독성 측면에서 좀 더 나아보임
    // i === m - 1 ? (answer += `${star}`) : (answer += `${star}\n`);
  }
  return answer;
}

function solution2(n, m) {
  let star = "";
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      star += "*";
    }
    if (i !== m - 1) star += "\n";
  }
  return star;
}

// repeat 메소드를 두번 사용한 경우! 이 경우엔 마지막 개행부분을 제거하지 못했다.
function solution3(n, m) {
  const star = `${"*".repeat(n)}\n`.repeat(m);
  return star;
}

const result1 = solution1(5, 3);
console.log(result1);
console.log("-----------");
const result2 = solution2(5, 3);
console.log(result2);
console.log("-----------");
const result3 = solution3(5, 3);
console.log(result3);

/*
결과는 아래와 같다!
*****
*****
*****
-----------
*****
*****
*****
-----------
*****
*****
*****

*/
