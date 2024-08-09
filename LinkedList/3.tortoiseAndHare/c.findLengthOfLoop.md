```ts
// find the length of loop

import { convertA2LL, LNode } from "./6.oddEvenLLCombine";

function findLengthOfLoop(head: LNode){
    let slow = head;
    let fast = head;

    let slowCount = 0;
    let fastCount = 0;

    while(fast != null && fast.next != null){
        slow = slow.next;
        fast = fast.next.next

        slowCount += 1;
        fastCount += 2;

        if(slow == fast){
            return fastCount - slowCount
        }
    }
    return 0
}

// another approach could be the moment you detect loop create a function in which move one of fast or slow in the loop until slow equals fast again and compute the length
function findLengthOfLoop2(head: LNode){
    let slow = head;
    let fast = head;

    while(fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;

        if(slow == fast) return findLength(slow, fast)
    }
    return 0
}

function findLength(slow: LNode, fast: LNode){
    let count = 1
    fast = fast.next
    while(slow != fast){
        count++
        fast = fast.next
    }
    return count
}

export function CallfindLengthOfLoop(){
    let arr = [1,2,3,4,5,6]

    let head = convertA2LL(arr)

    let last = head;

    while(last.next){
        last = last.next
    }

    last.next = head

    console.log(findLengthOfLoop(head))
    console.log(findLengthOfLoop2(head))

    //another example
    const arr2 = [1,2,3,4,5,6,7,8,9,23,12]
    let head2 = convertA2LL(arr2)

    last = head2;

    while(last.next){
        last = last.next
    }

    let temp = head2;
    let count = 5
    while(count){
        count--
        temp = temp.next
    }
    console.log("temp is at",temp.data)
    last.next = temp


    //now find the length it should be 6
    console.log(findLengthOfLoop(head2))
    console.log(findLengthOfLoop2(head2))
}
```
