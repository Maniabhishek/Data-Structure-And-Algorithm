- In this article, we will solve the problem: "Rotate a Linked List"
- Problem Statement: Given the head of a linked list, rotate the list to the right by k places.
Example 1:
Input: head = [1,2,3,4,5]  k = 2  Output: head = [4,5,1,2,3]

```ts
import { convertA2LL, LNode, traverse } from "./6.oddEvenLLCombine";

function getKthNode(head: LNode, n: number){
    let temp = head
    let count = n - 1;
    
    while(temp != null && count > 0) {
        temp = temp.next
        count--
    }
    return temp
}

function rotateLL(head: LNode, n: number){
    let length = 1
    let last: LNode = head
    while(last.next != null){
        length++
        last = last.next
    }
    let rotateTimes = n%length
    if(rotateTimes == 0) return head

    let kthNode = getKthNode(head, length - rotateTimes)

    let newHead = kthNode.next
    kthNode.next = null

    last.next = head
    return newHead
}

export function Call_rotateLL(){
    const arr = [1,2,3,4,5,6,7]

    let head = convertA2LL(arr)
    head = rotateLL(head, 9)
    traverse(head)
}
```
