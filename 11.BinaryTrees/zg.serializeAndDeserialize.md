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
