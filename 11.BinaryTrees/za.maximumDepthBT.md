- to solve this problem first check the notes try to solve the same , then will be able to code by yourself

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
