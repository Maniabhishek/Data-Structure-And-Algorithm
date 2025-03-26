```ts
import { BT } from "./2.inorder";

function isSymmetryBT(left: BT, right: BT){
    if(left === null || right === null){
        return left === right
    }

    if(left.value !== right.value) return false

    return isSymmetryBT(left.left, right.right) && isSymmetryBT(left.right, right.left)
}

export function CallisSymmetryBT(){
    const root = new BT(1)

    root.left = new BT(2)
    root.left.left = new BT(3)
    root.left.right = new BT(4)

    root.right = new BT(2)
    root.right.left = new BT(4)
    root.right.right = new BT(3)

    console.log(isSymmetryBT(root.left, root.right))
}

```
