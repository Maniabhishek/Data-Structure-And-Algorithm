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
