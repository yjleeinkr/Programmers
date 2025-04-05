// 나의 풀이
function solution(bandage, health, attacks) {
  const [maxDuration, recoverage, bonusRecoverage] = bandage;
  const [endTime] = attacks.at(-1);
  const attackMap = new Map(attacks);

  let healthAmt = health;
  let duration = 0;

  for (let t = 0; t <= endTime; t++) {
    const damage = attackMap.get(t);
    if (!damage) {
      duration += 1;
      if (healthAmt < health) healthAmt += recoverage;
      if (duration >= maxDuration) {
        healthAmt += bonusRecoverage;
        duration = 0;
      }
      if (healthAmt >= health) healthAmt = health;
    } else {
      healthAmt -= damage;
      duration = 0;
      if (healthAmt <= 0) break; // 🔴 여기를 빼먹어서 6, 9번 테스트 통과 실패함...
    }
  }
  return healthAmt <= 0 ? -1 : healthAmt;
}

// 디른 사람의 풀이
function solution2(bandage, health, attacks) {
  let curHealth = health;
  let curTime = 0;

  for (let [attackTime, damage] of attacks) {
    let diffTime = attackTime - curTime - 1; // 이전 공격 이후 붕대를 감을 수 있는 시간 (회복시간), 공격받는 타이밍은 회복 시간에 포함되지 않으므로 -1
    curHealth +=
      diffTime * bandage[1] + Math.floor(diffTime / bandage[0]) * bandage[2];
    // diffTime * bandage[1] 회복 시간 * 초당 회복량
    // Math.floor(diffTime / bandage[0]) 시전 시간만큼 연속으로 붕대를 감은 횟수
    // * bandage[2] 연속시간 충족에 따른 보너스 회복량

    if (curHealth > health) curHealth = health;
    curHealth -= damage;
    if (curHealth <= 0) return -1;
    curTime = attackTime;
  }
  return curHealth;
}

const test1 = solution([10, 10, 100], 10, [
  [1, 15],
  [3, 1],
]); // -1

const test2 = solution([5, 1, 5], 30, [
  [2, 10],
  [9, 15],
  [10, 5],
  [11, 5],
]); // 5

const test3 = solution([3, 2, 7], 20, [
  [1, 15],
  [5, 16],
  [8, 6],
]); // -1

const test4 = solution([4, 2, 7], 20, [
  [1, 15],
  [5, 16],
  [8, 6],
]); // -1

const test5 = solution([1, 1, 1], 5, [
  [1, 2],
  [3, 2],
]); // 3

console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
console.log(test5);
