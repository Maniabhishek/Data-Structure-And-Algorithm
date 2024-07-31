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

function deleteHead(head: LNode){
    if(head == null) {
        return null
    }
    head = head.next
    return head
}

function deleteLastElement(head: LNode){
    let current = head
    if(current == null) return null

    if(current.next == null) {
        head = null
        return head
    }

    while(current.next.next){
        current = current.next
    }

    current.next = null

    return head
}

// 1->2->3->4.... if we want to delete 3rd node we just point 2 to 4
function deleteKthNode(head: LNode, k: number){
    if(head == null) return head

    if(k == 1) {
        head = head.next
        return head
    }

    let current = head
    let prev: LNode = null
    let count = 0
    // when writing this condition ask yourself at which point you are trying to go , in this case i have to go till last because last element can also be the k element hence while(current)
    while(current != null){
        count++
        if(count == k){
            prev.next = current.next
            break
        }
        prev = current
        current = current.next
    }
    return head
}

function deleteNodeContainK(head: LNode, k: number){
    if(head == null) return null

    if(head.data == k) {
        head = head.next
        return head
    }

    let current = head
    let prev: LNode = null
    // when writing this condition ask yourself at which point you are trying to go , in this case i have to go till last because last element can also be the k element hence while(current)
    while(current){
        if(current.data == k){
            prev.next = current.next
            break
        }
        prev = current
        current = current.next
    }

    return head
}

function addToFirst(head: LNode, el: number){
    let newNode = new LNode(el)

    let newHead = newNode
    newHead.next = head
    return newHead
}

function addToLast(head: LNode, el: number){
    const newNode = new LNode(el)

    if(head == null){
        return newNode
    }
    let current = head
    while(current.next){
        current = current.next
    }

    current.next = newNode
    return head
}

function addToKthPosition(head: LNode, el: number, k: number){
    const newNode = new LNode(el)

    if(head == null) {
        return newNode
    }

    if(k == 1){
        newNode.next = head
        head = newNode
        return head
    }

    let count = 1
    let prev: LNode = null
    let current = head
    while(current){

        if(count == k){
            newNode.next = current
            prev.next = newNode
            break
        }
        prev = current
        current = current.next
        count++
    }

    if(count == k){
        prev.next = newNode
    }

    return head
}

// if we have to insert at k position and if we get k-1th position then we are done 
function addToKthPosition2(head: LNode, el: number, k: number){
    if(head == null){
        return new LNode(el)
    }

    const newNode = new LNode(el)

    if(k == 1){
        newNode.next = head
        return newNode
    }

    let count = 0
    let current = head
    while(current){
        count++
        // since we have to insert at >=2 , we are stopping at 1 element before
        if(count == k-1){
            const newNodeNext = current.next
            current.next = newNode
            newNode.next = newNodeNext
        }
        current = current.next
    }

    return head
}

function addBeforeValue(head: LNode, el: number, val: number){
    if(head == null){
        return null
    }

    const newNode = new LNode(el)

    if(head.data == val){
        newNode.next = head
        return newNode
    }

    let current = head
    while(current.next){
        if(current.next.data == val){
            newNode.next = current.next
            current.next = newNode
            break
        }
        current = current.next
    }
    return head
}

export function CallDeletionAndInsertion(){
    // create LL
    const arr: number[] = [1,2,3,4,5,6]
    let head = convertA2LL(arr)
    
    // traverse
    traverse(head)

    //delete head
    head = deleteHead(head)

    console.log()
    console.log('after deleting head')
    traverse(head)

    // delete last element 
    console.log('delete last element')
    head = deleteLastElement(head)
    traverse(head)

    // delete any kth element
    console.log("delete kth node")
    head = deleteKthNode(head, 3)
    traverse(head)

    //delete an element
    console.log('delete an element')
    head = deleteNodeContainK(head, 3)
    head = deleteNodeContainK(head, 5)
    traverse(head)

    // add to first
    console.log('add to first')
    head = addToFirst(head, 1)
    traverse(head)

    // add to last 
    console.log('add to last')
    head = addToLast(head, 3)
    traverse(head)

    // add to the kth position
    console.log('add to the kth position')
    head = addToKthPosition(head, 4, 4) // 1,2,3,4
    head = addToKthPosition(head, 5, 2) // 1,5,2,3,4
    head = addToKthPosition(head, 6, 6) // 1,5,2,3,4,6
    head = addToKthPosition2(head, 7,1) // 7,1,5,2,3,4,6
    head = addToKthPosition2(head, 8,8) // 7,1,5,2,3,4,6,8
    traverse(head)

    // add before 
    console.log('add before any value')
    head = addBeforeValue(head, 10,1) // 10,7,1,5,2,3,4,6,8
    head = addBeforeValue(head, 11, 8) // 10,7,1,5,2,3,4,6,11,8
    traverse(head)
}


```
