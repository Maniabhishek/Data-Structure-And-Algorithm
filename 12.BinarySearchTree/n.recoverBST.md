```ts
import { BT } from "../tree/2.inorder";

class RecoverBST{
    prev: BT = null
    first: BT = null
    middle: BT = null
    last: BT = null
    inorderTraversing(root: BT){
        if(root === null) return null

        this.inorderTraversing(root.left)

        if(this.prev !== null && root.value < this.prev.value){
            if(this.first === null){
                this.first = this.prev
                this.middle = root
            }else {
                this.last = root
            }
        }

        this.prev = root

        this.inorderTraversing(root.right)
    }

    recoverBST(root: BT){
        this.inorderTraversing(root)

        if(this.first && this.last){
            let temp = this.last.value
            this.last.value = this.first.value
            this.first.value = temp
        }else if(this.first && this.middle){
            let temp = this.middle.value
            this.middle.value = this.first.value
            this.first.value = temp
        }
    }
}


export function CallRecoverBST(){
    const root = new BT(3)
    root.left = new BT(1)
    root.right = new BT(4)
    root.right.left = new BT(2)

    const recoverbst = new RecoverBST()
    recoverbst.recoverBST(root)
    console.log(root)
}


```
