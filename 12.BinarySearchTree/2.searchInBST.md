- since all the elements greater than root node will be on the right side and smaller ones are on left side we will take advantage of this and keep traversing until we find the node which is being searched

```ts
import { BT } from "../tree/2.inorder";

function searchInBST(root: BT, search: number){
    if(root == null){
        return 
    }

    if(root.value === search) return root

    if(search < root.value){
        return searchInBST(root.left, search)
    }else {
        return searchInBST(root.right, search)
    }
}   

// or
function searchInBST2(root: BT, search: number){
    while(root != null && root.value != search){
        root = root.value > search ? root.left : root.right
    }
    return root
}

export function callSearchINBST(){
    const root = new BT(8)
    root.left = new BT(4)
    root.right = new BT(20)

    root.left.left = new BT(2)
    root.left.right = new BT(6)
    root.right.left = new BT(10)
    root.right.right = new BT(30)

    const res = searchInBST2(root, 6)
    console.log(res.value)
}
```
