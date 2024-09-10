```ts
import { convertA2LL, LNode, traverse } from './6.oddEvenLLCombine';

// TC: O(N1+N2)
function merge2List(head1: LNode, head2: LNode){
    let temp1 = head1;
    let temp2 = head2;

    let dummyNode = new LNode(-1)
    let temp = dummyNode
    while(temp1 && temp2){
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

    if(temp1){
        temp.next = temp1
    }else {
        temp.next = temp2
    }
    return dummyNode.next
}
// TC: O(N1+N2) + O(N1+N2+N3) + O(N1+N2+N3) = N(1N+2N+3N....kN)= N*(k*(k+1)/2)
function mergeKSortedLists(k: number, heads: LNode[]){
    if(k >= heads.length) return null

    let mergedHead = mergeKSortedLists(k+1, heads)
    return merge2List(heads[k], mergedHead)
}


export function Call_mergeKSortedLists(){
    const arr1 = [5,9,10,11]
    const arr2 = [1,2,55,99,100]
    const arr3 = [8,10,14,19,20]
    const arr4 = [10,14,15,19,100]

    let head1 = convertA2LL(arr1)
    let head2 = convertA2LL(arr2)
    let head3 = convertA2LL(arr3)
    let head4 = convertA2LL(arr4)

    const head = mergeKSortedLists(0, [head1,head2, head3, head4])
    traverse(head)
}

```

- optimum approach will be using min heap (https://www.geeksforgeeks.org/merge-k-sorted-linked-lists-set-2-using-min-heap)
