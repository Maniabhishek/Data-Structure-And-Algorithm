- you are given a num which will not exist in BST , and you have to insert it into BT as leaf node
```ts
import { BT } from "../tree/2.inorder";

function InsertInBST(root: BT, num: number){
    if(!root) {
        root = new BT(num)
        return root
    }
    let node = root;

    while(node){
        if(node.value < num){
            if(!node.right){
                node.right = new BT(num)
                break;
            }
            node = node.right 
        }else {
            if(!node.left){
                node.left = new BT(num)
                break;
            }
            node = node.left
        }
    }
    return root
}

export function CallInsertInBST(){
    let root = new BT(10)
    root.left = new BT(5)
    root.right = new BT(15)
    root.left.left = new BT(2)
    root.left.right = new BT(6)
    InsertInBST(root, 20)
    InsertInBST(root, 14)
    console.log(root)
}
```
