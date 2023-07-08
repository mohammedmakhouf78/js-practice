var isPalindrome = function (x) {
    x = x.toString()
    let s = 0
    let e = x.length - 1

    while (s < e) {
        if (x[s] === x[e]) {
            s++
            e--
        } else {
            return false
        }
    }

    return true
};



console.log(isPalindrome(121) == true);
console.log(isPalindrome(123321) == true);
console.log(isPalindrome(-121) == false);
console.log(isPalindrome(10) == false);
console.log(isPalindrome(101) == true);


// let bt = new BinaryTree()

// bt._root = new BinaryTreeNode(42)

// bt._root.left = new BinaryTreeNode(41)
// bt._root.left.left = new BinaryTreeNode(10)
// bt._root.left.right = new BinaryTreeNode(40)

// bt._root.right = new BinaryTreeNode(50)
// bt._root.right.left = new BinaryTreeNode(45)
// bt._root.right.right = new BinaryTreeNode(75)

// // bt.traversePreorder() 