![image](https://github.com/user-attachments/assets/375afee7-5e1a-4fbe-90a1-fe8992de847b)
![image](https://github.com/user-attachments/assets/c17f3e85-cc17-44fe-a8db-a48b6e0d9e7b)



```ts
class LNodeWithChild {
    data: number;
    next: LNodeWithChild;
    child: LNodeWithChild

    constructor(data: number){
        this.data = data
        this.next = null
        this.child = null
    }
}

function traverseChild(head: LNodeWithChild){
    if(head) {
        console.log(head.next)
        let t = head
        while(t){
            console.log(t.data)
            t = t.child
        }
    }
}

function mergeSortedLL(head1: LNodeWithChild, head2: LNodeWithChild){
    console.log('merge sorted LL')
    let temp1 = head1
    let temp2 = head2
    let dummyNode = new LNodeWithChild(-1)
    let temp = dummyNode

    while(temp1 != null && temp2 != null) {
        if(temp1.data < temp2.data){
            temp.child = temp1
            temp = temp.child
            temp1 = temp1.child
        }else {
            temp.child = temp2
            temp = temp.child
            temp2 = temp2.child 
        }
        temp.next = null
    }

    if(temp1) {
        temp.child = temp1
    }else {
        temp.child = temp2
    }

    return dummyNode.child
}

function FlattenLL(head: LNodeWithChild): LNodeWithChild{
    if(head == null || head.next == null) return head

    let mergedHead = FlattenLL(head.next)
    return mergeSortedLL(head, mergedHead)
}

export function Call_FlattenLL(){
    const arr = [[1,10, 12,14], [5,7,9,10], [9,12,13,14], [8,9,10]]
    const head = new LNodeWithChild(arr[0][0])
    let temp = head
    for(let i = 1; i <arr[0].length; i++){
        temp.child = new LNodeWithChild(arr[0][i])
        temp.next = null
        temp = temp.child
    }
    temp = head
    for(let i = 1; i< arr.length; i++){
        let nextHead = new LNodeWithChild(arr[i][0])
        let t1 = nextHead
        for(let j = 1; j < arr[i].length; j++){
            t1.child = new LNodeWithChild(arr[i][j])
            t1.next = null
            t1 = t1.child
        }

        temp.next = nextHead
        temp = temp.next
    }

    let flatll = FlattenLL(head)
    let t = flatll

    traverseChild(flatll)
}
```
