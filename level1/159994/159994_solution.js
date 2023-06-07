function solution(cards1, cards2, goal) {
  let isPassed = true;
  let cards1Idx = 0,
    cards2Idx = 0;
  goal.forEach((card) => {
    if (cards1[cards1Idx] === card) {
      cards1Idx++;
    } else if (cards2[cards2Idx] === card) {
      cards2Idx++;
    } else {
      isPassed = false;
    }
  });
  return isPassed ? "Yes" : "No";
}

// 다른 사람들 풀이
function solution2(cards1, cards2, goal) {
  for (g of goal) {
    if (cards1[0] === g) {
      cards1.shift();
    } else if (cards2[0] === g) {
      cards2.shift();
    } else {
      return "No";
    }
  }
  return "Yes";
}

const result = solution(
  ["i", "drink", "water"],
  ["want", "to"],
  ["i", "want", "to", "drink", "water"]
);

const result2 = solution(
  ["i", "water", "drink"],
  ["want", "to"],
  ["i", "want", "to", "drink", "water"]
);
const result3 = solution2(
  ["i", "drink", "water"],
  ["want", "to"],
  ["i", "want", "to", "drink", "water"]
);

const result4 = solution2(
  ["i", "water", "drink"],
  ["want", "to"],
  ["i", "want", "to", "drink", "water"]
);
console.log(result, result2, result3, result4); // Yes No Yes No
