# Programmers Level 1

### 160586 문제링크

[160586 - 대충 만든 자판](https://school.programmers.co.kr/learn/courses/30/lessons/160586)

<br>

### Comment
`forEach` 는 `for문` 처럼 내부에서 `continue`, `break` 등을 쓸 수 없기때문에 `return`을 써서
예외처리를 하려고 했었다. <br> 그러나 `forEach` 내부에선 `return` 을 써도 반복을 중단할 수 없다.
이거 때문에 테스트 14번부터 실패했고 `forEach` 를 `for문`으로 바꾸니 테스트를 통과했다!
```js
const arr = [1, 2, 3, 4, 5];
arr.forEach((v) => {
    if(v === 3) return;
    console.log(v);
})
// 기대 출력값 : 1 2 
// 실제 출력값 : 1 2 4 5
```
따라서 조건 만족 시 순회를 중단하는 걸 원한다면 근본 `for문`을 쓰거나 `some` || `every` 를 이용하자.
- `some` : 조건을 하나라도 만족 시 `true` 리턴하며 순회 중단 (아래 예시)
- `every` : 조건을 하나라도 만족 못하면 `false`를 리턴하면 순회 중단 / 전부 만족할 시에만 `true` 반환
```js
// 조건 true 일 시 break
const test = [1, 2, 3, 4, 5];
test.some(v => {
  if (v === 3) return true;
  console.log(v);
}) // 1 2 출력

// 조건 false 일 시 continue
test.some(v => {
  if (v === 3) return false;
  console.log(v);
}) // 1 2 4 5 출력

```
