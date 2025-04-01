![image](https://github.com/user-attachments/assets/c9a34119-79b6-488b-9f04-b1aed57ea097)

![image](https://github.com/user-attachments/assets/3f9039b4-0d68-47d3-bbc9-5ffbf1168ea8)

```ts
import { BT } from "./2.inorder";

function ChildrenSumProperty(root: BT){
    if(!root) return 

    let child = 0

    if(root.left){
        child += root.left.value
    }

    if(root.right){
        child += root.right.value
    }

    if(child >= root.value) root.value = child
    else {
        if(root.left){
            root.left.value = root.value
        }else if(root.right){
            root.right.value = root.value
        }
    }

    ChildrenSumProperty(root.left)
    ChildrenSumProperty(root.right)

    let tot = 0
    if(root.left) tot += root.left.value
    if(root.right) tot += root.right.value
    if(root.left || root.right) root.value = tot
}

export function CallChildrenSumProperty(){
    const root = new BT(80)
    root.left = new BT(7)
    root.right = new BT(8)

    root.left.left = new BT(8)
    root.left.right = new BT(8)

    root.right.left = new BT(15)
    root.right.right = new BT(20)

    ChildrenSumProperty(root)
    console.log(root)
}
```
