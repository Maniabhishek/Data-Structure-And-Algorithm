- given a linked list which contains 0, 1, and 2 in any order , your task is sort it 

```ts
import { convertA2LL, LNode, traverse } from "./6.oddEvenLLCobine";

// data replacement approach brute force , since this is a 2 pass solution , its time complexity will be O(2N) space complexity is O(1)
function sortLL012(head: LNode){
    let count0 = 0;
    let count1 = 0;
    let count2 = 0;

    let temp = head

    while(temp != null){
        if(temp.data == 0) {
            count0 += 1 
        }else if(temp.data == 1){
            count1 += 1
        }else {
            count2 += 1
        }
        temp = temp.next
    }

    console.log(count0, count1, count2)

    temp = head

    while(temp){
        if(count0){
            temp.data = 0
            count0--
        }else if(count1){
            temp.data = 1
            count1--
        }else {
            temp.data = 2
            count2--
        }

        temp = temp.next
    }

    return head 
}

// let try to solve this problem in one traverse , so this can be done using linking nodes, now lets we create three dummynode for storing 0's 1's and 2's , and then in the end we simply attach all the 0 1 and 2 accordingly 
function sortLL012OneTraverse(head: LNode){
    let temp = head

    let dummyNode0 = new LNode(-1)
    let temp0 = dummyNode0

    let dummyNode1 = new LNode(-1)
    let temp1 = dummyNode1

    let dummyNode2 = new LNode(-1)
    let temp2 = dummyNode2

    while(temp){
        if(temp.data == 0){
            temp0.next = temp
            temp0 = temp
        }else if(temp.data == 1){
            temp1.next = temp
            temp1 = temp
        }else {
            temp2.next = temp
            temp2 = temp
        }
        temp = temp.next
    }

    temp0.next = dummyNode1.next ? dummyNode1.next : dummyNode2.next
    temp1.next = dummyNode2.next
    temp2.next = null

    return dummyNode0.next
}

export function Call_sortLL012(){
    let arr = [1,2,2,1,2,0,1,0,2,1]

    let head = convertA2LL(arr)

    head = sortLL012(head)
    console.log('sorted ll using data replacement')
    traverse(head)

    arr = [1,2,2,1,2,0,1,0,2,1]
    head = convertA2LL(arr)

    //sorted ll in one traverse
    console.log('sorted ll in one traverse')
    head = sortLL012OneTraverse(head)
    traverse(head)
}
```
