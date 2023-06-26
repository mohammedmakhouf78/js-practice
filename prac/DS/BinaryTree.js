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

    this.depthFirst = function (callback) {
        let stack = [this._root]

        while (stack.length) {
            let current = stack.pop()
            callback(current.value)

            if (current.right) stack.push(current.right)
            if (current.left) stack.push(current.left)
        }
    }

    this.breadthFirstStack = function (callback) {
        let stack = [this._root]
        callback(this._root.value)
        while (stack.length) {
            let current = stack.pop()
            if (current?.left?.value) callback(current.left.value)
            if (current?.right?.value) callback(current.right.value)

            if (current.right) stack.push(current.right)
            if (current.left) stack.push(current.left)
        }
    }

    this.breadthFirstQueue = function (callback) {
        let queue = [this._root]
        while (queue.length) {
            let current = queue.pop()
            callback(current.value)
            if (current.left) queue.unshift(current.left)
            if (current.right) queue.unshift(current.right)
        }
    }

    this.searchForValue = function (value) {
        let found = false
        this.depthFirst(cur => {
            if (cur == value) {
                found = true
            }
        })
        return found
    }

    this.searchForValueRecursive = function (target) {
        return searchForValueRecursiveHelper(this._root, target)
        function searchForValueRecursiveHelper(node, target) {
            if (!node) return false
            if (node.value == target) return true
            return (
                searchForValueRecursiveHelper(node.left, target) ||
                searchForValueRecursiveHelper(node.right, target)
            )
        }
    }

    this.getMinValue = function () {
        return getMinValueHelper(this._root)
        function getMinValueHelper(node) {
            if (!node) return Infinity
            return Math.min(node.value, getMinValueHelper(node.left), getMinValueHelper(node.right))
        }
    }

    this.getMaxPath = function () {
        return getMaxPathHelper(this._root)
        function getMaxPathHelper(node) {
            if (!node) return -Infinity
            if (!node.left && !node.right) {
                return node.value
            }
            if (node.left.value > node.right.value) {
                return node.value + getMaxPathHelper(node.left)
            } else {
                return node.value + getMaxPathHelper(node.right)
            }
        }
    }
}



function BinaryTreeNode(value) {
    this.value = value
    this.left = null
    this.right = null
}