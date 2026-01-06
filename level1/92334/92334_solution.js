// 같은 사람을 여러번 신고해도 1번밖에 누적이 안된다는 것 기억하고 문제풀기

/** 내 풀이 */
function solution(id_list, report, k) {
  const reportObj = {};
  const reportTimes = {};
  const blocked = {};

  for (const str of report) {
    const [reporter, user] = str.split(" ");
    if (!reportObj[reporter]) {
      reportObj[reporter] = [user];
    } else {
      if (reportObj[reporter].includes(user)) continue;
      else reportObj[reporter].push(user);
    }

    reportTimes[user] = (reportTimes[user] || 0) + 1;
    if (reportTimes[user] >= k && !blocked[user]) blocked[user] = true;
  }

  const answer = [];
  id_list.forEach((id) => {
    const list = reportObj[id];
    if (list) {
      let count = 0;
      list.forEach((name) => {
        if (blocked[name]) count++;
      });
      answer.push(count);
    } else {
      answer.push(0);
    }
  });
  return answer;
}

/** 다른 풀이 */
function solution2(id_list, report, k) {
  const reportedUser = {};
  const count = {};

  for (const r of report) {
    const [userId, reportedId] = r.split(" ");
    if (!reportedUser[reportedId]) {
      reportedUser[reportedId] = new Set();
    }
    reportedUser[reportedId].add(userId);
  }

  for (const reportedId of Object.keys(reportedUser)) {
    if (reportedUser[reportedId].size >= k) {
      for (const uid of reportedUser[reportedId]) {
        count[uid] = (count[uid] || 0) + 1;
      }
    }
  }

  const anwser = [];
  id_list.forEach((id) => anwser.push(count[id] || 0));

  return anwser;
}

const result = solution2(
  ["muzi", "frodo", "apeach", "neo"],
  ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
  2
); // [2, 1, 1, 0]
const result2 = solution2(
  ["con", "ryan"],
  ["ryan con", "ryan con", "ryan con", "ryan con"],
  3
); // [0, 0]

console.log(result);
console.log(result2);
