#### Find height of a binary tree

```ts
import { BT } from "../tree/2.inorder";

function findHeightOfBinaryTree(root: BT){
    if(root == null) return 0

    let left = findHeightOfBinaryTree(root.left)
    let right = findHeightOfBinaryTree(root.right)

    return 1 + Math.max(left, right)
}

export function callfindHeightOfBinaryTree(){
    const root = new BT(1)

    root.left = new BT(2)
    root.right = new BT(3)

    root.right.right = new BT(4)

    console.log(findHeightOfBinaryTree(root))
}

```
