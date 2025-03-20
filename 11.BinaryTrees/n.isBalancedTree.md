- to check if a tree is balanced or not we can simply use the previous algorithm where we are calculting the height of tree

```ts
import { BT } from "../tree/2.inorder";

function isBalancedTree(root: BT){
    if(root == null){
        return 0
    }

    let lh = isBalancedTree(root.left)
    if(lh == -1) return -1
    let rh = isBalancedTree(root.right)
    if(rh == -1) return -1

    if(Math.abs(lh-rh) > 1) return -1

    return 1 + Math.max(lh, rh)
}

export function CallisBalancedTree(){
    const root = new BT(1)

    root.left = new BT(2)
    root.right = new BT(3)

    root.right.right = new BT(4)

    console.log(isBalancedTree(root) !== -1)
}
```
