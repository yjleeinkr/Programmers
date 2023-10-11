# Programmers Level 1

### 12915 문제링크

[12915 - 문자열 내 마음대로 정렬하기](https://school.programmers.co.kr/learn/courses/30/lessons/12915)

<br>

### Comment

`sort()` 메소드는 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환한다.
숫자가 들어가도 문자열로 변환해서 각 문자열의 유니코드 코드 포인트를 따라 정렬한다. <br>
따라서, 아래와 같이 숫자를 넣어도 숫자 크기 순이 아닌 문자열 순으로 정렬해준다.

```js
const nums = [1, 30, 4, 10000, 21, 10];
const sorted = nums.sort(); // [1, 10, 10000, 21, 30, 4]

// 숫자 오름차순대로 정렬하고 싶다면, 아래와 같이 콜백함수를 사용
const sorted2 = nums.sort((a, b) => Number(a) - Number(b)); // [ 1, 4, 10, 21, 30, 10000 ]
```

콜백함수를 통해 정렬 기준을 컨트롤할 수 있다.
`sort`의 정렬 알고리즘은 콜백함수의 리턴 값을 가지고 각 요소를 비교한다.

- `return -1` : **첫번째 인자 < 두번째 인자** 라고 판단해서 정렬 / 첫번째 인자가 두번째 인자 **앞**에 위치하게 해줌
- `return 1` : **첫번째 인자 > 두번째 인자** 라고 판단해서 정렬 / 첫번째 인자가 두번째 인자 **뒤**에 위치하게 해줌
- `return 0` : **첫번째 인자 == 두번째 인자** 라고 판단해서 정렬하지 않는다. / 원래 배열 위치대로 둠

#### 예시

```js
function compare(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}
const arr = ["b", "c", "a", "z", "e", "d"];
arr.sort(compare);
console.log(arr); // ['a', 'b', 'c', 'd', 'e', 'z']
```
