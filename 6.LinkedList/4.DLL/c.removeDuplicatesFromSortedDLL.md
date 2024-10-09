- take one temp pointing to the head, now that the DLL we have is sorted so, we can assume that any duplicate node that exist will be together , so while traversing we will take another node pointing to next node and nextNode will keep traversing until it finds different node other than the temp node value and once we find out the different value we simply point temp to nextNode and nextNode to prev

```ts
import { convertA2DLL, DLNode, PrintDLL } from "./3.dll";

function removeDuplicatesFromDll(head: DLNode){
    let temp = head

    while(temp != null && temp.next != null) {
        let nextNode = temp.next

        while(nextNode != null && nextNode.data === temp.data) {
            nextNode = nextNode.next
        }

        temp.next = nextNode
        if(nextNode) {
            nextNode.back = temp
        }
        temp = temp.next
    }

    return head
}

export function Call_removeDuplicatesFromDll(){
    const arr = [1,1,1,2,3,3,44,44,55,66,66,66]

    let head = convertA2DLL(arr)

    head = removeDuplicatesFromDll(head)
    PrintDLL(head)
}

```
