https://github.com/user-attachments/assets/2af3e58a-c0be-4730-9f0d-8ae2eb8577c3


```ts
import { BT } from "./2.inorder";

function isLeaf(root: BT){
    return !root.left && !root.right
}

function addLeftBoundary(root:BT, res: number[]){
    let curr = root.left

    while(curr){
        if(!isLeaf(curr)){
            res.push(curr.value)
        }

        if(curr.left){
            curr= curr.left
        }else {
            curr = curr.right
        }
    }
}

function addRightBoundary(root: BT, res: number[]){
    let curr = root.right
    let temp = []
    while(curr){
        if(!isLeaf(curr)){
            temp.push(curr.value)
        }

        if(curr.right){
            curr = curr.right
        }else {
            curr = curr.left
        }
    }

    for(let i = temp.length - 1; i >= 0; i--){
        res.push(temp[i])
    }
}

function addLeaves(root: BT, res: number[]){
    if(isLeaf(root)){
        res.push(root.value)
        return
    }

    if(root.left){
        addLeaves(root.left, res)
    }

    if(root.right){
        addLeaves(root.right, res)
    }
}

export function callBoundaryTraversal(){
    let root = new BT(1);
    root.left = new BT(2);
    root.right = new BT(3);
    root.left.left = new BT(4);
    root.left.right = new BT(5);
    root.right.left = new BT(6);
    root.right.right = new BT(7);

    let res: number[] = []

    if(!root) return res

    res.push(root.value)

    addLeftBoundary(root, res)
    addLeaves(root, res)
    addRightBoundary(root, res)

    console.log(res)
}

```
