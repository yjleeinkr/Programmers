function solution(N, stages) {
  // N 스테이지 개수
  // 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 stages

  // 각 자연수 사용자가 현재 도전중인 스테이지 번호
  // N+1 마지막 스테이지까지 클리어한 사용자 나타냄

  // 1. stage별 실패한 사용자 수를 알아낸다. {2: 3, 1: 1...}

  const failedUsersPerStage = stages.reduce((result, stage) => {
    if (!result[stage]) result[stage] = 1;
    else result[stage] = result[stage] + 1;
    return result;
  }, {});

  // 2. 각 스테이지별로 현재 단계에서 실패한 사용자/(총 사용자 수 - 이전 단계에서 실패한 사용자 수) 를 구해서 객체에 저장
  let totalUser = stages.length;
  let failedUsersOnPrevStage = 0;
  let failureRatePerStage = {};

  for (let i = 1; i <= N; i++) {
    const currentUsers = totalUser - failedUsersOnPrevStage;

    if (!failedUsersPerStage[i]) {
      failureRatePerStage[i] = 0;
      continue;
    }
    failureRatePerStage[i] = failedUsersPerStage[i] / currentUsers;
    failedUsersOnPrevStage = failedUsersOnPrevStage + failedUsersPerStage[i];
  }
  const sortedRates = Object.entries(failureRatePerStage).sort(
    ([, aRate], [, bRate]) => bRate - aRate
  );

  const answer = []; // 실패율이 높은 스테이지부터 내림차순으로 스테이지 번호가 담겨있는 배열
  sortedRates.forEach(([stage]) => answer.push(+stage));
  // 4. 실패율 sorting 하고 내림차순으로..
  return answer;
}
// 1 1 8 1/8
// 2 3 8-1=7 3/7
// 3 2 7-3=4 2/4
// 4 1 4-2=2 1/2
// 5 0 2-1=1 0/1

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])); //[ 3, 4, 2, 1, 5 ]
console.log(solution(4, [4, 4, 4, 4, 4])); // [4, 1, 2,3 ]

function solution2(N, stages) {
  // 1. 스테이지별 도전자 수 구하기
  const challenger = new Array(N + 2).fill(0);
  for (const stage of stages) {
    challenger[stage] += 1;
  }

  // 2. 스테이지별 실패한 사용자 수 계산
  const fails = {};
  let total = stages.length;

  // 3. 각 스테이지 돌며 실패율 계산
  for (let i = 1; i <= N; i++) {
    // 4. 도전한 사람 없는 경우 실패율 0
    if (challenger[i] === 0) {
      fails[i] = 0;
      continue;
    }
    // 5. 실패율 계산
    fails[i] = challenger[i] / total;
    // 6. 다음 스테이지 실패율 구하기 위해 현재 스테이지 인원 빼기
    total -= challenger[i];
  }
  // 7. 실패율 높은 스테이지부터 내림차순 정렬
  const result = Object.entries(fails).sort((a, b) => b[1] - a[1]);

  return result.map((v) => Number(v[0]));
}

console.log(solution2(5, [2, 1, 2, 6, 2, 4, 3, 3])); //[ 3, 4, 2, 1, 5 ]
console.log(solution2(4, [4, 4, 4, 4, 4])); // [4, 1, 2,3 ]
