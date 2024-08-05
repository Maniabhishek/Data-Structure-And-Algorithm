```ts
// so if we need to delete any node if we are able to reach to a node before the node to be deleted 
// now here let's say if we have node of 4 size and we need to delete the 1st node from last 
// then if we reach 3rd node our job will be almost done, and reaching the 3rd node is equal to size - 1 (size - n) 

import { convertA2LL, LNode, traverse } from "./6.oddEvenLLCobine";

function deleteNthNodeFromLast(head: LNode, n: number){
    if(head == null) return null

    let temp = head 

    let size = 0
    while(temp){
        size += 1
        temp = temp.next
    }

    // deleting the first node 
    if(size-n == 0){
        head = head.next
        return head
    }

    let count = 0;

    temp = head
    while(temp){
        count += 1
        if(size-count == n){
            temp.next = temp.next.next
            break
        }
        temp = temp.next
    }

    return head
}

export function Call_deleteNthNodeFromLast(){
    const arr = [1,2,3,4,5,6,7,8,9]

    let head = convertA2LL(arr)

    console.log('delete 1st node from last')
    head = deleteNthNodeFromLast(head, 1) // 1,2,3,4,5,6,7,8

    traverse(head)

    // delete 1st node 
    head = deleteNthNodeFromLast(head, 8) 
    console.log('delete 1st node') // 2,3,4,5,6,7,8
    traverse(head)
}
```
