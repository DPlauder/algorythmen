class ListNode {
  value: number;
  next: ListNode | null;
  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}
class SinglyLinkedList {
  head: ListNode | null = null;
  tail: ListNode | null = null;
  length: number = 0;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //add item at end of list
  append(value: number) {
    const newListNode = new ListNode(value);
    if (this.head === null) this.head = newListNode;
    if (this.tail != null) this.tail.next = newListNode;
    this.tail = newListNode;
    this.length++;
    return this;
  }
  //remove last item from list
  pop() {
    if (!this.head) {
      return undefined;
    }
    let pre: ListNode | null = null;
    let tmp = this.head;
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
      this.length--;
      return tmp;
    }
    while (tmp.next) {
      pre = tmp;
      tmp = tmp.next;
    }
    this.tail = pre;
    this.tail!.next = null;
    this.length--;
    return tmp;
  }
  // remove first item
  shift() {
    const tmp = this.head;
    if (!tmp) return undefined;
    if (!tmp.next) {
      this.head = null;
      this.tail = null;
      this.length--;
      return tmp;
    }
    this.head = tmp.next;
    this.length--;
    return tmp;
  }
}

const myList = new SinglyLinkedList();
myList.append(5);
myList.append(7);
myList.append(8);
myList.append(1);

myList.shift();
myList.shift();
myList.shift();

console.log(myList);
