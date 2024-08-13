```ts
// naive approach would be by simply calculating the length of the LL , and divide it by two take the floor value traveerse to the node and delete the next node which is going to be the middel of the LL
// now the above approach will have O(3N/2) 
// lets optimize it, now take slow and fast doing so we will reach the middle but this way slow will reach the exact middle but we want to reach one node before the middle 
// to do so skip slow for first traverse and keep fast on head.next.next and slow = head 

import { convertA2LL, LNode, traverse } from "./6.oddEvenLLCombine";

function deleteMiddle(head: LNode){

    if(head == null || head.next == null) return null

    let slow = head;
    let fast = head.next.next;

    while(fast != null && fast.next != null){
        slow = slow.next
        fast = fast.next.next
    }

    slow.next = slow.next.next

    return head
}

export function Call_deleteMiddle(){
    const arr = [1,2,3,4,5]

    let head = convertA2LL(arr)

    head = deleteMiddle(head)

    traverse(head) // 1,2,4,5



    console.log('deleting again')
    head = deleteMiddle(head)

    traverse(head) // 1,2,5
}
```
