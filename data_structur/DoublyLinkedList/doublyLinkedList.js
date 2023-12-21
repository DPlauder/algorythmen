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
}
const newList = new DoublyLinkedList();
newList.append(7);
newList.append(1);
newList.append(6);
newList.append(8);
console.log(newList.get(-1));
//# sourceMappingURL=doublyLinkedList.js.map