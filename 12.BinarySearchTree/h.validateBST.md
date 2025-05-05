
- we need to validate if given bst is valid or not , this can be solved easily if we can find the range for each node 

```ts
import { BT } from "../tree/2.inorder";


function validateBST(root: BT, min: number, max: number){
    if(root === null){
        return true
    }

    if(root.value >= max || root.value <= min) return false

    return  validateBST(root.left, min, root.value) && validateBST(root.right, root.value, max)
}


export function CallValidateBST(){
    const root = new BT(5)
    root.left = new BT(3)
    root.right = new BT(7)

    root.left.left = new BT(1)
    root.left.right = new BT(4)
    root.left.left.right = new BT(2)

    root.right.left = new BT(6)
    root.right.right = new BT(8)

    console.log(validateBST(root, -Infinity, Infinity))
}
```
