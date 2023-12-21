class ListNode<T> {
  value: T;
  next: ListNode<T> | null = null;
  prev: ListNode<T> | null = null;
  constructor(value: T) {
    this.value = value;
  }
}
class DoublyLinkedList<T> {
  head: ListNode<T> | null = null;
  tail: ListNode<T> | null = null;
  length: number = 0;
  constructor() {}

  append(value: T) {
    const newListNode = new ListNode<T>(value);
    if (this.head === null) this.head = newListNode;
    if (this.tail != null) {
      this.tail.next = newListNode;
    }
    newListNode.prev = this.tail;
    this.tail = newListNode;
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return -1;
    let temp = this.tail;
    if (this.length <= 1) {
      this.head = null;
      this.tail = null;
      return temp;
    }
    this.tail = temp!.prev;
    this.tail!.next = null;
    this.length--;
    return temp;
  }
  shift() {
    if (this.length === 0) return -1;
    let temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      return temp;
    }
    this.head = temp?.next as ListNode<T>;
    this.head.prev = null;
    temp!.next = null;
    this.length--;
    return temp;
  }
  unshift(value: T) {
    const newNode = new ListNode(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head!.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }
}

const newList = new DoublyLinkedList();

newList.append(7);
newList.append(1);
newList.append(6);
newList.append(8);
newList.unshift(2);
console.log(newList);
