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
  insert(value: T) {
    let newNode = new TreeNode<T>(value);
    if (!this.root) return (this.root = newNode);
    let current = this.root;
    while (true) {
      if (value === current.value) return;
      if (value < current.value) {
        if (!current.left) return (current.left = newNode);
        current = current.left;
      }
      if (value > current.value) {
        if (!current.right) return (current.right = newNode);
        current = current.right;
      }
    }
  }
  insertRec(value: T) {
    const check = (node: TreeNode<T>) => {
      if (node.value === value) return;
      if (node.value > value) {
        check((node.left = node.left ?? new TreeNode<T>(value)));
      }
      if (node.value < value) {
        check((node.right = node.right ?? new TreeNode<T>(value)));
      }
    };
    check((this.root = this.root ?? new TreeNode<T>(value)));
  }
  find(value: T) {
    //if (!this.root) return;
    const search: any = (node: TreeNode<T>, value: T) => {
      if (node === null) return;
      if (node.value === value) return node;
      return search(node.left!, value) ?? search(node.right!, value);
    };
    return search(this.root, value) ?? -1;
  }
  breadthFirst() {
    if (!this.root) {
      return -1;
    }
    const queue: TreeNode<T>[] = [this.root];
    const visited: T[] = [];
    let node: TreeNode<T>;
    while (queue.length > 0) {
      node = queue.shift() as TreeNode<T>;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      visited.push(node.value);
    }
    return visited;
  }
  preOrder() {
    if (!this.root) return -1;
    const visited: T[] = [];
    const traverse = (node: TreeNode<T>) => {
      visited.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return visited;
  }
  inOrder() {
    if (!this.root) return -1;
    const visited: T[] = [];
    const traverse = (node: TreeNode<T>) => {
      if (node.left) traverse(node.left);
      visited.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return visited;
  }
  postOrder() {
    if (!this.root) return -1;
    const visited: T[] = [];
    const traverse = (node: TreeNode<T>) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.value);
    };
    traverse(this.root);
    return visited;
  }

  depth(node: TreeNode<T>, start: TreeNode<T> = this.root!) {
    if (!this.root) return 0;
    let depth: number = 0;
    let current = start;
    const travel = (current: TreeNode<T>) => {
      if (current.value === node.value) return depth;
      if (node.value < current.value && current.left) {
        travel(current.left!);
      }
      if (node.value > current.value && current.right) {
        travel(current.right!);
      }
      return depth++;
    };
    travel(current);
    return depth;
  }

  height(node: TreeNode<T>) {
    if (!node) return -1;
    let leftHeight: number = this.height(node.left!);
    let rightHeight: number = this.height(node.right!);
    return Math.max(leftHeight, rightHeight) + 1;
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
const tree = new Tree<number>();
tree.buildTree(data);

console.log(tree.depth(tree.root!.left!.right!, tree.root!.right!.right!));

prettyPrint(tree.root as TreeNode<number>);
