<img src="https://github.com/user-attachments/assets/9a0bc836-f46d-4faa-8fca-8bda10dbd706" width=400 height=400>

<img src="https://github.com/user-attachments/assets/a1dce1b1-ea63-4cc3-a27d-14e98f5e62c9" width=400 height=400>


```ts
import { BT } from "../tree/2.inorder";

class BSTIterator {
    stack: BT[] = []
    constructor(root: BT){
        this.pushAll(root)
    }

    hasNext(){
        console.log(this.stack.length > 0)
        return this.stack.length > 0
    }

    next(){
        if(this.stack.length === 0) {
            console.log('no element')
            return 
        }
        const poppedElement = this.stack.pop()

        if(poppedElement.right){
            let curr = poppedElement.right

            while(curr){
                this.stack.push(curr)
                curr = curr.left
            }
        }
        console.log(poppedElement.value)
        return poppedElement.value
    }

    pushAll(root: BT){
        while(root){
            this.stack.push(root)
            root = root.left
        }
    }
}

export function CallBSTIterator(){
    const root = new BT(7)
    root.left = new BT(3)
    root.left.left = new BT(2)
    root.left.right = new BT(6)
    root.left.left.left = new BT(1)

    root.left.right.left = new BT(5)
    root.left.right.left.left = new BT(4)

    root.right = new BT(10)
    root.right.left = new BT(9)
    root.right.left.left = new BT(8)

    const bstIterator = new BSTIterator(root)
    bstIterator.next() // 1
    bstIterator.next() // 2
    bstIterator.next() // 3
    bstIterator.next() // 4
    bstIterator.next() // 5
    bstIterator.next() // 6
    bstIterator.next() // 7
    bstIterator.hasNext() // true
    bstIterator.next() // 8
    bstIterator.next() // 9
    bstIterator.next() // 10
    bstIterator.hasNext() // false
    bstIterator.next() // no element
}
```
