- we can solve this using level order traversal
- on every level we can use a flag revese the order

![image](https://github.com/user-attachments/assets/dfef4075-6554-4988-8b8d-558a9f52e6b2)


```ts
import { BT } from "./2.inorder";

function zigzagTraversal(root: BT){
    let queue: BT[] = [root]
    let flag = false
    const result: BT[][] = []
    while(queue.length){
        const list: BT[] = []
        while(queue.length){
            const poppedElement = queue.shift()
            list.push(poppedElement)
        }

        for(const ele of list){
            if(ele.left){
                queue.push(ele.left)
            }
            if(ele.right){
                queue.push(ele.right)
            }
        }
        if(flag){
            list.reverse()
        }
        flag = !flag
        result.push(list)
    }

    for(let i = 0; i < result.length; i++){
        for(let j = 0; j < result[i].length; j++){
            console.log(result[i][j].value)
        }
    }
}


export function CallzigzagTraversal(){
    const bt = new BT(1)
    bt.left = new BT(2)
    bt.right = new BT(3)

    bt.left.left = new BT(4)
    bt.left.right = new BT(5)

    bt.right.right = new BT(6)
    zigzagTraversal(bt)
}
```
