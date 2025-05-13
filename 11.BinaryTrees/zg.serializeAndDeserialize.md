> Problem Statement: Given a Binary Tree, design an algorithm to serialise and deserialise it. There is no restriction on how the serialisation and deserialization takes place. But it needs to be ensured that the serialised binary tree can be deserialized to the original tree structure. Serialisation is the process of translating a data structure or object state into a format that can be stored or transmitted (for example, across a computer network) and reconstructed later. The opposite operation, that is, extracting a data structure from stored information, is deserialization.

<img width=400 height=500 src="https://github.com/user-attachments/assets/fe0b4be6-007e-4582-aa3c-29202efd8116">

<img width=400 height=500 src="https://github.com/user-attachments/assets/56430b05-56fd-4696-92af-506145dddeea">

```ts
import { BT } from "./2.inorder";

function serialize(root: BT){
    let queue: any = [root]

    let str = ""
    while(queue.length){
        const poppedElement = queue.shift()
        if(poppedElement === 'X'){
            str += poppedElement
            continue
        }
        str += poppedElement.value

        if(poppedElement.left){
            queue.push(poppedElement.left)
        }else {
            queue.push('X')
        }

        if(poppedElement.right){
            queue.push(poppedElement.right)
        }else {
            queue.push('X')
        }
    }
    return str
}

function deserialize(str: string){
    const root = new BT(Number(str[0]))
    const queue = [root]
    let idx = 0
    while(queue.length){
        const poppedElement = queue.shift()

        let leftIdx = 2*idx + 1
        let rightIdx = 2*idx + 2
        if(str[leftIdx] !== 'X'){
            poppedElement.left = new BT(Number(str[leftIdx]))
            queue.push(poppedElement.left)
        }else {
            poppedElement.left = null
        }

        if(str[rightIdx] !== 'X'){
            poppedElement.right = new BT(Number(str[rightIdx]))
            queue.push(poppedElement.right)
        }else {
            poppedElement.right = null
        }
        idx += 1
    }
    console.log(root)
}

export function CallSerializeDeserialize(){
    const root = new BT(1)
    root.left = new BT(2)
    root.right = new BT(3)

    root.right.left = new BT(4)
    root.right.right = new BT(5)

    const str = serialize(root)
    console.log(str)

    deserialize(str)
}
```
