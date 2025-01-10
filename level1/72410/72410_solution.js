function solution(new_id) {
  let filtered = new_id
    .toLowerCase() // 1. 대문자 소문자로 치환
    .replace(/[^a-z0-9\.\-\_]/g, "") // 2. 알파벳 소문자, 숫자, -, _, . 외의 문자는 제거
    .replace(/\.+/g, ".") // 3. 마침표(.)가 2개 이상 연속시 하나의 .으로 치환
    .replace(/^\.|\.$/g, "") // 4. 처음(^)과 끝($)에 마침표(.) 있으면 제거
    .replace(/^$/, "a"); // 5. 빈 문자열이라면 'a'로 치환

  if (filtered.length >= 16)
    filtered = filtered.slice(0, 15).replace(/\.$/, ""); // 6. 16자 이상이면 첫 15개 문자 외엔 제거, 제거 후 끝에 마침표(.) 있으면 제거

  const lgth = filtered.length;
  return lgth > 2
    ? filtered
    : filtered.concat(filtered[lgth - 1].repeat(3 - lgth));
  // 7. 2자 이하라면 해당 아이디 길이가 3이 될때까지 마지막 문자를 반복해서 붙여주기
}

const result = solution("...!@BaT#*..y.abcdefghijklm");
const result2 = solution("z-+.^.");
const result3 = solution("=.=");
const result4 = solution("123_.def");
const result5 = solution("abcdefghijklmn.p");
console.log(result); // bat.y.abcdefghi
console.log(result2); // z--
console.log(result3); // aaa
console.log(result4); // 123_.def
console.log(result5); // abcdefghijklmn
