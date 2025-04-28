```ts
import { BT } from "../tree/2.inorder";

function floorValueOf(root: BT, fvo: number){
    let floorValue: number

    while(root){
        if(root.value === fvo){
            return root.value
        }else if(fvo > root.value){
            floorValue = root.value
            root = root.right
        }else {
            root = root.left
        }
    }
    return floorValue
}

export function callFloorValueOf(){
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
    console.log(floorValueOf(root, 12))
}

```
