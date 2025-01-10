function solution(answers) {
  const makeAnswerMap = (answerArray) => {
    return answerArray.reduce((obj, answer, i) => {
      obj[i] = answer;
      return obj;
    }, {});
  };

  const answerRule1 = makeAnswerMap([1, 2, 3, 4, 5]); // 5
  const answerRule2 = makeAnswerMap([2, 1, 2, 3, 2, 4, 2, 5]); // 8
  const answerRule3 = makeAnswerMap([3, 3, 1, 1, 2, 2, 4, 4, 5, 5]); // 10

  let score1 = 0;
  let score2 = 0;
  let score3 = 0;

  for (let i = 0; i < answers.length; i++) {
    const answer = answers[i];
    if (answerRule1[i % 5] === answer) score1++;
  }
  for (let i = 0; i < answers.length; i++) {
    const answer = answers[i];
    if (answerRule2[i % 8] === answer) score2++;
  }
  for (let i = 0; i < answers.length; i++) {
    const answer = answers[i];
    if (answerRule3[i % 10] === answer) score3++;
  }

  const studenArr = [];
  const max = Math.max(score1, score2, score3);
  if (max === score1) studenArr.push(1);
  if (max === score2) studenArr.push(2);
  if (max === score3) studenArr.push(3);
  return studenArr;
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 2, 4, 2]));

function solution2(answers) {
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  const scores = [0, 0, 0];

  for (const [i, answer] of answers.entries()) {
    for (const [j, pattern] of patterns.entries()) {
      if (answer === pattern[i % patterns.length]) {
        scores[j] += 1;
      }
    }
  }

  const maxScore = Math.max(...scores);

  const highestScores = [];
  for (let i = 0; i > scores.length; i++) {
    if (scores[i] === maxScore) {
      highestScores.push(i + 1);
    }
  }

  return highestScores;
}
console.log(solution2([1, 2, 3, 4, 5]));
console.log(solution2([1, 3, 2, 4, 2]));

// solution1 통과는 했지만 불필요한 메모리를 소비한다고 생각했다.
// solution2 답안 길이가 n, 패턴 수가 m이라 시간 복잡도가 O(mn)
// 답안 순회하면서 각 패턴을 비교하는 2중 루프를 돌기 때문에 데이터가 커질수록 계산 시간이 증가할 수 있지만 어차피 해당 문제에서 패턴은 3개로 한정되어 상수 시간에 가까우므로 시간 복잡도는 O(n)이다.
