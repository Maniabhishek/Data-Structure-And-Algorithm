```ts
import { BT } from "./2.inorder";

function rootToNodePath(root: BT, arr: number[], x: number){
    if(!root){
        return false
    }

    arr.push(root.value)

    if(root.value === x){
        return true
    }

    if(rootToNodePath(root.left, arr, x)|| rootToNodePath(root.right, arr, x)){
        return true
    }

    arr.pop()
    return false
}

export function CallRootToNodePath(){
    let root = new BT(1);
    root.left = new BT(2);
    root.right = new BT(3);
    root.left.left = new BT(4);
    root.left.right = new BT(5);
    root.right.left = new BT(6);
    root.right.right = new BT(7);

    const arr = []
    rootToNodePath(root, arr, 7)
    console.log(arr)
}

```
