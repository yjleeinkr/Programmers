const regex = /[0-9]/g;

const text = "hello 2 apple 4 banana 3 apple 5 cherry grape!!";

// ✅ 문자열.match(정규표현식) : 문자열에서 정규표현식에 매칭되는 항목들을 배열로 반환해준다. 없을 경우 null 반환
const match = text.match(regex);
console.log(match); // [ '2', '4', '3', '5' ]

// ✅ 정규표현식.exec(문자열) : 문자열에서 정규표현식에 매칭되는 항목들을 배열로 반환해준다.
// ❓ match와 비슷하나 g 플래그를 써도 문자열 내 모든 일치되는 것들을 가져오지 않고 무조건 첫번째 매칭 결과만 반환한다.
// 결과물 중 index 값은 해당 정규식과 일치하는 문자열의 첫번째 인덱스를 뜻한다.
const exec = regex.exec(text);
console.log(exec);
// [ '2', index: 6, input: 'hello 2 apple 4 banana 3 apple 5 cherry grape!!', groups: undefined ]

// ✅ 문자열.replace(정규표현식, 대체문자열) : 문자열에서 정규표현식에 매칭되는 부분을 대체문자열로 변환해준다.
const replace = text.replace(/apple/g, "🍎");
console.log(replace); // hello 🍎 apple 🍎 banana 🍎 apple 🍎 cherry grape!!

// ✅ 정규표현식.test(문자열) : 문자열이 정규표현식에 매칭되면 true, 아니면 false 리턴
const test = regex.test(text);
console.log(test); // true

// 정규식 플래그

const text1 = "Hello World and \nHi Yj? \nHi World!!";
console.log(text1);
const noFlag = text1.match(/^Hi/);
const mFlag = text1.match(/^Hi/m);
const gmFlag = text1.match(/^Hi/gm);
console.log(noFlag);
console.log(mFlag);
console.log(gmFlag);

const test100 = "안녕Hello_123World..-3 and 3\nHi Yj? \nHi World!!".match(
  /\w/g
);
console.log(test100);

const t = /\d+ ?(m|cm)?/;
const arr = [
  "10 cm",
  "asda cm",
  "20m",
  "30 m",
  "30 ",
  "20cm",
  "hello",
  "20 cm",
];
arr.forEach((v) => console.log(t.test(v)));

// ✨ * 없으면 없는대로, 있으면 최대한 많이
console.log("co cod code codee coding codeeeeee codingding".match(/ode*/g));
// [ 'od', 'ode', 'odee', 'od', 'odeeeeee', 'od' ]

// ✨ + 최대 1개는 있어야하고, 있으면 최대한 많이
console.log("co cod code codee coding codeeeeee codingding".match(/ode+/g));
// [ 'ode', 'odee', 'odeeeeee' ]

// ✨ ? 없어도 되고, 있으면 한개까지만 받아줌
console.log("co cod code codee coding codeeeeee codingding".match(/ode?/g));
// [ 'od', 'ode', 'ode', 'od', 'ode', 'od' ]

// ✨ *? 없어도 되고, 있어도 가능한한 최소로 받아줌
console.log("co cod code codee coding codeeeeee codingding".match(/ode*?/g));
// [ 'od', 'od', 'od', 'od', 'od', 'od' ]

// ✨ +? 최소 한개 이상이지만, 있어도 가능한한 최소로 받아줌
console.log("co cod code codee coding codeeeeee codingding".match(/ode+?/g));
// [ 'ode', 'ode', 'ode' ]
