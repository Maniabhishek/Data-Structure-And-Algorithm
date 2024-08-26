```ts
// first detect loop and then move slow or fast to starting node

import { convertA2LL, LNode } from "./6.oddEvenLLCombine";


function detectStartingNodeInLopp(head: LNode){
    let slow = head;
    let fast = head;

    if(head === null || head.next == null) {
        return null
    }

    while(fast != null && fast.next != null){
        slow = slow.next
        fast = fast.next.next

        if(slow == fast) {
            return getStartingNodeOfLoop(head, fast)
        }
    }

    return null
}

function getStartingNodeOfLoop(slow: LNode, fast: LNode){
    while(slow != fast){
        slow = slow.next
        fast = fast.next
    }
    return slow
}

export function Call_detectStartingNodeInLopp() {
    const arr = [1,2,3,4,5,6,7,8,9]
    let head = convertA2LL(arr)

    let last = head
    while(last.next != null){
        last =last.next
    }

    let i = 0
    let temp = head
    while(i){
        i--
        temp = temp.next
    }

    last.next = temp

    let startingNode = detectStartingNodeInLopp(head)
    console.log(startingNode.data)
}


```
