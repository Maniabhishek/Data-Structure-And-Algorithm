<img src="https://github.com/user-attachments/assets/15e97449-eb74-4658-b20d-70602ba87164" width=400>


```ts
import { BT } from "./2.inorder";

const res = []
function rightViewBT(root: BT, level){
    if(root === null){
        return
    }

    if(res.length === level){
        res.push(root.value)
    }

    rightViewBT(root.right, level + 1)
    rightViewBT(root.left, level + 1)
}

export function CallrightViewBT(){
    let root = new BT(1);
    root.left = new BT(2)
    root.right = new BT(3)

    root.left.left = new BT(4)
    root.left.right = new BT(5)
    root.left.right.left = new BT(6)

    root.right.right = new BT(7)

    rightViewBT(root, 0)
    console.log(res)
}


```
