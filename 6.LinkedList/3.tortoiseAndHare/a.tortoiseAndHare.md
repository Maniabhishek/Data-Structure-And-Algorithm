- find the middle of the node

```ts
import { convertA2LL, LNode } from "./6.oddEvenLLCombine";


// just run fast node two steps ahead , in the below case we will get the middle of the LL , in case of even we will get the node on left lets say we have 6 node then middle will be 3rd for the below code what if i want to return 4th then just assign slow and fast as head 
function findMiddleOfLL(head: LNode){
    if(head == null || head.next == null) return head

    let slow = head
    let fast = head.next

    while(fast != null && fast.next != null){
        slow = slow.next
        fast = fast.next.next
    }

    return slow
}

// to get the next mid in case of even nodes
function findMiddleOFLL2(head: LNode){
    if(head == null || head.next == null) return head
    let slow = head;
    let fast = head;

    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
    }
    return slow
}

export function Call_findMiddleOFLL(){
    const arr = [1,2,3,4,5,6]
    let head = convertA2LL(arr)

    let mid = findMiddleOfLL(head)
    console.log(mid)

    mid = findMiddleOFLL2(head)
    console.log(mid)
}
```
