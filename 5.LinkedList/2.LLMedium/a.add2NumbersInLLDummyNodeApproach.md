- you are given two LL lets say 2->8->4->7 and 8->3->9->7->3 now you need to sum these number in reverse i.e., 7482 + 37938 the number it yeilds is 45420 so we need to return the new LL 0->2->4->5->4
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

export function add2NumbersInLL(head1: LNode, head2: LNode){
    const dummyNode: LNode = new LNode(-1)

    let current = dummyNode

    let t1 = head1
    let t2 = head2
    let carry = 0

    while(t1!=null || t2 != null){
        let sum = carry;

        if(t1) sum = sum + t1.data
        if(t2) sum = sum + t2.data

        const newNode = new LNode(sum%10)
        current.next = newNode
        current = current.next
        carry = Math.floor(sum/10)
        if(t1) t1 = t1.next
        if (t2) t2 = t2.next
    }

    if(carry){
        const newNode = new LNode(carry)
        current.next = newNode
    }

    return dummyNode.next
}

export function CallAdd2NumbersInLL(){
    const head1 = convertA2LL([2,3,9,1])
    const head2 = convertA2LL([4,5,9,8,3,5])

    const head3 = add2NumbersInLL(head1,head2)
    traverse(head3)
}

```
