```ts
// to clone a LL with random pointer pointing to any node , if it was a simple linked list we could have traversed through and kept creating and linking new node and 
// but here in this case we also have the random pointer which are pointing to any node in the LL 
// so what we can do is , first insert copied node in between LL , i.e., when you are at 1st node create a copy of the node and point first node to the copied node and copied node should point to next node in LL and keep doing that until null is encountered
// once iserted traverse again from the begining and connect all the random pointers
// finally traverse again and segregate the copied node and you will get the cloned LL

class LLWithRandomPointers {
    data: number;
    next: LLWithRandomPointers;
    random: LLWithRandomPointers;

    constructor(data: number){
        this.data = data
        this.next = null
        this.random = null
    }
}

function insertNodeInBetween(head: LLWithRandomPointers): LLWithRandomPointers{
    let temp = head;

    while(temp){

        // create copy of original node
        let copy = new LLWithRandomPointers(temp.data)

        // next node
        let nextNode = temp.next

        // point the original node's next to copy node
        temp.next = copy
        copy.next = nextNode

        // move temp to next original
        temp = nextNode
    }

    return head
}

function connectRandomPointers(head: LLWithRandomPointers): LLWithRandomPointers{
    let temp = head

    while(temp){
        let copyNode = temp.next

        if(temp.random){

            copyNode.random = temp.random
        }else{
            copyNode.random = null
        }

        temp = temp.next.next
    }

    return head
}

function getClonedLL(head: LLWithRandomPointers): LLWithRandomPointers{
    let temp = head 

    let dummNode = new LLWithRandomPointers(-1)
    let t2 = dummNode

    while(temp) {
        t2.next = temp.next
        t2 = t2.next

        // disconnect the original node and revert back initial state of the original Linked List 
        temp.next = temp.next.next
        temp = temp.next
    }
    return head
}

function CloneLL(head: LLWithRandomPointers){
    // copy and insert node in between
    head = insertNodeInBetween(head)

    head = connectRandomPointers(head)

    head = getClonedLL(head)

    while(head) {
        console.log(head.data)
        console.log(head.random.data)
        head = head.next
    }
}


export function Call_ClonedLL(){
    const head = new LLWithRandomPointers(1)
    let temp = head
    temp.next = new LLWithRandomPointers(2)
    temp = temp.next
    temp.next = new LLWithRandomPointers(3)
    temp = temp.next
    temp.next = new LLWithRandomPointers(4)
    temp = temp.next

    temp = head
    temp.random = temp.next.next

    temp = temp.next
    temp.random = temp.next.next

    temp = temp.next
    temp.random = head

    temp = temp.next
    temp.random = head.next

    CloneLL(head)
}
```
