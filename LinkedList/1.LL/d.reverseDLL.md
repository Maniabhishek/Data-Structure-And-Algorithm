- there are two ways , one naive approach could be by using stack and storing it while traversing and traverse again and pop from stack and keep replace node
- but the above approach will traverse twice
- by swapping nodes back and next will make it do in one traverse as shown below

```ts
// TC: O(N) SO(1)
function reverseDLL(head: DLNode){
    let current = head
    let last:DLNode = null

    while(current != null){
        let front = current.next
        current.next = current.back
        current.back = front
        last = current.next
        current = current.back
    }

    /**
     * we can refactor the above code
     * since we need to tract the last then store the last itself in the above while instead of front
     * last = current.back
     * current.back = current.next
     * current.next = last
     * current = current.back
     */

    last = last.back
    return last
}
```
