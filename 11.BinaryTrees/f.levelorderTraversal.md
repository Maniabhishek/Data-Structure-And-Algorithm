#### Levelorder Traversal

```ts
function levelorderTraversal2(node: BT){
    const queue: BT[] = [node]

    const finalList:BT[] = []

    while(queue.length){
        const poppedElement = queue.shift()
        finalList.push(poppedElement)

        if(poppedElement.left){
            queue.push(poppedElement.left)
        }
        if(poppedElement.right){
            queue.push(poppedElement.right)
        }
    }
    for(let i=0; i < finalList.length; i++){
        console.log(finalList[i].value)
    }
}

export function calllevelorderTraversing2(){
    const bt = new BT(1)
    bt.left = new BT(2)
    bt.right = new BT(3)

    bt.left.left = new BT(4)
    bt.left.right = new BT(5)

    bt.right.left = new BT(6)
    bt.right.right = new BT(7)

    levelorderTraversal2(bt)
}
```
