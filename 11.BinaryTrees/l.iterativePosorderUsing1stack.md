#### Iterative postorder using 1 stack

- below is the code to solve it recursively

```ts
postorder(node.left)
postorder(node.right)
print(node.value)
```

- we will use the same approach , we will go left all the way and once we encounter null , then we will move right and again go left from the begining of the iteration
- lets check out the code
- do the dry run of the code with previous example
```ts
import { BT } from "./2.inorder";

function postorderTraversal(root: BT | null): number[] {
    if (!root) return [];
    
    const stack: BT[] = [];
    const output: number[] = [];
    let current: BT | null = root;
    let lastVisited: BT | null = null;
    
    while (stack.length > 0 || current) {
        if (current) {
            stack.push(current);
            current = current.left;
        } else {
            let peekNode = stack[stack.length - 1];
            if (peekNode.right && lastVisited !== peekNode.right) {
                current = peekNode.right;
            } else {
                output.push(peekNode.value);
                lastVisited = stack.pop()!;
            }
        }
    }
    console.log(output)
    return output;
}

export function CalliterativePostorderUsing1Stack(){
    const tree: BT = new BT(1)

    tree.left = new BT(2)
    tree.right = new BT(3)

    tree.left.left = new BT(4)
    tree.left.right = new BT(5)

    tree.left.right.left = new BT(6)
    tree.left.right.right = new BT(7)
    postorderTraversal(tree)
}

```
