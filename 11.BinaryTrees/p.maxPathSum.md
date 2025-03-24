<img width=400 height=400 src="https://github.com/user-attachments/assets/c39aa2b9-1c95-4f8c-8541-d823beaa0c8c">

<img width=400 height=400 src="https://github.com/user-attachments/assets/ca14e51d-74d5-44c1-94b0-763bce24ee1b">

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
