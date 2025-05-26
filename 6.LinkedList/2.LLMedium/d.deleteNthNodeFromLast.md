<img width=400 src="https://github.com/user-attachments/assets/9e667bba-aed8-48d9-9e24-e96bf7abc653">




```ts
import { convertA2LL, LNode, traverse } from "./6.oddEvenLLCombine";

// so if we need to delete any node if we are able to reach to a node before the node to be deleted 
// now here let's say if we have node of 4 size and we need to delete the 1st node from last 
// then if we reach 3rd node our job will be almost done, and reaching the 3rd node is equal to size - 1 (size - n) 

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

// the above function will take  O(len) + O(M) aprrox. O(2N) 
// lets improve if lets say we have 5 nodes in LL and asked to delete the 2nd node from last 
// so in the previous logic we reached to node previous to the one to be deleted
// so here if we main the gap between the two nodes of N then we can achieve this
function deleteNthNodeFromEnd2(head: LNode, n: number){
    let fast = head;

    for(let i = 0; i<n; i++){
        fast = fast.next
    }
    if(fast == null){
        return head.next
    }

    let slow = head;

    while(fast.next != null){
        slow = slow.next
        fast = fast.next
    }

    slow.next = slow.next.next
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

    // delete the 1st node using 2nd method
    console.log('delete the 1st node using 2nd method')
    head = deleteNthNodeFromEnd2(head, 7)
    traverse(head) //3,4,5,6,7,8

    console.log('delete the 1st node from end using 2nd method')
    head = deleteNthNodeFromEnd2(head,1)
    traverse(head) //3,4,5,6,7

    console.log('delete the 2nd node from end using 2nd method')
    head = deleteNthNodeFromEnd2(head,2)
    traverse(head) //3,4,5,7
}
```
