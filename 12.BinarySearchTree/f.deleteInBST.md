<img width=400 src="https://github.com/user-attachments/assets/300bf2e6-87ad-4ab1-bef5-b036e9ab0c4f">

<img width=400 src="https://github.com/user-attachments/assets/b6adcc16-2b2b-4548-876a-58bb4ceb0573">

<img width=400 src="https://github.com/user-attachments/assets/8a5748d6-73fe-45b3-90fe-8310a09ea318">



```ts
import { BT } from "../tree/2.inorder";

function deleteNodeInBST(root: BT, toDelete: number){
    let dummyNode = root

    if(dummyNode.value === toDelete){
        return helper(root)
    }
    while(root){
        if(root.value > toDelete){
            if(root.left && root.left.value === toDelete){
                root.left = helper(root.left)
                break
            }else {
                root = root.left
            }
        }else {
            if(root.right && root.right.value === toDelete){
                root.right = helper(root.right)
                break;
            }else {
                root = root.right
            }
        }
    }
    return dummyNode
}

function helper(root: BT){
    if(!root.left){
        return root.right
    }else if(!root.right){
        return root.left
    }

    let leftChild = root.left
    let lastLeft = findLastLeft(root.right)
    lastLeft.left = leftChild
    return root.right
}

function findLastLeft(root: BT){
    if(root.left === null){
        return root
    }
    return findLastLeft(root.left)
}

export function CalldeleteNodeInBST(){
    const root = new BT(20)
    root.left = new BT(10)
    root.right = new BT(30)
    root.left.left = new BT(5)
    root.left.right = new BT(15)

    root.right.left = new BT(25)
    root.right.right = new BT(35)
    root.right.right.right = new BT(40)

    deleteNodeInBST(root, 35)
    console.log(root)
}
```
