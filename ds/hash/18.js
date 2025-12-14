/** 두 개의 수로 특정 값 만들기 arr 내에서 합이 target인 두 수가 있으면 true, 아니면 false 반환 */
/** 내 풀이 */
function solution(arr, target) {
  const pairs = arr.reduce((res, cur) => {
    if (target > cur) {
      res[cur] = target - cur;
    }
    return res;
  }, {});

  let answer = false;

  for (const key of arr) {
    const pair1 = pairs[key];
    const pair2 = pairs[pair1];

    if (pair2 && pair1 !== pair2) {
      answer = true;
      break;
    }
  }
  return answer;
}
console.log(solution([1, 2, 3, 4, 8], 6)); // true
console.log(solution([2, 3, 5, 9], 10)); // false

/** 계수 정렬 알고리즘 사용
 * - 배열을 순회하며 각 원소의 등장 횟수를 세는 작업 수행
 */
function countSort(arr, target) {
  const hashtable = new Array(target + 1).fill(0);

  for (const num of arr) {
    if (num <= target) {
      hashtable[num] = 1;
    }
  }
  return hashtable;
}

function solution2(arr, target) {
  const hashtable = countSort(arr, target);

  for (const num of arr) {
    const complement = target - num;
    if (
      complement !== num &&
      complement >= 0 &&
      complement <= target &&
      hashtable[complement] === 1
    ) {
      return true;
    }
  }
  return false;
}

console.log(solution2([1, 2, 3, 4, 8], 6)); // true
console.log(solution2([2, 3, 5, 9], 10)); // false
