#### Postorder traversal

```ts
class BT {
    value: number;
    left: BT;
    right: BT;
    constructor(value: number){
        this.value = value
        this.left = null
        this.right = null
    }
}

function Postorder(node: BT){
    if(node == null){
        return
    }

    Postorder(node.left)
    Postorder(node.right)
    console.log(node.value)
}

```
