### Binary Search Tree
- similar to binary tree but main difference here is that all nodes on the left needs to be less than root node and nodes to the right needs to be greater than root node
- left subtree also needs to follow BST rule and same goes for right subtree
- why bst and not BT, it's because in binary tree lets say we have degenerated tree, it length will be O(N) and traversing through will also take O(N), whereas in BST length between left subtree and right subtree will be O(log2(N)) , in bst legth between left subtree and right subtree is kept as minimum as possible
- searching in BT will take O(N) where as in BST it will be log(N) as we know value smaller or greater will lie either left or right part of subtree

> If you want subtree height differences to be O(log N), use self-balancing trees like:
>> AVL Tree
>> Red-Black Tree
>> Treaps
>> Splay Trees
