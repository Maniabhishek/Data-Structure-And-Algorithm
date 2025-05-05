- to solve this problem the idea is simple , for any BST when we traverse using inorder traversal nodes will always be in sorted manner

```ts
import { BT } from "../tree/2.inorder";

let cnt = 0
let ans: BT = null
function KthSmallest(root: BT, k: number){
    if(root === null || cnt >= k){
        return
    }

    KthLargestOrSmallest(root.left, k)
    cnt++
    if(cnt === k){
        ans = root
        return
    }
    KthLargestOrSmallest(root.right, k)
}


export function CallKthLargestOrSmallest(){
    const root = new BT(5)
    root.left = new BT(3)
    root.right = new BT(7)

    root.left.left = new BT(1)
    root.left.right = new BT(4)
    root.left.left.right = new BT(2)

    root.right.left = new BT(6)
    root.right.right = new BT(8)

    KthLargestOrSmallest(root, 3)
    console.log(ans ? ans.value : null)
}
```
