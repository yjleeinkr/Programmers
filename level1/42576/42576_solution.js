function solution(participant, completion) {
  const partipantNum = {};
  participant.forEach((name) => {
    const num = partipantNum[name];
    if (!num) partipantNum[name] = 1;
    else partipantNum[name]++;
  });

  completion.forEach((v) => partipantNum[v]--);

  return Object.keys(partipantNum).find((name) => partipantNum[name] > 0);
}

const result = solution(["leo", "kiki", "eden"], ["eden", "kiki"]);
const result2 = solution(
  ["marina", "josipa", "nikola", "vinko", "filipa"],
  ["josipa", "filipa", "marina", "nikola"]
);
const result3 = solution(
  ["mislav", "stanko", "mislav", "ana"],
  ["stanko", "ana", "mislav"]
);
console.log(result); // leo
console.log(result2); // vinko
console.log(result3); // mislav
