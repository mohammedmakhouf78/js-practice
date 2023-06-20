function BinaryTree() {
    this._root = null
    this.traversePreorder = function () {
        traversePreorderHelper(this._root)
        function traversePreorderHelper(node) {
            if (!node) {
                return
            }
            console.log(node.value);
            traversePreorderHelper(node.left)
            traversePreorderHelper(node.right)
        }
    }

    this.traversePreorderIterative = function () {
        let nodeStack = []
        nodeStack.push(this._root)

        while (nodeStack.length) {
            let node = nodeStack.pop()
            console.log(node.value);
            if (node.right) {
                nodeStack.push(node.right)
            }
            if (node.left) {
                nodeStack.push(node.left)
            }
        }
    }

    this.traverseInOrder = function () {
        traverseInOrderHelper(this._root)
        function traverseInOrderHelper(node) {
            if (!node) {
                return
            }
            traverseInOrderHelper(node.left)
            console.log(node.value);
            traverseInOrderHelper(node.right)
        }
    }

    this.traverseInOrderIterative = function () {
        let current = this._root
        let s = []
        let done = false

        while (!done) {
            if (current != null) {
                s.push(current)
                current = current.left
            }
            else {
                if (s.length) {
                    current = s.pop()
                    console.log(current.value);
                    current = current.right
                }
                else {
                    done = true
                }
            }
        }
    }

    this.traversePostOrder = function () {
        traversePostOrderHelper(this._root)
        function traversePostOrderHelper(node) {
            if (!node) {
                return
            }
            if (node.left)
                traversePostOrderHelper(node.left)
            if (node.right)
                traversePostOrderHelper(node.right)
            console.log(node.value);
        }
    }

    this.traversePostOrderIterative = function () {
        let s1 = []
        let s2 = []

        s1.push(this._root)
        while (s1.length) {
            let node = s1.pop()
            s2.push(node)

            if (node.left) {
                s1.push(node.left)
            }
            if (node.right) {
                s1.push(node.right)
            }
        }

        while (s2.length) {
            let node = s2.pop()
            console.log(node.value);
        }
    }

    this.traverseLevelOrder = function () {
        traverseLevelOrderHelper(this._root)
        function traverseLevelOrderHelper(node) {
            if (!node) {
                return
            }
            console.log(node.value);
            if (node.left) {
                console.log(node.left.value);
                traverseLevelOrderHelper(node.left)
            }
            if (node.right) {
                console.log(node.right.value);
                traverseLevelOrderHelper(node.right)
            }
        }
    }
}

function BinaryTreeNode(value) {
    this.value = value
    this.left = null
    this.right = null
}