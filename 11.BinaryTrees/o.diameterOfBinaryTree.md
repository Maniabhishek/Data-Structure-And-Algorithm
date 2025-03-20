- to find the diameter of tree, diameter is said to be longest length between one node to another node (root is not necessary to be part of)
- so if at every node we start calculating hight of left subtree and right subtree then add these height we can get the length between two node from any given node and maximum of that will give us diameter of tree

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

- another approach can be used in same code as calculation of height when we are calculating the height of tree we can also calculate the diameter of tree

```ts
let maxDiameter = 0
function findHeightWithDiameter(root: BT){
    if(root == null){
        return 0
    }

    let lh = findHeightWithDiameter(root.left)
    let rh = findHeightWithDiameter(root.right)
    maxDiameter = Math.max(maxDiameter, lh+rh)
    return 1+Math.max(lh,rh)
}

function findDiameterUsingHeight(){
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
    findHeightWithDiameter(root)
    return maxDiameter
}


export function callfindDiameterUsingHeight(){
    console.log(findDiameterUsingHeight())
}
```
