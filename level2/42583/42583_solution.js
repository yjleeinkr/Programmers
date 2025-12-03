class Queue {
  items = [];
  front = 0;
  rear = 0;

  constructor(items) {
    this.items = items;
    this.rear = items.length;
  }

  push(data) {
    this.items.push(data);
    this.rear++;
  }

  pop() {
    return this.items[this.front++];
  }

  first() {
    return this.items[this.front];
  }

  size() {
    return this.rear - this.front;
  }
}

/**
 * @param {*} bridge_length: 다리에 올라갈 수 있는 최대 트럭 수
 * @param {*} max_weight: 다리가 견디는 최대 무게
 * @param {*} truck_weights: 트럭들의 무게
 */
function solution(bridge_length, max_weight, truck_weights) {
  const bridge = new Queue(new Array(bridge_length).fill(0));
  const trucks = new Queue(truck_weights);

  let time = 0;
  let currentWeight = 0;

  while (bridge.size() > 0) {
    time++;
    currentWeight -= bridge.pop();

    if (trucks.size() > 0) {
      if (currentWeight + trucks.first() <= max_weight) {
        const truck = trucks.pop();
        bridge.push(truck);
        currentWeight += truck;
      } else {
        bridge.push(0);
      }
    }
  }

  return time;
}

console.log(solution(2, 10, [7, 4, 5, 6])); // 8
console.log(solution(100, 100, [10])); // 101
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10])); // 110
