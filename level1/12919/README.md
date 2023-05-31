# Programmers Level 1

### 12919 문제링크

[12919 - 서울에서 김서방 찾기](https://school.programmers.co.kr/learn/courses/30/lessons/12919)

<br>

### Comment

난 `findIndex()` 메소드를 썼는데, 대부분의 사람들은 `indexOf()`를 써서 차이점을 찾아보았다.

- `findIndex()` : 주어진 콜백 함수를 통해 조건을 만족하는 요소를 찾으면 순회를 멈추고 해당 index를 반환해준다.
- `indexOf()` : 주어진 인자와 일치하는 **첫번째** 등장하는 인덱스를 반환한다.

성능 상으로 누가 더 특별히 우세하진 않다. <br>
배열이 문자, 숫자 같은 원시타입으로 이뤄진 배열이라면 간단히 일치하는 요소를 찾는 `indexOf()`를 사용하고, <br>
배열이 객체로 이뤄져있고 객체 내의 속성을 비교하거나 좀 더 복잡한 조건을 만족시켜야한다면, `findIndex()`를 쓰면 될 듯 하다.
