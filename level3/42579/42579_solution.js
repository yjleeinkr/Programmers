/** 내 풀이 */
function solution(genres, plays) {
  // 많이 재생된 장르부터
  // 같은 장르 > 재생횟수가 높은 노래부터
  // 같은 장르 > 재생횟수가 같다면 idx가 낮은 노래부터

  const genreMap = {};
  const playSumPerGenres = {};

  for (let i = 0; i < genres.length; i++) {
    if (genreMap[genres[i]]) genreMap[genres[i]].push([plays[i], i]);
    else genreMap[genres[i]] = [[plays[i], i]];

    playSumPerGenres[genres[i]] = (playSumPerGenres[genres[i]] || 0) + plays[i];
  }

  const genresByDesc = Object.entries(playSumPerGenres).sort(
    ([, play1], [, play2]) => play2 - play1
  );

  const anwer = [];

  genresByDesc.forEach(([genre]) => {
    genreMap[genre].sort(([play1], [play2]) => play2 - play1);
    anwer.push(...genreMap[genre].slice(0, 2));
  });

  return anwer.map(([, idx]) => idx);
}

/** 다른 풀이 */
function solution2(genres, plays) {
  let answer = [];
  const genresObj = {};
  const playObj = {};

  // 장르별 총 재생 횟수와 각 곡의 재생 횟수 저장
  for (let i = 0; i < genres.length; i++) {
    let genre = genres[i];
    let play = plays[i];

    if (!(genre in genresObj)) {
      genresObj[genre] = [];
      playObj[genre] = 0;
    }

    genresObj[genre].push([i, play]);
    playObj[genre] += play;
  }

  // 총 재생 횟수가 많은 장르 순으로 정렬
  const sortedGenres = Object.keys(playObj).sort((a, b) => {
    return playObj[b] - playObj[a];
  });

  // 각 장르 내에서 노래를 재생 횟수 순으로 정렬
  for (const genre of sortedGenres) {
    let sortedSongs = genresObj[genre].sort((a, b) => {
      return a[1] === b[1] ? a[0] - b[0] : b[1] - a[1]; // 재생 횟수 같으면 번호 오름차순으로 정렬
      // (난 어차피 순서대로 push 했기 때문에 고유번호 순으로 정렬하는 과정은 넣지 않음)
    });
    answer.push(...sortedSongs.slice(0, 2).map((song) => song[0]));
  }

  return answer;
}

const result = solution1(
  ["classic", "pop", "classic", "classic", "pop"],
  [500, 600, 150, 800, 2500]
); // [4, 1, 3, 0]

console.log(result);
