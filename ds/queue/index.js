{
  // 배열 이용하는 방식으로 push, shift 구현
  class Queue {
    items = [];
    front = 0;
    rear = 0;

    push(item) {
      this.items.push(item);
      this.rear++;
    }

    pop() {
      return this.items[this.front++];
    }

    isEmpty() {
      return this.front === this.rear;
    }
  }
}
// 연결 리스트 이용하는 방식
{
  class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }

  class Queue {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }

    push(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode; // 현재 tail (이제 곧 뒤에서 두번째가 될 tail)의 next에 새로운 newNode
        this.tail = newNode; // 현재 tail은 이제 newNode
      }
      this.size++;
    }

    pop() {
      if (!this.head) return null;
      const removeNode = this.head;
      this.head = this.head.next; // 바뀔 head는 지금 head의 next이다

      if (!this.head) {
        // 바뀔 head가 null 즉, 현시점의 head의 next가 없는건 뒤 tail이 없다는 것
        this.tail = null;
      }

      this.size--;

      return removeNode.data;
    }

    isEmpty() {
      return this.size === 0;
    }
  }
}
