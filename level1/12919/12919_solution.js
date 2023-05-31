function solution(seoul) {
  const idx = seoul.findIndex((x) => x === "Kim");
  // const idx = seoul.indexOf('Kim')
  return `김서방은 ${idx}에 있다`;
}

const result = solution(["Jane", "Kim"]);
console.log(result); // 김서방은 1에 있다
