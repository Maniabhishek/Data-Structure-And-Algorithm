
```ts
import { convertA2DLL, DLNode, PrintDLL } from "./3.dll";

function deleteAllOccurence(head: DLNode, element: number){

    if(head.data == element) {
        head = head.next
        if(head) {
            head.back = null
        }
    }
    let temp: DLNode
    if(head){
        temp = head.next
    }
    while(temp != null){
        if(temp.data == element){
            let prevNode = temp.back
            let nextNode = temp.next
            if(prevNode) {
                prevNode.next = nextNode
            }
            if(nextNode) {
                nextNode.back = prevNode
            }
        }
        temp = temp.next
    }
    return head
}


export function Call_deleteAllOccurence(){
    const arr = [1,2,3,4,5,6,1,2,4,1,34,1]

    let head = convertA2DLL(arr)

    head = deleteAllOccurence(head, 1)

    PrintDLL(head)
}
```
