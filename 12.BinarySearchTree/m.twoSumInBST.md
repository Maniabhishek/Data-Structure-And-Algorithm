- in a bst we need to find out sum of two numbers which can be equal to given numbers
- if we are given an array which is sorted doing the same thing can be done simply using 2 pointer
- so if do inorder traversal we will get all elements in sorted order and then we can do the above
- but it will have time complexity of O(N) SC: O(N)
- but to optimize this space complexity we can utilize the previous code of finding next and before
- next element will be from starting of sorted BST and before will from the end of the sorted BST
- and then we can use the same technique as we do in simple array

<img src="https://github.com/user-attachments/assets/89597c0e-fdaf-4134-9a9b-2bc50048c38f" width=400>

<img src="https://github.com/user-attachments/assets/fbb94e5d-62d4-4309-93c5-09f873fd4863" width=400>


<img src="https://github.com/user-attachments/assets/2b689a4c-8756-4957-bd54-6cc1123aca6d" width=400>


```ts
import { BT } from "../tree/2.inorder";

class BSTIterator {
    stackNext: BT[] = []
    stackBefore: BT[] = []
    constructor(root: BT){
        this.pushAllLeft(root)
        this.pushAllRight(root)
    }

    hasNext(){
        return this.stackNext.length > 0
    }

    hasBefore(){
        return this.stackBefore.length > 0 
    }

    before(){
        if(this.stackBefore.length === 0){
            return 
        }

        const poppedElement = this.stackBefore.pop()
        if(poppedElement.left){
            this.pushAllRight(poppedElement.left)
        }

        return poppedElement.value
    }

    next(){
        if(this.stackNext.length === 0) {
            return 
        }
        const poppedElement = this.stackNext.pop()

        if(poppedElement.right){
            let curr = poppedElement.right

            while(curr){
                this.stackNext.push(curr)
                curr = curr.left
            }
        }
        return poppedElement.value
    }

    pushAllLeft(root: BT){
        while(root){
            this.stackNext.push(root)
            root = root.left
        }
    }

    pushAllRight(root: BT){
        while(root){
            this.stackBefore.push(root)
            root = root.right
        }
    }
}

function TwoNumberSum(root: BT, num: number){
    const btItr = new BSTIterator(root)

    let nextEl = btItr.next()
    let beforeEl = btItr.before()
    while(nextEl < beforeEl){

        if((nextEl + beforeEl) === num){
            console.log(nextEl, beforeEl)
            return true
        }else if((nextEl + beforeEl) > num){
            beforeEl = btItr.before()
        }else {
            nextEl = btItr.next()
        }
    }
    return false 
}

export function CallTwoNumberSumBST(){
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

    console.log(TwoNumberSum(root, 15))

}
```
