function factorial(n) {
  if (n < 2) return n;
  return n * factorial(n - 1);
}
console.log(factorial(4));
// 24

function getCombination(elements, pickNum) {
  if (pickNum < 2) return elements.map(el => [el]);
  let combinations = [];
  for (let i = 0; i < elements.length - 1; i++){
    const arrWithoutFixed = elements.slice(i + 1);
    const smallerCombinations = getCombination(arrWithoutFixed, pickNum - 1);
    const arrWithFixed = smallerCombinations.map((v) => [elements[i], ...v]);
    combinations.push(...arrWithFixed);
  }
  return combinations;
}

console.log(getCombination([1, 2, 3, 4], 3));
// [ [ 1, 2, 3 ], [ 1, 2, 4 ], [ 1, 3, 4 ], [ 2, 3, 4 ] ]