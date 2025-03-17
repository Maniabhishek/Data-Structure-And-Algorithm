### Preorder Traversal

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
