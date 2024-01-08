"use strict";
class TreeNode {
    constructor(val) {
        this.left = null;
        this.right = null;
        this.value = val;
    }
}
class Tree {
    constructor() {
        this.root = null;
    }
    //TODO: Define height and depth;
    buildTree(data, start = 0, end = data.length - 1) {
        if (start > end)
            return null;
        //Array sortieren
        //data.sort((a: number, b: number) => a - b);
        let mid = Math.floor((start + end) / 2);
        let node = new TreeNode(data[mid]);
        node.left = this.buildTree(data, start, mid - 1);
        node.right = this.buildTree(data, mid + 1, end);
        return (this.root = node);
    }
    insert(value) {
        let newNode = new TreeNode(value);
        if (!this.root)
            return (this.root = newNode);
        let current = this.root;
        while (true) {
            if (value === current.value)
                return;
            if (value < current.value) {
                if (!current.left)
                    return (current.left = newNode);
                current = current.left;
            }
            if (value > current.value) {
                if (!current.right)
                    return (current.right = newNode);
                current = current.right;
            }
        }
    }
    insertRec(value) {
        var _a;
        const check = (node) => {
            var _a, _b;
            if (node.value === value)
                return;
            if (node.value > value) {
                check((node.left = (_a = node.left) !== null && _a !== void 0 ? _a : new TreeNode(value)));
            }
            if (node.value < value) {
                check((node.right = (_b = node.right) !== null && _b !== void 0 ? _b : new TreeNode(value)));
            }
        };
        check((this.root = (_a = this.root) !== null && _a !== void 0 ? _a : new TreeNode(value)));
    }
    find(value) {
        var _a;
        //if (!this.root) return;
        const search = (node, value) => {
            var _a;
            if (node === null)
                return;
            if (node.value === value)
                return node;
            return (_a = search(node.left, value)) !== null && _a !== void 0 ? _a : search(node.right, value);
        };
        return (_a = search(this.root, value)) !== null && _a !== void 0 ? _a : -1;
    }
}
const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└──" : "┌──"}${node.value}`);
    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? "│   " : "    "}`, true);
    }
};
//const data = [5, 10, 21, 87, 301, 350];
const tree = new Tree();
tree.insertRec(5);
tree.insertRec(6);
tree.insertRec(2);
tree.insertRec(3);
console.log(tree.find(6));
//tree.buildTree(data);
prettyPrint(tree.root);
//# sourceMappingURL=tree.js.map