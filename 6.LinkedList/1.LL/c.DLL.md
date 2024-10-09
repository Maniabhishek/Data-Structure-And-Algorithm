```ts
class DLNode {
    data: number;
    next: DLNode
    back: DLNode

    constructor(data: number){
        this.data = data
        this.next = null
        this.back = null
    }
}

function convertA2DLL(arr: number[]){
    const head = new DLNode(1)
    let prev  = head

    for(let i = 1; i < arr.length; i++){
        const temp = new DLNode(arr[i])

        temp.back = prev
        prev.next = temp
        prev = temp
    }
    return head
}

function PrintDLL(head: DLNode){
    let temp = head
    while(temp != null){
        console.log(temp.data)
        temp = temp.next
    }
    return temp
}

function deleteHead(head: DLNode){

    if(head == null) return head

    if(head.next == null) {
        return null
    }

    let prev = head
    head = head.next
    head.back = null
    prev.next = null
    return head
}

function deleteTail(head: DLNode){
    if(head == null) return null

    if(head.next == null ) return null

    let current = head
    while(current.next.next){
        current = current.next
    }

    let lastNode = current.next
    lastNode.back = null
    current.next = null
    return head
}

// delete kth node , if we reach at any kth node , there will be condition of, it could be the 1st one or it could be the last one , or it could be somewhere where it will have both prev and next node 
function deleteKthNode(head: DLNode, k: number){



    let count = 0;
    let temp = head
    while(temp){
        count++
        if(count == k) break;
        temp = temp.next
    }

    if(temp == null) return head

    let nextNode = temp.next
    let prevNode = temp.back

    if(nextNode == null && prevNode == null){
        return null
    }else if(nextNode == null){
        prevNode.next = null
        temp.back = null
    }else if(prevNode == null){
        head = head.next
        head.back = null
        temp.next = null
    }else {
        prevNode.next = nextNode
        nextNode.back = prevNode
        temp.back = null
        temp.next = null
    }
    return head
}

function addHead(head: DLNode, el: number){
    const newNode = new DLNode(el)

    let temp = head
    head = newNode
    head.next = temp
    temp.back = head

    return head
}

function addTail(head: DLNode, el: number){
    const newNode = new DLNode(el)

    if(head == null) return newNode

    let temp = head
    while(temp.next){
        temp = temp.next
    }

    temp.next = newNode
    newNode.back = temp
    return head
}

function addBeforeTail(head:DLNode, el: number){
    let newNode = new DLNode(el)

    if(head.next == null) {
        return addHead(head, el)
    }

    let temp = head
    while(temp.next != null){
        temp = temp.next
    }

    let prev = temp.back

    prev.next = newNode
    newNode.back = prev
    newNode.next = temp
    temp.back = newNode

    return head
}

function addBeforeKthNode(head: DLNode, el: number, k: number){
    let newNode = new DLNode(el)

    if(k == 1) {
        return addHead(head, el)
    }

    let temp = head
    let count = 0;
    while(temp != null){
        count++
        if(count == k) break
        temp = temp.next
    }

    let prev = temp.back

    prev.next = newNode
    newNode.back = prev
    newNode.next = temp
    temp.back = newNode

    return head
}

function addBeforeNode(head: DLNode, node: DLNode, el){
    const prev = node.back
    const newNode = new DLNode(el)
    prev.next = newNode
    newNode.back = prev
    newNode.next = node
    node.back = newNode
    return head
}

export function CallDLL(){
    const arr = [1,2,3,4,5]
    let head = convertA2DLL(arr)

    // printing a DLL
    console.log('print a DLL')
    PrintDLL(head)

    // delete a head
    console.log('delete head')
    head = deleteHead(head)
    PrintDLL(head) // 2,3,4,5

    // deleteTail
    console.log('delete tail')
    head = deleteTail(head)
    PrintDLL(head) // 2,3,4

    // deleteKthNode
    console.log('delete kth node')
    head = deleteKthNode(head, 3)
    PrintDLL(head)

    // add head 
    console.log('add head')
    head = addHead(head, 1)
    PrintDLL(head)

    // add tail
    console.log('add tail')
    head = addTail(head, 4) // 1,2,3,4
    PrintDLL(head)

    // add before Tail
    console.log('add before tail')
    head = addBeforeTail(head, 5) // 1,2,3,5,4
    PrintDLL(head)

    // add before kth node
    console.log('add before kth node')
    head = addBeforeKthNode(head, 10, 1) // 10,1,2,3,5,4
    PrintDLL(head)
    head = addBeforeKthNode(head, 11, 6) // 10,1,2,3,5,4
    PrintDLL(head)
}


```
