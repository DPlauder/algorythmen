"use strict";
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    //add item at end of list
    append(value) {
        const newListNode = new ListNode(value);
        if (this.head === null)
            this.head = newListNode;
        if (this.tail != null)
            this.tail.next = newListNode;
        this.tail = newListNode;
        this.length++;
        return this;
    }
    //remove last item from list
    pop() {
        if (!this.head) {
            return undefined;
        }
        let pre = null;
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
        this.tail.next = null;
        this.length--;
        return tmp;
    }
    // remove first item
    shift() {
        const tmp = this.head;
        if (!tmp)
            return undefined;
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
    unshift(value) {
        const newListNode = new ListNode(value);
        if (this.head) {
            newListNode.next = this.head;
        }
        else
            this.tail = newListNode;
        this.head = newListNode;
        this.length++;
        return this;
    }
    //get a node from specific index
    get(index) {
        if (index >= this.length || index < 0)
            return undefined;
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode === null || currentNode === void 0 ? void 0 : currentNode.next;
        }
        return currentNode;
    }
    //change the value of node item with specific index
    set(value, index) {
        if (index >= this.length || index < 0)
            return false;
        let currentNode = this.get(index);
        currentNode.value = value;
        return true;
    }
    // add node on a specific index
    insert(value, index) {
        if (index > this.length || index < 0)
            return undefined;
        let newNode = new ListNode(value);
        if (index === 0) {
            this.unshift(value);
            return newNode;
        }
        let beforeNode = this.get(index - 1);
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
    //remove node on specific index
    remove(index) {
        if (index >= this.length || index < 0)
            return undefined;
        if (index === 0)
            return this.shift();
        if (index === this.length - 1)
            return this.pop();
        let beforeNode = this.get(index - 1);
        let removeNode = beforeNode.next;
        beforeNode.next = removeNode.next || null;
        this.length--;
        return removeNode;
    }
    //reverse list
    reverse() {
        if (!this.head)
            return undefined;
        let curentNode = this.head;
        this.head = this.tail;
        this.tail = curentNode;
        let next = null;
        let prev = null;
        while (curentNode !== null) {
            next = curentNode.next;
            curentNode.next = prev;
            prev = curentNode;
            curentNode = next;
        }
        return this;
    }
}
const myList = new SinglyLinkedList();
myList.append(5);
myList.append(7);
myList.append(8);
myList.append(1);
console.log(myList);
//# sourceMappingURL=datastructur.js.map