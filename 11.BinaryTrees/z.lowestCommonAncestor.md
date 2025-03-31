![image](https://github.com/user-attachments/assets/d0e081d3-3ea1-49ae-a2c6-61628d85f221)

![image](https://github.com/user-attachments/assets/a0fe80d6-5499-43b9-a6dc-7d759f2f66b4)


```ts
import { BT } from "./2.inorder";

function lowestCommonAncestors(root: BT, p: BT, q: BT): BT{
    if(root == null || root == p || root == q){
        return root
    }

    let left = lowestCommonAncestors(root.left, p, q)
    let right = lowestCommonAncestors(root.right, p, q)

    if(left == null){
        return right
    }else if (right == null){
        return left
    }else {
        return root
    }
}

export function calllowestCommonAncestors(){
    const root = new BT(1)
    root.left = new BT(2)
    root.right = new BT(3)

    root.right.left = new BT(4)
    root.right.left.left = new BT(6)

    root.right.right = new BT(5)

    root.right.right.left = new BT(7)
    root.right.right.right = new BT(8)

    // LCS of 6 and 8
    const lcs = lowestCommonAncestors(root, root.right.left.left, root.right.right.right)
    console.log(lcs.value)
}
```
