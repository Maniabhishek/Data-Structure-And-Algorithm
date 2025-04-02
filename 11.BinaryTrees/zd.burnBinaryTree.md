- time to burn binary tree if lets say node 1 is connected to 2 and 3 then 2 and 3 will be burned at the same time , similarly connected node to 2 and 3 will burn at same time

![image](https://github.com/user-attachments/assets/f160dfc4-780c-4605-bdd3-5ae3717dc570)
![image](https://github.com/user-attachments/assets/da1d66f1-ed88-4c80-8016-a31d899c003a)


```ts
import { BT } from "./2.inorder";

function burnBinaryTree(root: BT, node: BT){
    const parentTrack = new Map()
    markParent(root, parentTrack)

    const visited = new Map()
    visited.set(node, true)

    const queue = [node]
    let time = 0
    while(queue.length){
        let size = queue.length
        
        let didItBurn = 0
        // these all nodes will burn at the same time thus if it buns any then add 1 to time
        for(let i = 0; i < size; i++) {
            const poppedElement = queue.shift()

            if(poppedElement.left && !visited.has(poppedElement.left)){
                didItBurn = 1
                visited.set(poppedElement.left, true)
                queue.push(poppedElement.left)
            }

            if(poppedElement.right && !visited.has(poppedElement.right)){
                didItBurn = 1
                visited.set(poppedElement.right, true)
                queue.push(poppedElement.right)
            }

            const parentOfCurrentNode = parentTrack.get(poppedElement)
            if(parentTrack.has(poppedElement) && !visited.has(parentOfCurrentNode)){
                didItBurn = 1
                visited.set(parentOfCurrentNode, true)
                queue.push(parentOfCurrentNode)
            }
        }
        if(didItBurn === 1) time++
    }
    return time
}

function markParent(root: BT, map: Map<any, any>){
    let queue = [root]

    while(queue.length){
        const poppedElement = queue.shift()

        if(poppedElement.left){
            map.set(poppedElement.left, poppedElement)
            queue.push(poppedElement.left)
        }

        if(poppedElement.right){
            map.set(poppedElement.right, poppedElement)
            queue.push(poppedElement.right)
        }
    }
}

export function callburnBinaryTree(){
    const root = new BT(1)
    root.left = new BT(2)
    root.right = new BT(3)

    root.left.left = new BT(4)
    root.right.left = new BT(5)
    root.right.right = new BT(6)

    root.left.left.right = new BT(7)

    console.log(burnBinaryTree(root, root.left))
}

```
