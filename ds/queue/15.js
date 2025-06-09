/** 요세푸스 문제
 * - n: 전체 사람수
 * - k: 제거된 사람의 번호
 */
function solution(n, k) {
  class Queue {
    items = [];
    head = 0;
    rear = 0;

    push(item) {
      this.items.push(item);
      this.rear++;
    }

    pop() {
      return this.items[this.head++];
    }

    size() {
      return this.rear - this.head;
    }
  }

  const queue = new Queue();

  for (let i = 1; i <= n; i++) {
    queue.push(i); // 1번부터 n번까지 큐 만들기
  }
  // 2 3 4 5 1 / 2
  // 4 5 1 3 / 4
  // 1 3 5 / 1
  // 5 3 / 5
  // 3
  while (queue.size() > 1) {
    for (let i = 0; i < k - 1; i++) {
      queue.push(queue.pop()); // k번째 요소를 찾기 위해 앞에서부터 제거하고 뒤에 추가 (원형테이블)
    }
    queue.pop(); // k번째 요소 제거
  }
  return queue.pop(); // 마지막으로 남은 요소 반환
}

console.log(solution(5, 2)); // 3
console.log(solution(5, 3)); // 4

/**
 * 시간 복잡도 O(n * k)
 * 1. 반복 횟수
 * - 총 제거되는 사람 수는 n-1명 (queue 사이즈 < 1 전까지 반복)
 * - 반복 루프 n-1번 실행
 * 2. 반복에서의 연산
 * - 각 루프에서 k-1번 pop(), push()
 * - 각 루프 마지막에서 1번 pop()
 * - 매 루프마다 k번의 연산
 * => 총 n * k
 */
