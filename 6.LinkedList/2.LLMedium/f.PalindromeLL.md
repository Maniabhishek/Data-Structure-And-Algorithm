import { convertA2LL, LNode } from "./6.oddEvenLLCombine";
import { reverseLL } from "./9.reverseLL";

// naive approach will be using a stack and and storing it while traversing , again traverse from the start but this time compare each node value with the popped up value from stack, at any point if it is not equal return false if traverse throughly return true 

```ts
function pallindrome(head: LNode){
    let temp = head 
    let arr = []
    while(temp){
        arr.push(temp.data)
        temp = temp.next
    }

    temp = head
    while(temp){
        if(temp.data !== arr.pop()) return false
        temp = temp.next
    }

    return true
}
```
// 2nd approach can be if we compare last elemnt with first , 2nd last with 2 , 3rd last with 3rd and so on...
// but how can we get the last 2nd last , 3rd last .. in the reverse order , since this is a singly LL
// there can be a way if we rever the ll from the middle 
// if we have even ll then we will have two middle m1 and m2 so we need to reach to m1
// and reverse the m1.next i.e., m2 
// and then we can do the comparison
// to get the middle of the node , just use tortoise and hare approach 
// TC: O(3N/2) approx. 2N SC: O(1)

```ts
function pallindrom2(head: LNode){

    if(head == null || head.next == null) return true

    let slow = head
    let fast = head
    // this below will take O(N/2)
    while(fast.next != null && fast.next.next != null){
        slow = slow.next
        fast = fast.next.next
    }

    // O(N/2)
    let reversedHead = reverseLL(slow.next)

    let temp = head
    // while will take O(N/2)
    while(reversedHead != null){
        if(reversedHead.data !== temp.data) return false
        temp = temp.next
        reversedHead = reversedHead.next
    }
    return true
}

export function Call_Pallindrome(){
    const arr = [1,2,3,3,2,1]
    let head = convertA2LL(arr)
    console.log(pallindrome(head))

    console.log(pallindrom2(head))
}
