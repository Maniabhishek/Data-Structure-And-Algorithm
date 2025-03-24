```ts
import { BT } from "./2.inorder";

let max = 0
function maxPathSum(root: BT){
    if(root == null){
        return 0
    }

    let leftSum = maxPathSum(root.left)
    let rightSum = maxPathSum(root.right)

    max = Math.max(max, root.value+leftSum+rightSum)
    return root.value + Math.max(leftSum, rightSum)
}

export function callMaxPathSum(){
    const root = new BT(100)
    root.left = new BT(2)
    root.right = new BT(3)

    root.right.left = new BT(4)
    root.right.right = new BT(5)

    root.right.left.left = new BT(6)
    root.right.left.left.left = new BT(7)

    root.right.right.right = new BT(8)
    root.right.right.right.right = new BT(9)
    maxPathSum(root)
    console.log(max)
}
```
