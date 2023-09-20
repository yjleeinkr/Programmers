# Programmers Level 1

### 81301 문제링크

[81301 - 숫자 문자열과 영단어](https://school.programmers.co.kr/learn/courses/30/lessons/81301)

<br>

### Comment

난 단순한 반복문을 통해 풀었다. `split()` 과 `join()`을 활용해서 매우 똑똑하게 푼 사람들도 있었다.  
창의력을 가지고 문제를 바라볼 필요가 있다고 느꼈다.
<br>
그리고 보통 정규식을 사용해서 푸는 사람들이 많았기에 정리해둔다.

#### 정규식

- 정규표현식 리터럴 `/regexr패턴/` 내에선 템플릿 리터럴 문법 (`${...}`)을 사용할 수 없다.
- 변수를 정규표현식에서 사용하기 위해서는 `new RegExp(변수명, 플래그)` 생성자를 사용해야한다.

```js
const variable = "hot";
const regExp = new RegExp(variable, "g"); // /variable/g
const string = "hot coffee, hot choco";
const result = string.replace(regExp, "iced");

console.log(result); // iced coffee, iced choco
```
