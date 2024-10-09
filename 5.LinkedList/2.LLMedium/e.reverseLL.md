- reverse a linked list
- naive approach would be traversing one round and storing it in stack, once we have it in stack now again traverse , and replace the data from stack while popping in to the node
- another way will be by traversing using temp and keeping track of prev and front
- and a recusrive approach explained in the images

<img src="https://github.com/user-attachments/assets/32df1184-1b25-4ec2-bec0-866771a33118" width=400 height=400 >

<img src="https://github.com/user-attachments/assets/259d0623-5771-4319-b3d8-34fb84a2b4fd" width=400 height=400 >

<img src="https://github.com/user-attachments/assets/c875e594-4d71-4a92-ba0d-120e0df9592b" width=400 height=400 >

```ts
// naive approach would be traversing one round and storing it in stack 
// once we have it in stack now again traverse , and replace the data from stack while popping in to the node
// but the above approach will have TC: O(2N) and SC: O(N)

import { convertA2LL, LNode, traverse } from "./6.oddEvenLLCombine";

function reverseLL(head: LNode){
    let temp = head
    let prev = null
    while(temp){
        let front = temp.next
        temp.next = prev
        prev = temp 
        temp = front
    }

    return prev
}

function reverseLLRecursive(head: LNode){
    if(head == null || head.next == null) return head

    const newHead = reverseLLRecursive(head.next)
    const front = head.next
    front.next = head
    head.next = null
    return newHead
}

export function Call_reverseLL(){
    const arr = [1,2,3,4,5,6]

    let head = convertA2LL(arr)
    console.log('reverse ll') // 
    head = reverseLL(head)
    traverse(head)


    console.log('recursive method to reverse ')
    head = reverseLLRecursive(head)
    traverse(head)
}
```
