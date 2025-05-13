Problem Statement: Given a Binary Tree, convert it to a Linked List where the linked list nodes follow the same order as the pre-order traversal of the binary tree.

<img width=400 height=500 src="https://github.com/user-attachments/assets/08d7d532-041e-4253-9a34-b274a9e34dc8">

- using preorder in the above tree it will be 1,2,3,4,5,6,7, so inorder to convert bt to LL, we will start connecting in reverse manner
```ts
import { BT } from "./2.inorder";

let prev = null
function flattenBTToLL(root: BT){
    if(root == null) return 

    flattenBTToLL(root.right)
    flattenBTToLL(root.left)

    root.right = prev
    root.left = null
    prev = root
}

function printLL(root: BT){
    let temp = root
    while(temp){
        console.log(temp.value)
        temp = temp.right
    }
}

export function CallflattenBTToLL(){
    const root = new BT(1)
    root.left = new BT(2)
    root.left.right = new BT(3)
    root.left.right.right = new BT(4)

    root.right = new BT(5)
    root.right.right = new BT(6)
    root.right.right.right = new BT(7)

    flattenBTToLL(root)
    printLL(root)
}
```

