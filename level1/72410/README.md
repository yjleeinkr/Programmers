# Programmers Level 1

### 72410 문제링크

[72410 - 신규 아이디 추천](https://school.programmers.co.kr/learn/courses/30/lessons/72410)

<br>

### Comment

이번 문제를 통해 간단하게 정규식을 공부해보았다.

## 정규식 메서드

### 문자열.match(정규표현식)

문자열에서 정규표현식에 매칭하는 항목들을 배열로 반환해준다. 없을 경우 `null` 반환

```js
const regex = /[0-9]/g;
const text = "hello 2 apple 4 banana 3 apple 5 cherry grape!!";

const match = text.match(regex);
console.log(match); // [ '2', '4', '3', '5' ]
```

### 정규표현식.exec(문자열)

`match`와 유사하다. 문자열에서 정규표현식에 매칭되는 항목들을 배열로 반환해준다. <br>
✨ `match`와 비슷하나 `g` 플래그를 써도 문자열 내 모든 일치되는 것들을 가져오지 않고 무조건 첫번째 매칭 결과만 반환한다.

```js
const exec = regex.exec(text);
console.log(exec);
// [ '2', index: 6, input: 'hello 2 apple 4 banana 3 apple 5 cherry grape!!', groups: undefined ]
// 결과물 중 index 값은 해당 정규식과 일치하는 문자열의 첫번째 인덱스를 뜻한다.
```

### 문자열.replace(정규표현식, 대체문자열)

문자열에서 정규표현식에 매칭되는 부분을 대체문자열로 변환해준다.

```js
const text = "hello apple banana apple cherry grape!!";
const replace = text.replace(/apple/g, "🍎");
console.log(replace); // hello 🍎 banana 🍎 cherry grape!!
```

### 정규표현식.text(문자열)

문자열이 정규표현식에 매칭되면 `true`, 아니면 `false` 리턴

```js
const regex = /[0-9]/g;
const test = regex.test("서울시 마포구 123번길");
console.log(test); // true
```

<br>

## 정규식 플래그

`new RegExp(정규표현식, 플래그)` || `/정규표현식/플래그` 이렇게 플래그를 써준다.

### i - ignore case 대소문자 구별하지 않기

### g - global 문자열 전체 검색

### m - multi line 문자열 행이 바뀌더라도 검색 계속하기

### u - unicode 유니코드 전체 지원

### s - 모든 문자를 검색하는 정규표현식(.) 에서 개행문자(\n) 포함

<br>

`i`, `g` 같은 경우는 많이 쓰기 때문에 예시는 생략하고 `m` 플래그는 처음보는 거라 정리해본다.<br>
아래 `text1`은 개행문자 `\n`으로 인해서 문자열 행이 바뀌게 된다.

```js
const text1 = "Hello World and \nHi Yj? \nHi World!!";
console.log(text1);
/*
Hello World and 
Hi Yj? 
Hi World!!
*/
```

이럴 경우, 정규식 메소드는 첫번째 줄만 검사하고 나머지 행들은 검사하지 않고 끝낸다. <br>
하지만 게시글이나 문의글처럼 문자열이 하나의 행이 아닐 경우가 많은데, 이때 `m` 플래그를 써주면 다음 행도 검사한다.

```js
const noFlag = text1.match(/^Hi/);
const mFlag = text1.match(/^Hi/m);

console.log(noFlag); // null
console.log(mFlag); // ['Hi', index: 17, input: 'Hello World and \nHi Yj? \nHi World!!', groups: undefined]
```

하지만 `m`만 쓸 경우 첫번째 검색이 끝나면 결과값을 반환해버리고 다음 행은 검사하지 않기 때문에, 행과 상관없이 전체 문자열을 검사하고 싶다면 `g` 플래그와 같이 혼합해서 사용하면 된다.

```js
const gmFlag = text1.match(/^Hi/gm);
console.log(gmFlag); // [ 'Hi', 'Hi' ]
```

<br>

## 정규식 기호

| 정규식 패턴 | 뜻                                                                      |
| ----------- | ----------------------------------------------------------------------- |
| a-zA-Z      | 영어 알파벳 (- 로 범위 지정)                                            |
| ㄱ-ㅎ가-힣  | 한글 (- 로 범위 지정)                                                   |
| 0-9         | 숫자 (- 로 범위 지정)                                                   |
| .           | 모든 문자열(영어, 한글, 숫자, 특수기호, 공백 전부 해당, 줄바꿈은 해당x) |
| \d          | 숫자                                                                    |
| \D          | 숫자가 아닌 것                                                          |
| \w          | underscore(\_)를 포함한 영문+숫자 `[a-zA-Z0-9\_]`                       |
| \W          | \w 가 아닌 것                                                           |
| \s          | 공백                                                                    |
| \S          | 공백이 아닌것                                                           |
| \특수기호   | 이스케이프 문자 - 특수기호는 앞에 \를 붙여야한다. `\*\^\&\#`            |

<br>

## 정규식에서 자주 쓰이는 패턴

### 검색 기준

<table>
    <tr>
        <th>기호</th>
        <th>뜻</th>
    </tr>
    <tr>
        <td>|</td>
        <td>OR 연산자와 같다 a|b</td>
    </tr>
    <tr>
        <td rowspan="4">[]</td>
        <td >대괄호 안의 문자들 중 하나</td>
    </tr>
    <tr>
        <td>/abc/ : abc 연속적인 문자로 여김</td>
    </tr>
    <tr>
        <td>/[abc]/ : a 또는 b 또는 c</td>
    </tr>
    <tr>
        <td>/[가-라]/ : 가 또는 나 또는 다 또는 라</td>
    </tr>
    <tr>
        <td rowspan="2">[^문자열]</td>
        <td>대괄호 안의 문자를 제외</td>
    </tr>
    <tr>
        <td>/[^0-9]/ : 0에서 9까지의 숫자 제외</td>
    </tr>
    <tr>
        <td rowspan="2">^문자열</td>
        <td>특정 문자열로 시작하냐</td>
    </tr>
    <tr>
        <td>/^www/ : www로 시작하는지</td>
    </tr>
    <tr>
        <td rowspan="2">문자열$</td>
        <td>특정 문자열로 끝나냐</td>
    </tr>
    <tr>
        <td>/net$/ : net으로 끝나는지</td>
    </tr>
</table>

### 반복 패턴

<table>
    <tr>
        <th>기호</th>
        <th>뜻</th>
    </tr>
    <tr>
        <td  rowspan="4">?</td>
        <td>없거나 1번 등장 (? 옵셔널 체이닝과 비숫)</td>
    </tr>
    <tr>
        <td>/(apple)?pie/ : pie 또는 applepie에 일치한다. apple은 있을수도 없을수도 있다.</td>
    </tr>
    <tr>
        <td>/colou?r/ : color 또는 colour 와 일치한다. u가 없거나 1번 나오는 경우</td>
    </tr>
    <tr>
        <td>/\d+ ?(m|cm)?/ : '10cm', '10 cm', '20m', '20 m' 등이 일치하며 단위가 없어도 일치한다.</td>
    </tr>
    <tr>
        <td rowspan="2">*</td>
        <td>0회 이상 반복 또는 최대한 많이 일치</td>
    </tr>
    <tr>
        <td>/ab*c/ : 'ac', 'abc', 'abbc', 'abbbc' 등과 일치, 'b'가 0번 이상 반복하기 때문에 다양한 길이의 'b' 허용</td>
    </tr>
    <tr>
        <td rowspan="2">+</td>
        <td>최소 1번 이상 반복되는 것을 의미 {1,} 와 일치</td>
    </tr>
    <tr>
        <td>/\.+/ : 마침표('.')가 최소 하나거나 여러개일때 </td>
    </tr>
    <tr>
        <td rowspan="2">*?</td>
        <td>0번 이상 반복되지만 최소한의 반복을 나타낸다. 가능한 가장 짧은 일치를 찾으려고 하며, {0,} 과 동일</td>
    </tr>
    <tr>
        <td>/ab*?c/ : 'ac', 'abc' 등과 일치 </td>
    </tr>
    <tr>
        <td rowspan="2">+?</td>
        <td>최소 한개만 일치, 가능한 가장 짧은 일치를 찾으려고 함</td>
    </tr>
    <tr>
        <td>/ab+?c/ : 'abc'와 일치, 가능한 가장 짧은 일치를 찾으려고 하며 {1,} 과 일치</td>
    </tr>
    <tr>
        <td>{n}</td>
        <td>n개</td>
    </tr>
    <tr>
        <td>{Min,}</td>
        <td>최소 Min개 이상</td>
    </tr>
    <tr>
        <td>{Min, Max}</td>
        <td>최소 Min개 이상 최대 Max개 이하</td>
    </tr>

</table>

<br>

_, +, ?, _?, +? 가 헷갈려서 아래와 같이 예시를 한번 돌려보니 이해가 된다.

```js
// ✨ * : 없으면 없는대로, 있으면 최대한 많이
console.log("co cod code codee coding codeeeeee codingding".match(/ode*/g));
// [ 'od', 'ode', 'odee', 'od', 'odeeeeee', 'od' ]

// ✨ + : 최대 1개는 있어야하고, 있으면 최대한 많이
console.log("co cod code codee coding codeeeeee codingding".match(/ode+/g));
// [ 'ode', 'odee', 'odeeeeee' ]

// ✨ ? : 없어도 되고, 있으면 한개까지만 받아줌
console.log("co cod code codee coding codeeeeee codingding".match(/ode?/g));
// [ 'od', 'ode', 'ode', 'od', 'ode', 'od' ]

// ✨ *? : 없어도 되고, 있어도 가능한한 최소(0)로 받아줌
console.log("co cod code codee coding codeeeeee codingding".match(/ode*?/g));
// [ 'od', 'od', 'od', 'od', 'od', 'od' ]

// ✨ +? : 최소 한개 이상이지만, 있어도 가능한한 최소(1)로 받아줌
console.log("co cod code codee coding codeeeeee codingding".match(/ode+?/g));
// [ 'ode', 'ode', 'ode' ]
```
