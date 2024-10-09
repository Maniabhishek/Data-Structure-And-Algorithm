```ts
// add number 1 to LL which contains number at each of their node

import { convertA2LL, LNode, traverse } from "./6.oddEvenLLCombine";
import { reverseLL } from "./9.reverseLL";

// time complexity will be O(3N) SC: O(1)
function add1ToNumber(head: LNode){
    let newHead = reverseLL(head)

    let temp = newHead
    let num = temp.data + 1
    let data = num%10 
    let carry = Math.floor(num/10)
    temp.data = data
    temp = temp.next

    while(temp){
        num = temp.data
        num += carry
        data = num%10
        temp.data = data
        temp = temp.next
        carry = Math.floor(num/10)
    }

    let newNode: LNode
    if(carry){
        newNode = new LNode(carry)
    }

    temp = newHead
    while(temp.next){
        temp = temp.next
    }
    temp.next = newNode

    newHead = reverseLL(newHead)

    return newHead
}

// let optimize the code 
// by using recusive method , this is the only way we can do reverse traverse as result of backtrack
// what would be the base condition when it reaches null
// since we need to return carry as well at each node and in the end we need head to be returned thus 

function add1ToNumber2(head: LNode){
    let carry = helper(head)

    if(carry==1){
        const newNode = new LNode(carry)
        newNode.next = head
        return newNode
    }
    return head
}

function helper(temp: LNode){
    if(temp == null) return 1

    let carry = helper(temp.next)

    temp.data = temp.data + carry
    if(temp.data <10){
        return 0
    }

    temp.data = 0
    return 1
}

export function Call_add1ToNumber(){
    const arr = [9,9,9,8]
    let head = convertA2LL(arr)
    head = add1ToNumber(head)
    traverse(head)


    // using recursive method to add 1
    console.log('add 1 using recursive')
    head = add1ToNumber2(head)
    traverse(head)
}
```
