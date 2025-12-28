function solution(record) {
  const answer = [];
  const nameMap = {};

  for (const rec of record) {
    const [dir, uid, name] = rec.split(" ");
    if (dir === "Enter" || dir === "Change") nameMap[uid] = name;
  }

  for (const rec of record) {
    const [dir, uid] = rec.split(" ");
    switch (dir) {
      case "Enter":
        answer.push(`${nameMap[uid]}님이 들어왔습니다.`);
        break;
      case "Leave":
        answer.push(`${nameMap[uid]}님이 나갔습니다.`);
        break;
      case "Change":
        break;
    }
  }
  return answer;
}

const result = solution([
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
]);

console.log(result);
//
/**
 * ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]
 * */
