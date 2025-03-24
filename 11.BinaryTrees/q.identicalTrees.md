```ts
import { BT } from "./2.inorder";

// if we keep on checking on every node as we traverse we can find out if the two tree are identical or not
function checkIfTwoTreesAreIdentical(root1: BT, root2: BT){
    if(root1 == null || root2 == null ){
        return root1 === root2
    }

    return root1.value === root2.value && checkIfTwoTreesAreIdentical(root1.left, root2.left) && checkIfTwoTreesAreIdentical(root1.right, root2.right)
}
```
