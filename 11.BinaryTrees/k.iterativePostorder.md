#### Iterative Postorder Traversal

<img width="421" alt="image" src="https://github.com/user-attachments/assets/a218d941-ce31-4d39-8a5e-0ee22317acc3" />

```ts
import { BT } from "./2.inorder";

function iterativePostorder(node: BT){
    let stack1 = [node]
    let stack2 = []

    while(stack1.length){
        const poppedElement = stack1.pop()
        if(poppedElement.left){
            stack1.push(poppedElement.left)
        }

        if(poppedElement.right){
            stack1.push(poppedElement.right)
        }

        stack2.push(poppedElement.value)
    }
    while(stack2.length){
        console.log(stack2.pop())
    }
}

export function CalliterativePostorder(){
    const tree: BT = new BT(1)

    tree.left = new BT(2)
    tree.right = new BT(3)

    tree.left.left = new BT(4)
    tree.left.right = new BT(5)

    tree.left.right.left = new BT(6)
    tree.left.right.right = new BT(7)
    iterativePostorder(tree)
}




```
