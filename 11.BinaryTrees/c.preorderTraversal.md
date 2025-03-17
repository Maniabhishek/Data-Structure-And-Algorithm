### Preorder Traversal

<img width="400" alt="image" src="https://github.com/user-attachments/assets/ed63979d-459f-4bc5-84c0-4b21da4fca99" />


```ts

class Tree {
    value: any
    left: Tree
    right: Tree
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

function preorder(node: Tree){
    if(node == null){
        return 
    }

    console.log(node.value)
    preorder(node.left)
    preorder(node.right)
}
```
