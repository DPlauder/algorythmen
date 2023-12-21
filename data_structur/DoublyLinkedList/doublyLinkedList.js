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
    // adds new Item at End
    append(value) {
        const newListNode = new ListNode(value);
        if (this.head === null)
            this.head = newListNode;
        if (this.tail != null) {
            this.tail.next = newListNode;
        }
        newListNode.prev = this.tail;
        this.tail = newListNode;
        this.length++;
        return this;
    }
    // deletes last item
    pop() {
        if (!this.head)
            return -1;
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
    // deletes first item
    shift() {
        if (this.length === 0)
            return -1;
        let temp = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            return temp;
        }
        this.head = temp === null || temp === void 0 ? void 0 : temp.next;
        this.head.prev = null;
        temp.next = null;
        this.length--;
        return temp;
    }
    // adds item on beginning
    unshift(value) {
        const newNode = new ListNode(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }
    // gets item from specific position
    get(index) {
        if (index < 0 || index >= this.length)
            return null;
        let temp = this.head;
        if (Math.floor(this.length / 2) < index) {
            temp = this.tail;
            for (let i = this.length - 1; i > index; i--) {
                temp = temp.prev;
            }
        }
        else {
            for (let i = 0; i < index; i++) {
                temp = temp.next;
            }
        }
        return temp;
    }
    //changes item on specific position
    set(value, index) {
        let currentNode = this.get(index);
        if (currentNode) {
            currentNode.value = value;
            return true;
        }
        return false;
    }
    //inserts item on specific position
    insert(value, index) {
        if (index < 0 || index > this.length)
            return false;
        if (index === 0)
            this.unshift(value);
        if (index === this.length)
            this.append(value);
        const newNode = new ListNode(value);
        const prevNode = this.get(index - 1);
        const nextNode = prevNode === null || prevNode === void 0 ? void 0 : prevNode.next;
        newNode.prev = prevNode;
        newNode.next = prevNode.next;
        nextNode.prev = newNode;
        prevNode.next = newNode;
        this.length++;
        return true;
    }
    // deletes item from specific position
    remove(index) {
        if (index < 0 || index > this.length)
            return undefined;
        if (index === 0)
            this.shift();
        if (index === this.length)
            this.pop();
        const deletedNode = this.get(index);
        const tempPrev = deletedNode.prev;
        const tempNext = deletedNode.next;
        tempPrev.next = tempNext;
        tempNext.prev = tempPrev;
        deletedNode.prev = null;
        deletedNode.next = null;
        this.length--;
        return deletedNode;
    }
}
const newList = new DoublyLinkedList();
newList.append(7);
newList.append(1);
newList.append(6);
newList.append(8);
newList.remove(1);
console.log(newList);
//# sourceMappingURL=doublyLinkedList.js.map