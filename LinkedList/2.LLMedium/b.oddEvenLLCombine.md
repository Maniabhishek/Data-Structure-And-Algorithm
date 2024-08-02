```ts
class LNode {
    data: number;
    next: LNode;

    constructor(data: number){
        this.data = data
        this.next = null
    }
}

function convertA2LL(arr: number[]){
    let head = new LNode(arr[0])

    let mover = head
    for(let i = 1; i<arr.length; i++){
        let newNode = new LNode(arr[i])
        mover.next = newNode
        mover = mover.next
    }
    return head
}

function traverse(head: LNode){
    let current = head
    while(current){
        console.log(current.data)
        current = current.next
    }
}

// below code will give TC(2N) SC(N) now let's try to remove space compexity
function CombineOddEven1(head: LNode){
    let temp = head;

    const arr = []
    while(temp != null && temp.next != null){
        arr.push(temp.data)
        temp = temp.next.next
    }

    if(temp) {
        arr.push(temp.data)
    }

    temp = head.next

    while(temp!=null && temp.next != null){
        arr.push(temp.data)
        temp = temp.next.next
    }

    if(temp){
        arr.push(temp.data)
    }
    let i = 0
    temp = head
    while(temp){
        temp.data = arr[i]
        i++
        temp = temp.next
    }
    return head
}

// TC:O(N/2) doing link change twice equals N SC: O(1)
function CombineOddEven2(head: LNode){

    if(head == null || head.next == null) return head

    let odd = head 
    let even = head.next
    let evenHead = head.next

    while(even != null && even.next != null){
        odd.next = odd.next.next
        even.next = even.next.next

        odd = odd.next
        even = even.next
    }

    odd.next = evenHead
    return head
}

export function CallCombineOddEven(){
    const arr: number[] = [1,2,3,4,5]
    let head = convertA2LL(arr)
    head = CombineOddEven1(head)
    console.log('print combined oddeven') 
    traverse(head) // 1,3,5,2,4

    console.log('print combined oddeven')
    head = CombineOddEven2(head)
    traverse(head) // 1,5,4,3,2
}
```
