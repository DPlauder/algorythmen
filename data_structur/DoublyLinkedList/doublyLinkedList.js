"use strict";
class ListNode {
  constructor(value) {
    this.next = null;
    this.prev = null;
    this.value = value;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  append(value) {
    const newListNode = new ListNode(value);
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
    this.tail = temp.prev;
    this.tail.next = null;
    this.length--;
    return temp;
  }
  shift() {
    if (this.length === 0) return -1;
    let temp = this.head.next;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      return temp;
    }
    temp.prev = null;
    this.head.next = null;

    this.head = temp;
    this.length--;
    return temp;
  }
}
const newList = new DoublyLinkedList();
newList.append(7);
newList.append(1);
newList.append(6);
newList.append(8);
newList.shift();
console.log(newList);
//# sourceMappingURL=doublyLinkedList.js.map
