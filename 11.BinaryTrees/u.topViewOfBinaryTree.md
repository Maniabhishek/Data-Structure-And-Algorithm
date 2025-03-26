### Top view of binary tree

<img src="https://github.com/user-attachments/assets/6aef7047-0b46-4334-8e36-f7379d4065ca" width=400>


```ts
import { BT } from "./2.inorder";

type NodeWithLine = [BT, number]
function topView(root: BT){
    const queue: NodeWithLine[] = [[root, 0]]

    const map = new Map()

    while(queue.length){
        const poppedElement = queue.shift()
        const currentNode = poppedElement[0]

        const currentLine: number = poppedElement[1]

        if(!map.has(currentLine)){
            map.set(currentLine, currentNode.value)
        }

        if(currentNode.left){
            queue.push([currentNode.left, currentLine - 1])
        }

        if(currentNode.right){
            queue.push([currentNode.right, currentLine + 1])
        }
    }


    console.log(map.entries())
    const map1 = new Map([...map.entries()].sort((a,b)=> a[0]-b[0]))
    console.log(map1)
    for(const [key, value] of map1){
        console.log(value)
    }
}

export function callTopView(){
    let root = new BT(1);
    root.left = new BT(2);
    root.right = new BT(3);
    root.left.left = new BT(4);
    root.left.right = new BT(5);
    root.right.left = new BT(6);
    root.right.right = new BT(7);
    topView(root)
}

```
