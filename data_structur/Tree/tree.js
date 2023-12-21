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
const data = [5, 10, 21, 87, 301, 350];
const tree = new Tree();
tree.buildTree(data);
prettyPrint(tree.root);
console.log(tree);
//# sourceMappingURL=tree.js.map