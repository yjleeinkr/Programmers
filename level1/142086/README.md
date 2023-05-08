# Programmers Level 1

### 142086 문제링크

[142086 - 가장 가까운 같은 글자](https://school.programmers.co.kr/learn/courses/30/lessons/142086)

<br>

### Comment
처음에 내가 풀었던 방식에선 for문을 돌고, 그 안에서 `lastIndexOf` 메소드 때문에 배열을 한번 더 순회하기 때문에 <br>
이중 for문처럼 O(n) * O(n) 즉, `O(n^2)` 만큼의 시간복잡도를 가지게 되서 문제를 통과하긴 해도 시간이 오래 걸렸다. <br>
그러다가 hash table 방식으로 바꾼 solution으로 했더니 배열 순회를 한번만 하기 때문에 전체 시간 복잡도는 `O(n)`으로 줄어드는 결과를 얻을 수 있었다.
