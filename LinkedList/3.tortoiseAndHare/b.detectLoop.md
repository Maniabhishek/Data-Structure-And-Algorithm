```ts
import { convertA2LL, LNode } from "./6.oddEvenLLCombine";

// when we start traversing at any point if we encounter the same node again while traversing this means there is loop
// naive approach would be storing each node and the moment we encounter same node again then there exist loop return true
function detectLoop(head: LNode){
    let slow = head ;
    let fast = head;
    while(fast != null && fast.next != null){
        slow = slow.next
        fast = fast.next.next
        if(slow == fast){
            return true
        }
    }

    return false
}

export function CallDetectLoop(){
    const arr = [1,2,3,4,5,6,7,8,9]
    let head = convertA2LL(arr)

    // make a loop 
    let last = head 
    let count = 3
    while(last.next) {
        last = last.next
    }

    let temp = head;
    while(count){
        count--

        temp = temp.next
    }

    last.next = temp
    // detecting if there is loop
    console.log(detectLoop(head))

    // linear ll without loop: even LL

}
```
