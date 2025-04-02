![image](https://github.com/user-attachments/assets/f6f59c9d-6190-48d4-a24d-6e912ced2e3e)

![image](https://github.com/user-attachments/assets/3b90c48a-0936-4c6f-a6ed-13dfc3fb2bf2)


```ts
import { BT } from "./2.inorder";

function findNodeATsDistanceK(root: BT, target: BT, k: number){
    const parentTrack = new Map()
    markParent(root, parentTrack)

    const visited = new Map()
    const queue = [target]
    visited.set(target, true) 
    let distance = 0
    while(queue.length){
        if(distance == k) {
            break;
        }
        distance++
        const size = queue.length
        for(let i = 0; i < size; i++){
            const poppedElement = queue.shift()
    
            if(poppedElement.left && !visited.has(poppedElement.left)){
                queue.push(poppedElement.left)
                visited.set(poppedElement.left, true)
            }
    
            if(poppedElement.right && !visited.has(poppedElement.right)){
                queue.push(poppedElement.right)
                visited.set(poppedElement.right, true)
            }
    
            const parent = parentTrack.get(poppedElement)
            if(parentTrack.has(poppedElement) && !visited.has(parent)){
                queue.push(parent)
                visited.set(parent, true)
            }
        }
    }
    console.log(queue)
    for(let i = 0; i < queue.length; i++){
        console.log(queue[i].value)
    }
}

function markParent(root: BT, map: Map<any, any>){
    const queue = [root]
    while(queue.length){
        let poppedElement = queue.shift()

        if(poppedElement.left){
            queue.push(poppedElement.left)
            map.set(poppedElement.left, poppedElement)
        }

        if(poppedElement.right){
            queue.push(poppedElement.right)
            map.set(poppedElement.right, poppedElement)
        }
    }
}

export function callfindNodeATsDistanceK(){
    const root = new BT(3)
    root.left = new BT(5)
    root.right = new BT(1)

    root.left.left = new BT(6)
    root.left.right = new BT(2)

    root.right.left = new BT(0)
    root.right.right = new BT(8)

    root.left.right.left = new BT(7)
    root.left.right.right = new BT(4)

    findNodeATsDistanceK(root, root.left, 2)
}

```
