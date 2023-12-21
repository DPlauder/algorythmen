"use strict";
class QueueNode {
    constructor(value) {
        this.next = null;
        this.value = value;
    }
}
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val) {
        const newNode = new QueueNode(val);
        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
    dequeue() {
        if (this.size == 0)
            return undefined;
        const temp = this.first;
        if (this.size === 1) {
            this.first = null;
            this.last = null;
        }
        this.first = temp.next;
        this.size--;
        return temp;
    }
}
const newList = new Queue();
newList.enqueue(1);
newList.enqueue(2);
newList.dequeue();
console.log(newList);
//# sourceMappingURL=queue.js.map