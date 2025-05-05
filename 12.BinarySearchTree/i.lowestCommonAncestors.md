```ts
import { BT } from "../tree/2.inorder"

function LCABST(root: BT, val1: number, val2: number){

    while(true){
        if(val1 > root.value && val2 > root.value){
            root = root.right
        }else if(val1 < root.value && val2 < root.value){
            root = root.left
        }else {
            return root.value
        }
    }
}

function recursiveLCABST(root: BT, val1: number, val2: number){
    if(root === null) return null

    if(val1 > root.value && val2 > root.value){
        return recursiveLCABST(root.right, val1, val2)
    }else if(val1 < root.value && val2 < root.value){
        return recursiveLCABST(root.left, val1, val2)
    }

    return root.value
}

export function CallLCABST(){
    const root = new BT(5)
    root.left = new BT(3)
    root.right = new BT(7)

    root.left.left = new BT(1)
    root.left.right = new BT(4)
    root.left.left.right = new BT(2)

    root.right.left = new BT(6)
    root.right.right = new BT(8)

    console.log(recursiveLCABST(root, 1, 4))
}
```
