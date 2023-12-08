class Bst {
  value: number;
  left: Bst | null
  right: Bst | null

  constructor(value: number){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function InOrderTraversal(tree: Bst| null, array: number[]): number[]{
    if(tree !== null){
        InOrderTraversal(tree.left, array)
        array.push(tree.value)
        InOrderTraversal(tree.right, array)
    }
    return array
}

export function PreOrderTraversal(tree: Bst, array: number[]):number[] {
    if(tree !== null){
        array.push(tree.value)
        PreOrderTraversal(tree.left, array)
        PreOrderTraversal(tree.right, array)
    }
    return array
}

export function PostOrderTraversal(tree: Bst, array: number[]): number[]{
    if(tree !==null){
        PostOrderTraversal(tree.left, array)
        PostOrderTraversal(tree.right, array)
        array.push(tree.value)
    }
    return array
}
