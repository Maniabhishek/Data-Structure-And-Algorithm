- take two pointer pointing to head 1 and head 2 , temp pointing to a dummy node, traverse until temp1 or temp2 gets null, if temp1.data < temp2,.data then simply point temp.next to temp1 or vice versa as shown below in the code


```ts
import { convertA2LL, LNode, traverse } from "./6.oddEvenLLCombine";

function mergeSortedLL(head1: LNode, head2: LNode): LNode{
    let temp1 = head1;
    let temp2 = head2;
    let dummyNode = new LNode(-1)
    let temp = dummyNode
    
    while(temp1 !== null && temp2 !== null) {
        if(temp1.data < temp2.data){
            temp.next = temp1
            temp = temp.next
            temp1 = temp1.next 
        }else {
            temp.next = temp2
            temp = temp.next
            temp2 = temp2.next
        }
    }

    if(temp1 === null) {
        temp.next = temp2
    }else {
        temp.next = temp1
    }

    return dummyNode.next
}

export function Call_MergeSortedLL(){
    const arr1 = [1,3,4,7,10]
    const arr2 = [4,6,10]

    const l1 = convertA2LL(arr1)
    const l2 = convertA2LL(arr2)

    const head = mergeSortedLL(l1,l2)
    traverse(head)
}
```
