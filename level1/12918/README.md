# Programmers Level 1

### 12918 문제링크

[12918 - 문자열 다루기 기본](https://school.programmers.co.kr/learn/courses/30/lessons/12918)

<br>

### Comment

1e30 (1e+30)과 같은 지수 표현법도 고려해야했다.
isNaN(1e30)을 할 경우 true가 나오기 때문이다. 따라서 난 string을 애초부터 한글자씩 쪼갠 배열로 만들어서 위의 케이스를 방지했다.
