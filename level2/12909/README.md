# Programmers Level 2

### 12909 문제링크

[12909 - 올바른 괄호](https://school.programmers.co.kr/learn/courses/30/lessons/12909)

### Comment

풀긴 풀었으나 stack 맨 위에 있는 괄호가 ')' 일 경우를 고려하지 못해서 처음엔 `last && s[i] !== last` 조건문을 걸었다가 예외 케이스 "(()))(" 를 생각해보고 깨달았다.. stack의 마지막 괄호가 무조건 열린 괄호 '(' 여야 올바른 괄호가 된다는 걸 간과해서다.
