#### Find height of a binary tree

- to find the height of the tree we can do so using recursive approach and iterative approach both
- to solve iteratively we can use the level order travesal as showm below in the code
- with iterative approach space complexity will be O(N) and with recusrive approach we are not using extra space but it will have auxilliary space 


<img src="https://github.com/user-attachments/assets/c048cd69-0a8c-402c-b8eb-bce356a559cb" width=400 height=400>

```ts
import { BT } from "../tree/2.inorder";

function findHeightOfBinaryTree(root: BT){
    if(root == null) return -1

    let left = findHeightOfBinaryTree(root.left)
    let right = findHeightOfBinaryTree(root.right)

    return 1 + Math.max(left, right)
}

export function callfindHeightOfBinaryTree(){
    const root = new BT(1)

    root.left = new BT(2)
    root.right = new BT(3)

    root.right.right = new BT(4)

    console.log(findHeightOfBinaryTree(root))
}

```

#### Using level order traversal
```ts
function findHeightUsingLevelOrderTraversal(root: BT){
    const queue = [root]

    let height = -1
    while(queue.length){
        let queueSize = queue.length

        for(let i = 0; i < queueSize; i++){
            let poppedElement = queue.shift()
            if(poppedElement.left){
                queue.push(poppedElement.left)
            }
            if(poppedElement.right){
                queue.push(poppedElement.right)
            }
        }
        height++
    }
    return height
}
```
