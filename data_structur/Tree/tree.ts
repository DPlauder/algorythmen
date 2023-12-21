class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;
  constructor(val: T) {
    this.value = val;
  }
}
class Tree<T> {
  root: TreeNode<T> | null = null;
  //TODO: Define height and depth;

  buildTree(data: T[], start: number = 0, end: number = data.length - 1) {
    if (start > end) return null;
    //Array sortieren
    //data.sort((a: number, b: number) => a - b);
    let mid = Math.floor((start + end) / 2);
    let node = new TreeNode(data[mid]);
    node.left = this.buildTree(data, start, mid - 1);
    node.right = this.buildTree(data, mid + 1, end);
    return (this.root = node);
  }
}
const prettyPrint = (node: TreeNode<number>, prefix = "", isLeft = true) => {
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
prettyPrint(tree.root as TreeNode<number>);
console.log(tree);
