function canDiscountAll(want, discount) {
  const wantKey = Object.keys(want);
  return !wantKey.some((key) => want[key] > (discount[key] || 0));
}

/** 내풀이 */
function solution(want, number, discount) {
  const wantQty = {};
  want.forEach((pdt, i) => {
    wantQty[pdt] = number[i];
  });

  let start = 0;
  const availables = [];

  while (start < discount.length) {
    const available = {};
    const end = start + 10 < discount.length ? start + 10 : discount.length;

    for (let day = start; day < end; day++) {
      available[discount[day]] = (available[discount[day]] || 0) + 1;
    }
    availables.push(available);
    start++;
  }

  let answer = 0;

  availables.forEach((available) => {
    if (canDiscountAll(wantQty, available)) answer++;
  });

  return answer;
}

function isShallowEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (const key of keys1) {
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
}

/** 다른 풀이 */
function solution2(want, number, discount) {
  const wnatObj = {};
  for (let i = 0; i < want.length; i++) {
    wnatObj[want[i]] = number[i];
  }

  let answer = 0;
  // 10일간의 할인 항목을 가져올 때 기존 배열의 범위를 벗어나지 않기 위해 -9 해주는 것
  for (let i = 0; i < discount.length - 9; i++) {
    const discount10d = {};

    for (let j = i; j < i + 10; j++) {
      discount10d[discount[j]] = (discount10d[discount[j]] || 0) + 1;
    }

    if (isShallowEqual(wnatObj, discount10d)) {
      answer++;
    }
  }

  return answer;
}

function solution3(want, number, discount) {
  let count = 0;
  for (let i = 0; i < discount.length - 9; i++) {
    const discounts = discount.slice(i, i + 10);
    let flag = true;
    for (let j = 0; j < want.length; j++) {
      if (discounts.filter((pdt) => pdt === want[j]).length !== number[j]) {
        flag = false;
        break;
      }
    }
    if (flag) count += 1;
  }
  return count;
}

function solutionWithSlidingWindow(want, number, discount) {
  const wantMap = {};
  want.forEach((item, i) => (wantMap[item] = number[i]));

  const window = {};
  let answer = 0;

  // 초기 10일 세팅
  for (let i = 0; i < 10; i++) {
    window[discount[i]] = (window[discount[i]] || 0) + 1;
  }

  const isValid = () => {
    for (const item in wantMap) {
      if ((window[item] || 0) !== wantMap[item]) return false;
    }
    return true;
  };

  if (isValid()) answer++;

  // 슬라이딩 윈도우 이동
  for (let i = 10; i < discount.length; i++) {
    const add = discount[i];
    const remove = discount[i - 10];

    // 들어오는 상품
    window[add] = (window[add] || 0) + 1;

    // 나가는 상품
    window[remove]--;
    if (window[remove] === 0) delete window[remove];

    if (isValid()) answer++;
  }

  return answer;
}

const result = solutionWithSlidingWindow(
  ["banana", "apple", "rice", "pork", "pot"],
  [3, 2, 2, 2, 1],
  [
    "chicken",
    "apple",
    "apple",
    "banana",
    "rice",
    "apple",
    "pork",
    "banana",
    "pork",
    "rice",
    "pot",
    "banana",
    "apple",
    "banana",
  ]
);
const result2 = solutionWithSlidingWindow(
  ["apple"],
  [10],
  [
    "banana",
    "banana",
    "banana",
    "banana",
    "banana",
    "banana",
    "banana",
    "banana",
    "banana",
    "banana",
  ]
);

console.log(result); // 3
console.log(result2); // 0
