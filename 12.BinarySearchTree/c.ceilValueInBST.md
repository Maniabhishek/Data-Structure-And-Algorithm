```ts
import { BT } from "../tree/2.inorder";

let ans: number
function findCeil(root: BT, cvo: number){
    if(root === null) return 

    if(root.value === cvo) {
        ans = root.value
        return 
    }

    if(cvo > root.value ){
        return findCeil(root.right, cvo)
    }else {
        ans = root.value
        return findCeil(root.left, cvo)
    }
}

function CeilValue(root: BT, cvo: number){
    let ceil 
    while(root){
        if(root.value === cvo){
            return root.value
        }else if(cvo > root.value){
            root = root.right
        }else {
            ceil = root.value
            root = root.left
        }
    }
    return ceil
}

export function CallfindCeil(){
    const root = new BT(10)
    root.left = new BT(5)
    root.right = new BT(13)
    root.left.left = new BT(3)
    root.left.right = new BT(6)
    root.left.right.right = new BT(9)
    root.left.left.left = new BT(2)
    root.left.left.right = new BT(4)

    root.right.left = new BT(11)
    root.right.right = new BT(14)
    console.log(CeilValue(root, 12))

}

```
