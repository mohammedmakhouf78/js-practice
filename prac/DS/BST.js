function BST() {
    this._root = null

    this.insert = function (val) {
        if (this._root == null) {
            this._root = new BSTNode(val)
        } else {
            let current = this._root

            while (current) {
                if (val >= current.val && current.right != null) {
                    current = current.right
                }
                else if (val >= current.val && current.right == null) {
                    current.right = new BSTNode(val)
                    break
                }
                else if (val < current.val && current.left != null) {
                    current = current.left
                }
                else if (val < current.val && current.left == null) {
                    current.left = new BSTNode(val)
                    break
                }
            }
        }
    }


    this.search = function (val) {
        let current = this._root

        while (current) {
            if (current.val == val) return true
            if (val > current.val) current = current.right
            else current = current.left
        }
    }


}

function BSTNode(value) {
    this.value = value
    this.left = null
    this.right = null
}