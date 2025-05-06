- To find the successor and predecessor of inorder , if there is tree with inorder value are 1,2,3,4,5,6,7,8,9
- so successor of 7 is 8
- the idea is simple if we have to find the successor of 7 then check which side of tree 7 lies if on right then successor is yet to come as it right , but if its on left then current root node can be successor 

```ts
import { BT } from "../tree/2.inorder";

function InorderSuccessor(root: BT, val: number){
    let successor = null

    while(root){
        // this equal to value is important when value is equal then then its successor can only be on right
        if(val >= root.value){
            root = root.right
        }else {
            successor = root
            root = root.left
        }
    }
    return successor.value
}

function InorderPredecessor(root: BT, val: number){
    let predecessor: BT = null
    while(root){
        // this equals to is important, when value is equal root value then its predecessor can only be on left
        if(val <= root.value){
            // if(val === root.value && root.left != null){
            //     predecessor = root.left
            // }
            root = root.left
        }else {
            predecessor = root
            root = root.right
        }
    }
    return predecessor.value
}

export function callInorderSuccessor(){
    const root = new BT(5)
    root.left = new BT(2)
    root.right = new BT(7)

    root.left.left = new BT(1)
    root.left.right = new BT(4)
    root.left.right.left = new BT(3)

    root.right.left = new BT(6)
    root.right.right = new BT(9)
    root.right.right.left = new BT(8)
    root.right.right.right = new BT(10)

    console.log(InorderPredecessor(root, 5))
}
```
