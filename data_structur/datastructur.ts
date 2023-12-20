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
    this.head = tmp.next;
    if (!tmp.next) {
      this.tail = null;
      this.length--;
      return tmp;
    }
    this.length--;
    return tmp;
  }
  //add item at beginning
  unshift(value: number) {
    const newListNode = new ListNode(value);
    if (this.head) {
      newListNode.next = this.head;
    } else this.tail = newListNode;
    this.head = newListNode;
    this.length++;
    return this;
  }
  //get a node from specific index
  get(index: number) {
    if (index >= this.length || index < 0) return undefined;
    let currentNode: ListNode | null = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode?.next as ListNode;
    }
    return currentNode;
  }
  //change the value of node item with specific index
  set(value: number, index: number) {
    if (index >= this.length || index < 0) return false;
    let currentNode = this.get(index);
    currentNode!.value = value;
    return true;
  }
  // add node on a specific index
  insert(value: number, index: number) {
    if (index > this.length || index < 0) return undefined;
    let newNode = new ListNode(value);
    if (index === 0) {
      this.unshift(value);
      return newNode;
    }
    let beforeNode = this.get(index - 1) as ListNode;
    if (beforeNode === this.tail) {
      this.append(value);
      return newNode;
    }
    let afternode = beforeNode.next;
    newNode.next = afternode;
    beforeNode.next = newNode;
    this.length++;

    return newNode;
  }
}

const myList = new SinglyLinkedList();

myList.append(5);
myList.append(7);
myList.append(8);
myList.append(1);

console.log(myList.insert(3, -1));

console.log(myList);
