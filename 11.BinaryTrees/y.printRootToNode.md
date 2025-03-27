![image](https://github.com/user-attachments/assets/72e4617d-1c14-417a-ae28-8e51752f49c8)
![image](https://github.com/user-attachments/assets/3ed56085-ddd9-4919-b164-67e6d0e091e4)


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
