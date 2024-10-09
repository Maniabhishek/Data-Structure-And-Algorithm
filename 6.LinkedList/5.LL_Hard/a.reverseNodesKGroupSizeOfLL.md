```ts
import { convertA2LL, LNode, traverse } from "./6.oddEvenLLCombine";

function getKthNode(head:LNode, k: number): LNode{
    let temp = head
    let count = k-1
    while(temp !== null && count > 0) {
        temp = temp.next
        count--
    }
    return temp
}

function reverse(head: LNode){
    let temp = head

    let prev = null
    while(temp != null) {
        let front = temp.next
        temp.next = prev
        prev = temp 
        temp = front
    }

    return prev
}

// Function to reverse nodes in groups of K
function kReverse(head: LNode, k: number) {
    // Initialize a temporary
    // node to traverse the list
    let temp = head;

    // Initialize a pointer to track the
    // last node of the previous group
    let prevLast = null;

    // Traverse through the linked list
    while (temp !== null) {
        // Get the Kth node of the current group
        let kThNode = getKthNode(temp, k);

        // If the Kth node is NULL
        // (not a complete group)
        if (kThNode === null) {
            // If there was a previous group,
            // link the last node to the current node
            if (prevLast) {
                prevLast.next = temp;
            }

            // Exit the loop
            break;
        }

        // Store the next node
        // after the Kth node
        let nextNode = kThNode.next;

        // Disconnect the Kth node
        // to prepare for reversal
        kThNode.next = null;

        // Reverse the nodes from
        // temp to the Kth node
        reverse(temp);

        // Adjust the head if the reversal
        // starts from the head
        if (temp === head) {
            head = kThNode;
        } else {
            // Link the last node of the previous
            // group to the reversed group
            prevLast.next = kThNode;
        }

        // Update the pointer to the
        // last node of the previous group
        prevLast = temp;

        // Move to the next group
        temp = nextNode;
    }

    // Return the head of the
    // modified linked list
    return head;
}

export function Call_KReverse(){
    const arr = [1,2,3,4,5,6,7,8,9]

    let head = convertA2LL(arr)

    head = kReverse(head, 3)
    traverse(head)
}
```
