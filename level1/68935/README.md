# Programmers Level 1

### 68935 문제링크

[68935 - 3진법 뒤집기](https://school.programmers.co.kr/learn/courses/30/lessons/68935)

<br>

### Comment

우선 3진수이므로 주어진 숫자 n을 3으로 나눈 나머지를 배열에 push해줬고, n은 3으로 나눈 몫으로 while문 내에서 계속 재할당 해줬다. <br>
그렇게 나온 값을 지문대로 reverse() 후 배열순대로 3^0, 3^1...를 곱해준 값을 더하면 10진수로 변환한 값이 나온다. <br>
그러다 문득 자바스크립트에도 진수를 구하고 이를 다시 10진수로 바꿔주는 메소드가 있지 않을까 생각이 들어 찾아봤더니, 기존에 문자열로 바꾸거나 정수를 구할때 썼던 `toString()` 과 `parseInt()`를 사용하면 되는 거였다. 새로운 발견이었다.

### 1. Object.prototype.toString()

1. 인자를 넣어서 진수로 변환
   `toString()`은 주로 number나 boolean처럼 string이 아닌 타입을 string화 시켜주는 메소드로 썼다.
   여기에 인자로 2~36 사이의 정수를 넣어주면 인자에 해당하는 진수를 문자열로 리턴해준다.

```js
const num = 45;
console.log(num.toString(3)); // '1200' 45를 3진수로 변환
```

2. 객체를 설명하는 문자열 출력하기

자바와 같은 객체지향 언어들은 객체에 toString이라는 메소드를 기본적으로 제공한다. <br>
일반적으로 toString은 그 객체를 설명해주는 문자열을 리턴한다.<br>
그리고 객체의 toString을 덮어쓰기(overriding)하면 다른 형식의 문자열을 리턴할 수 있다.<br>
문자열이 기대되는 곳에서 문자열이 아닌 객체를 사용하면 시스템은 암시적으로 toString을 호출한다.<br>
자바스크립트에서는 `prototype`을 이용해 객체의 메소드를 덮어쓰기(override)할 수 있다.<br>

```js
function Cat(name) {
  this.name = name;
}

const cat1 = new Cat("hoochu");
// 자바스크립트에서 객체.toString()을 하면 '[object Object]' 가 출력된다.
console.log(cat1.toString()); // '[object Object]'

// prototype을 이용해 toString 덮어씌우기
Cat.prototype.toString = function catToString() {
  return `고양이 ${this.name}`;
};

console.log(cat1.toString); // '고양이 hoochu'
```

### 2. parseInt(string, radix)

인자로 들어오는 string (|| number)의 특정 진수(radix: 2~36 사이)의 정수를 반환해준다.

```js
function roughScale(x, base) {
  const parsed = parseInt(x, base);
  if (isNaN(parsed)) return 0;
  return parsed * 100;
}
console.log(roughScale(" 0xF", 16)); // 1500
console.log(roughScale("321", 2)); // 0
console.log(roughScale("0021", 3)); // 700
```
