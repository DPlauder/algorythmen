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
}
