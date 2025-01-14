// 캐릭터가 처음 걸어본 길의 길이 answer;
// 좌표 넘어가는 건 무시
function solution(dirs) {
  let current = [0, 0];
  const records = [current];

  const movement = {
    U: [0, 1],
    D: [0, -1],
    R: [1, 0],
    L: [-1, 0],
  };
  for (const dir of dirs) {
    const [moveX, moveY] = movement[dir]; // 0 1

    const newX = current[0] + moveX;
    const newY = current[1] + moveY;

    if (newX < -5 || newX > 5 || newY < -5 || newY > 5) continue;
    current = [newX, newY]; // [0, 1] [1,0]
    records.push(current);
  }

  const fromTo = new Map();
  for (let i = 0; i < records.length - 1; i++) {
    const prev = records[i];
    const next = records[i + 1];
    const key = `${prev}${next}`;
    const reverseKey = `${next}${prev}`;
    if (!fromTo.get(key) && !fromTo.get(reverseKey)) fromTo.set(key, 1);
  }
  return fromTo.size;
}

solution("ULURRDLLU"); // 7
solution("LULLLLLLU"); // 7
solution("URULDD"); // 6 🔴 반례를 생각하지 못했다!

// 책에서 제공한 풀이
//

function isValidMove(nx, ny) {
  // 주어진 좌표를 벗어나는지 체크
  return nx >= -5 && nx <= 5 && ny >= -5 && ny <= 5;
}

function updateLocation(x, y, dir) {
  // 명령어별로 다음 좌표 업데이트
  switch (dir) {
    case "U":
      return [x, y + 1];
    case "D":
      return [x, y - 1];
    case "R":
      returm[(x + 1, y)];
    case "L":
      return [x - 1, y];
  }
}

function solution2(dirs) {
  let x = 0;
  let y = 0;

  const visited = new Set(); // 겹치는 좌표 없게 하기 위해서 Set 사용

  for (const dir of dirs) {
    const [nx, ny] = updateLocation(x, y, dir);
    if (!isValidMove(nx, ny)) continue;

    visited.add(`${x}${y}${nx}${ny}`); // A->B로 간 경우와 B->A로 간 경우 둘다 추가
    visited.add(`${nx}${ny}${x}${y}`);

    [x, y] = [nx, y]; // 좌표 이동 후 업데이트
  }
  return visited.size / 2; // A->B로 간 경우와 B->A로 간 경우 둘다 추가했기 때문에
}
