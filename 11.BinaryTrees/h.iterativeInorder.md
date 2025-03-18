#### Iterative Inorder Traversal

<img width="435" alt="image" src="https://github.com/user-attachments/assets/e2d3642f-2030-440e-b6fa-0f2f9adde016" />
<img width="445" alt="image" src="https://github.com/user-attachments/assets/fed135ef-be7f-4551-af08-aa944777eb66" />


```ts
import { BT } from "./2.inorder";

function iterativeInorderTraversal(root: BT){
    let stack = []
    let node = root
    const result = []
    while(true){
        if(node != null){
            stack.push(node)
            node = node.left
        }else {
            if(stack.length === 0){
                break
            }
            const poppedNode = stack.pop()
            result.push(poppedNode.value)
            node = poppedNode.right
        }
    }
    console.log(result)
}

export function calliterativeInorderTraversal(){
    const tree: BT = new BT(1)

    tree.left = new BT(2)
    tree.right = new BT(3)

    tree.left.left = new BT(4)
    tree.left.right = new BT(5)

    tree.left.right.left = new BT(6)
    tree.left.right.right = new BT(7)

    iterativeInorderTraversal(tree)
}
```
