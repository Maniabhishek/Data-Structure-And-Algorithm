![image](https://github.com/user-attachments/assets/37bae87d-6742-4ded-a01f-46fa6c9ce383)

![image](https://github.com/user-attachments/assets/2c0dd319-2fda-4f88-9ea5-f5efd3d23d3f)

![image](https://github.com/user-attachments/assets/9751adaf-4a03-4578-b35c-13a15c049dab)


```ts
import { BT } from "./2.inorder";

function CountNodesOfCompleteTree(root: BT){
    if(root == null) return 0
    let leftSubtreeHeight = heightOfLeftTree(root)
    let rightSubTreeHeight = heightOfRightTree(root)
    console.log(leftSubtreeHeight, rightSubTreeHeight)
    if(leftSubtreeHeight === rightSubTreeHeight) return (2**leftSubtreeHeight - 1)
    
    let countLeft = CountNodesOfCompleteTree(root.left)
    let countRight = CountNodesOfCompleteTree(root.right)
    console.log("countLeft, countRight ",countLeft, countRight)
    return 1 + countLeft + countRight
}

function heightOfLeftTree(root: BT){
    let count = 0;
    let temp = root
    while(temp){
        count++
        temp = temp.left
    }
    return count
}

function heightOfRightTree(root: BT){
    let count = 0;
    let temp = root
    while(temp){
        count++
        temp = temp.right
    }
    return count
}

export function CallCountNodesOfCompleteTree(){
    const root = new BT(1)
    root.left = new BT(2)
    root.right = new BT(3)

    root.left.left = new BT(4)
    root.left.right = new BT(5)
    root.right.left = new BT(6)
    root.right.right = new BT(7)

    root.left.left.left = new BT(8)
    root.left.left.right = new BT(9)
    root.left.right.left = new BT(10)
    root.left.right.right = new BT(11)

    // another example tree
    // root.left = new BT(2)
    // root.right = new BT(3)

    // root.left.left = new BT(4)
    // root.left.right = new BT(4)

    // root.right.left = new BT(6)


    console.log(CountNodesOfCompleteTree(root))
}   

```
