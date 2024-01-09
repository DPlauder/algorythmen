export class PriorityQueue<T> {
  values: { val: T; priority: number }[] = [];

  enqueue(val: T, priority: number) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}
