```ts
// simplest way to solve the below problem is take temp1 and temp2 at first node and temp1.next respectively, now keep traversing to temp2 and keep checking temp2 value and temp value sum if equal then you get one result and store it , continue until the sum exceeds the given number as array is in sorted order

import { convertA2DLL, DLNode } from "./3.dll";

function findPairsinDLL(head: DLNode, sum: number){
    let temp1 = head;
    while(temp1 != null){
        let temp2 = temp1.next;

        while(temp2 != null && (temp1.data + temp2.data <= sum)) {
            if(temp1.data + temp2.data === sum){
                console.log(temp1.data, temp2.data)
            }
            temp2 = temp2.next
        }
        temp1 = temp1.next
    }
}

export function Call_FindPairsinDLL(){
    const arr = [1,2,3,4,5,6]

    let head = convertA2DLL(arr)

    findPairsinDLL(head, 5)
}


// now above code has TC:O(n^2) and SC: O(1)
// so we need to do some optmization if we take two pointer one on start and one on end then then we keep on adding each other if matches then move each pointer closer to each other , if doesnt then sum value will be greater or smaller than givem sum , if smaller then move left pointer and if greater then move right pointer

function findPairInDLLTwoPointer(head: DLNode, sum: number){
    let temp1 = head;

    let temp2 = head;

    while(temp2.next != null) {
        temp2 = temp2.next
    }

    while(temp2.data > temp1.data){
        let currentSum = temp1.data + temp2.data
        if(currentSum === sum) {
            console.log(temp1.data, temp2.data)
            temp1 = temp1.next
            temp2 = temp2.back
        }else if(currentSum < sum){
            temp1 = temp1.next
        }else {
            temp2 = temp2.back
        }
    }
}

export function Call_findPairInDLLTwoPointer(){
    const arr = [1,2,3,4,5,6]

    let head = convertA2DLL(arr)
    findPairInDLLTwoPointer(head, 5)
}
```
