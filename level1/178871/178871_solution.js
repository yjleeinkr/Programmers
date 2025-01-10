function solution(players, callings) {
  const playerList = {};
  const rankList = {};

  // 선수-등수, 등수-선수 객체 만들기
  players.forEach((player, i) => {
    playerList[player] = i;
    rankList[i] = player;
  });

  for (let calling of callings) {
    const lostPlayer = rankList[playerList[calling] - 1]; // 진 선수의 이름

    playerList[lostPlayer] += 1;
    playerList[calling] -= 1;

    rankList[playerList[lostPlayer]] = lostPlayer;
    rankList[playerList[calling]] = calling;
  }

  return Object.values(rankList);
}

const result = solution(
  ["mumu", "soe", "poe", "kai", "mine"],
  ["kai", "kai", "mine", "mine"]
);

const result2 = solution(
  ["mumu", "soe", "poe", "kai", "mine"],
  ["soe", "kai", "kai", "poe", "mine"]
);

console.log(result); // [ 'mumu', 'kai', 'mine', 'soe', 'poe' ]
console.log(result2); // [ 'soe', 'kai', 'poe', 'mine', 'mumu' ]
