#### Inorder Traversal

<img width="456" alt="image" src="https://github.com/user-attachments/assets/651104e6-2be0-4155-b279-ef8c77fc5d97" />


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
