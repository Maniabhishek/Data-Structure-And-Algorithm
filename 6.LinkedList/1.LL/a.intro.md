> - array in ds are stored in cotniguous manner, if an element is stored at memory location 12344 then next element will be stored at 12345 12346 and so on ....
> - but if we have array of length 5 then we want to store at 6th index then it becomes difficult
> - whereas in linked list we can easily insert , linked list doesn't store element in a way array does, all the node in linked list can sit anywhere in the memory , it is just every element in node contains the memory address of next element

```ts

class LNode {
    element: number;
    next: LNode;

    constructor(element: number){
        this.element = element
        this.next = null
    }
}

class LinkedList{
    head: LNode;
    size: number;
    constructor(){
        this.head = null
        this.size = 0
    }

    add(element: number){
        let newNode = new LNode(element)

        if(this.head === null){
            this.head = newNode
        }else {
            let current = this.head

            while(current.next){
                current = current.next
            }
            current.next = newNode
        }
        this.size++
    }

    traverse(){
        let current = this.head

        while(current){
            console.log(current.element)
            current = current.next
        }
    }

    search(element: number){
        let current = this.head
        while(current){
            if(current.element === element){
                return true
            }
            current = current.next
        }
        return false
    }
}

export function CallLinkedList(){
    const node = new LinkedList()
    node.add(1)
    node.add(2)
    node.add(3)
    node.add(4)
    
    console.log('traverse')
    node.traverse()

    console.log('search')
    console.log((node.search(3)))
    console.log((node.search(5)))

    
}

// if you want traverse all the way to the end then use while(current)
// if you want attach an element in the end which is you will attach current.next when it null then use while(current.next)
```
