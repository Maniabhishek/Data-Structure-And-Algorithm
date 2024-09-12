- the naive way of sorting is to traverse all the way and store all the data in an array , and sort the array and convert aray to LL , now this will have O(N) + NO(log(N)) + O(N) time complexity and O(N) + O(N) space complxity
- so we need to optimize this , how can we do this, we can use the same logic as merge sort , so we keep dividing the list in half until we get one single node
- once we get one single node return that ndoe and merge the individual nodes


```ts
import { convertA2LL, LNode, traverse } from "./6.oddEvenLLCombine";

function getMiddleNode(head): LNode{
    let slow = head
    let fast = head.next

    while(fast !== null && fast.next !== null){
        slow = slow.next
        fast = fast.next.next
    }

    return slow
}

function mergeLinkedList(head1: LNode, head2: LNode){
    let dummNode = new LNode(-1)

    let temp = dummNode
    while(head1 !== null && head2 !== null){
        if(head1.data < head2.data){
            temp.next = head1
            head1 = head1.next
        }else {
            temp.next = head2
            head2 = head2.next
        }
        temp = temp.next
    }
    if(head1){
        temp.next = head1
    }else {
        temp.next = head2
    }

    return dummNode.next
}

function sortLinkedList(head: LNode){
    if(head == null || head.next == null) return head
    let middle: LNode = getMiddleNode(head)

    let nextHead = middle.next
    middle.next = null
    let h1 = sortLinkedList(head)
    let h2 = sortLinkedList(nextHead)

    return mergeLinkedList(h1, h2)
}

export function Call_sortLinkedList(){
    const arr = [9,4,5,1,6,3,2,10,7]
    let head = convertA2LL(arr)
    head = sortLinkedList(head)
    traverse(head)
}
```
