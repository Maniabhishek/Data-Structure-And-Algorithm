- Given a Binary Tree, return its maximum width. The maximum width of a Binary Tree is the maximum diameter among all its levels. The width or diameter of a level is the number of nodes between the leftmost and rightmost nodes.
- to solve this problem first check the notes try to solve the same , then will be able to code by yourself

<img width=400 src="https://github.com/user-attachments/assets/23aac887-63bb-42d2-acb9-f8242ac4926d">

<img width=400 src="https://github.com/user-attachments/assets/7acb18c4-aa83-437e-8a94-88065e477280">

```ts
import { BT } from "./2.inorder";

function maximumDepthOfBT(root: BT){
    let queue: [BT, number][] = [[root, 0]]
    
    let ans = 0
    while(queue.length){
        let minIdx: number = queue[0][1]
        let maxIdx: number = queue[0][1]

        let size = queue.length
        for(let i = 0; i < size; i++){
            let poppedElement = queue.shift()
            maxIdx = poppedElement[1]
            let curr_id: number = poppedElement[1]
            if(poppedElement[0].left){
                queue.push([poppedElement[0].left, 2*curr_id])
            }

            if(poppedElement[0].right){
                queue.push([poppedElement[0].right, 2*curr_id+1])
            }
        }

        ans = Math.max(ans, maxIdx + 1)
    }
    return ans
}

export function CallmaximumDepthOfBT(){
    const root = new BT(1)

    // root.left = new BT(2)
    // root.right = new BT(3)

    // root.left.left = new BT(4)
    // root.right.right = new BT(5)

    root.left = new BT(2)
    root.right = new BT(3)

    root.left.left = new BT(4)

    console.log(maximumDepthOfBT(root))
}
```
