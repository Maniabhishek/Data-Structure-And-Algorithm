#### Iterative Preorder Traversal

<img width="454" alt="image" src="https://github.com/user-attachments/assets/b32dcbb8-c2ff-42ea-92a6-6e0577545940" />


```ts
import { BT } from "./2.inorder";

function iterativePreorder(node: BT){
    const stack = [node]

    const result = []
    while(stack.length){
        const poppedNode = stack.pop()
        if(poppedNode.right){
            stack.push(poppedNode.right)
        }

        if(poppedNode.left){
            stack.push(poppedNode.left)
        }
        result.push(poppedNode.value)
    }
    console.log(result)
}

export function calliterativePreorder(){
    const tree: BT = new BT(1)

    tree.left = new BT(2)
    tree.right = new BT(3)

    tree.left.left = new BT(4)
    tree.left.right = new BT(5)

    tree.left.right.left = new BT(6)
    tree.left.right.right = new BT(7)

    iterativePreorder(tree)
}

```
