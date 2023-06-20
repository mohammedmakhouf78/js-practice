let bt = new BinaryTree()

bt._root = new BinaryTreeNode(42)

bt._root.left = new BinaryTreeNode(41)
bt._root.left.left = new BinaryTreeNode(10)
bt._root.left.right = new BinaryTreeNode(40)

bt._root.right = new BinaryTreeNode(50)
bt._root.right.left = new BinaryTreeNode(45)
bt._root.right.right = new BinaryTreeNode(75)

// bt.traversePreorder()