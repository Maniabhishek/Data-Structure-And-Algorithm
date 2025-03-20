```ts
import { BT } from "../tree/2.inorder";
let maxHeight = 0
function findDiameter(root: BT){
    if(root == null ){
        return 
    }

    let ltheight = findHeightOfBinaryTree(root.left)
    let rtheight = findHeightOfBinaryTree(root.right)

    maxHeight = Math.max(maxHeight, ltheight+rtheight)

    findDiameter(root.left)
    findDiameter(root.right)
}

function findHeightOfBinaryTree(root: BT){
    if(root == null) return 0

    let left = findHeightOfBinaryTree(root.left)
    let right = findHeightOfBinaryTree(root.right)

    return 1 + Math.max(left, right)
}

export function callfindDiameter(){
    const root = new BT(1)

    // root.right = new BT(2)

    // root.right.left = new BT(3)
    // root.right.right = new BT(4)

    // root.right.left.left = new BT(5)
    // root.right.right.right = new BT(6)

    root.left = new BT(2)
    root.right = new BT(3)

    root.right.left = new BT(4)
    root.right.right = new BT(5)

    root.right.left.left = new BT(6)
    root.right.left.left.left = new BT(7)

    root.right.right.right = new BT(8)
    root.right.right.right.right = new BT(9)

    findDiameter(root)
    console.log(maxHeight)
}
```
