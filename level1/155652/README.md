# Programmers Level 1

### 155652 문제링크

[155652 - 둘만의 암호](https://school.programmers.co.kr/learn/courses/30/lessons/155652)

<br>

### Comment
1. 문자열의 각 문자를 배열로 만들 때 `split('')` 대신 `spread 연산자(...)`를 사용해서 쪼개보았다.
2. 알파벳을 일일이 쓰지 않고 아래와 같이 `String.fromCharCode()`를 활용해보았다. 아스키코드번호를 받아 문자열로 변환해주는 메소드이다. 
3. `Array.from(arrayLike, mapFn)` 을 활용해 새로운 배열을 만들어주었다. <br>
   첫번째 인자로 length 옵션을 넣어서 배열 크기를 설정해주고, 두번째 인자인 맵핑 함수로 배열의 각 인자를 할당해주었다.
```js
  // 알파벳 소문자 (a-z)
  const lowerCase = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 97)); 
  // 알파벳 대문자 (A-Z)
  const upperCase = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 65));
```
