#### Inorder Traversal

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

function Inorder(node: BT){
    if(node == null){
        return
    }

    Inorder(node.left)
    console.log(node.value)
    Inorder(node.right)
}

```
