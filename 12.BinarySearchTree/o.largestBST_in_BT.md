- we need to find the largest BST in BT , if we go on traversing every node and check if it is a validBST or not , if valid then we can store the size of that BST 

```ts
import { BT } from "../tree/2.inorder";

function validateBST(root: BT, min: number, max: number){
    if(root == null) return true

    if(root.value <= min || root.value >= max){
        return false
    }

    return validateBST(root.left, min, root.value) && validateBST(root.right, root.value, max)
}

let size = 0
function sizeOfBST(root: BT){
    if(root === null) return null

    sizeOfBST(root.left)
    size++
    sizeOfBST(root.right)
}

let maxSize = -Infinity
function largestBSTinBT(root: BT){
    if(root === null) return null
    if(validateBST(root, -Infinity, Infinity)){
        size = 0
        sizeOfBST(root)
        maxSize = Math.max(size, maxSize)
    }

    largestBSTinBT(root.left)
    largestBSTinBT(root.right)
}

export function CalllargestBSTinBT(){
    const root = new BT(10)
    root.left = new BT(5)
    root.left.left = new BT(1)
    root.left.right = new BT(8)

    root.right = new BT(15)
    root.right.right = new BT(7)

    largestBSTinBT(root)
    console.log(maxSize)
}

```
