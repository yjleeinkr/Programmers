/** 문자열 해싱을 이용한 검색 함수 만들기
 * - 각 queryList에 있는 문자열이 stringList에 있는지 여부를 확인
 * - 있으면 true, 없으면 false
 * */

/** 내 풀이 */
function solution(stringList, queryList) {
  const stringDic = stringList.reduce((acc, cur) => {
    acc[cur] = true;
    return acc;
  }, {});

  return queryList.map((query) => stringDic[query] || false);
}

function getHash(words) {
  const p = 31; // 소수
  const m = 1_000_000_007; // 버킷 크기 10^9 + 7 (_는 읽기 편하게 쓰는 구분자를 뜻함)
  // int32 범위 안에서 다루기 좋은 매우 큰 소수
  // 모듈러 연산(나머지를 구하는 연산)에 쓰이는 소수는 값이 작으면 해시값이 겹치기 쉽지만 크면 클수록 해시 충돌 확률이 낮아짐
  // mod 연산은 큰 숫자를 다룰 때 숫자가 폭발적으로 커지는 걸 방지하기 위한 것 (숫자를 작게 유지하기 위해서 쓰인다)
  let hashValue = 0;
  for (let i = 0; i < words.length; i++) {
    hashValue = (hashValue * p + words[i].charCodeAt()) % m;
  }
  return hashValue;
}

/** 해시를 사용한 문제 풀이 O(N+K)*/
function solution2(stringList, queryList) {
  const hashList = stringList.map((str) => getHash(str)); // O(N)

  const answer = [];

  // O(K)
  for (const query of queryList) {
    const queryHash = getHash(query);
    if (hashList.includes(queryHash)) {
      answer.push(true);
    } else {
      answer.push(false);
    }
  }

  return answer;
}

console.log(
  solution(["apple", "banana", "cherry"], ["banana", "kiwi", "melon", "apple"])
); // [ true, false, false, true ]
console.log(
  solution2(["apple", "banana", "cherry"], ["banana", "kiwi", "melon", "apple"])
); // [ true, false, false, true ]
