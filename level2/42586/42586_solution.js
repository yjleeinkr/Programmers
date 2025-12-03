/**
 * - progresses: 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열
 * - speeds: 작업의 개발 속도
 * - return: 각 배포마다 몇 개의 기능이 배포되는지
 */
function solution(progresses, speeds) {
  // 기능별 작업 일수
  const workingDays = progresses.map((progress, i) =>
    Math.ceil((100 - progress) / speeds[i])
  );

  // 다음 작업일수가 같거나 더 작으면 같이 배포 더 클 경우 다음 턴에 배포 count만 하고 배포는 아직 하지 않는다.
  const deploys = [];
  let count = 0;
  // 최대 작업 일수
  let maxWorkingDay = workingDays[0];

  for (let i = 0; i < workingDays.length; i++) {
    if (maxWorkingDay >= workingDays[i]) {
      count++;
    } else {
      deploys.push(count);
      count = 1; // count 초기화
      maxWorkingDay = workingDays[i]; // 가장 큰 작업 일수 변경
    }
  }
  // ⭐️ 마지막으로 count만 한 작업도 배포에 넣어준다.
  deploys.push(count);
  return deploys;
}

console.log(solution([93, 30, 55], [1, 30, 5])); // [2, 1]
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); // [1,3,2]
console.log(solution([99, 99, 99], [1, 1, 1])); // [3]
console.log(solution([90, 30, 55], [1, 30, 5])); // [3]
console.log(solution([99, 99, 99, 10], [1, 1, 1, 1])); // [3, 1]
