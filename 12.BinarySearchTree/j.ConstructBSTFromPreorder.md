- the idea is quiet simple as we know all element on the left is smaller than root and greater than root on the right 

<img width=400 height=600 src="https://github.com/user-attachments/assets/0c0acedb-1004-4f51-a68e-15d3d75a005b">


<img width=400 height=600 src="https://github.com/user-attachments/assets/0147f6ce-08b8-4989-b169-b02a71f6031f">


```ts
import { BT } from "../tree/2.inorder"

function buildBST(arr: number[], i: number[], bound: number){
    if(i[0] === arr.length || arr[i[0]] > bound) return null

    const root = new BT(arr[i[0]])
    i[0]++

    root.left = buildBST(arr, i, root.value)
    root.right = buildBST(arr, i, bound)
    return root
}

export function CallbuildBST(){
    const arr = [8,5,1,7, 10,12]

    console.log(buildBST(arr, [0], Infinity))
}
```
