// time complexity : O(nlog(n)) 
// space complexity : O(n)


export function minHeightBst(array: number[]) {
  return constructionMinHeightBst(array, null, 0, array.length - 1);
}

function constructionMinHeightBst(array: number[], bst: BST | null, startIndex: number, endIndex: number) {
  if(endIndex < startIndex) return 
  const midIndex = Math.floor((endIndex + startIndex)/2)
  const value = array[midIndex]
  if(bst === null){
    bst = new BST(value)
  }else{
    bst.insert(value)
  }

  constructionMinHeightBst(array, bst, startIndex, midIndex - 1)
  constructionMinHeightBst(array, bst, midIndex + 1, endIndex)
  return bst
}

export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value: number) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}
