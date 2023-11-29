/*
  Time Complexity: O(N)
  Space Complexity: O(D) D is the depth of the tree as at each level we calling function it remains in call stack memory
*/

class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function validateBst(tree: BST) {
  // Write your code here.
  
  return validateBstHelper(tree, -Infinity, Infinity);
}

export function validateBstHelper(tree: BST | null, minValue: number, maxValue: number):boolean{
  if(tree == null) return true
  if(tree.value < minValue || tree.value >= maxValue) return false

  const isValidBst = validateBstHelper(tree.left, minValue, tree.value)
  return isValidBst && validateBstHelper(tree.right, tree.value, maxValue)
}
