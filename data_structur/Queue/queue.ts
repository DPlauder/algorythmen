class QueueNode<T> {
  value: T;
  next: QueueNode<T> | null = null;
  constructor(value: T) {
    this.value = value;
  }
}

class Queue<T> {
  first: QueueNode<T> | null = null;
  last: QueueNode<T> | null = null;
  size: number = 0;
  constructor() {}
  enqueue(val: T) {
    const newNode = new QueueNode(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last!.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  dequeue() {
    if (this.size == 0) return undefined;
    const temp = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    }
    this.first = temp!.next;
    this.size--;
    return temp;
  }
}

const newList = new Queue();

newList.enqueue(1);
newList.enqueue(2);

newList.dequeue();

console.log(newList);
