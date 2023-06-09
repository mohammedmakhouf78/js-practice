class SinglyLinksList {
    head = null
    last = null
    size = 0

    isEmpty() {
        return this.size == 0
    }

    insert(val) {
        if (this.isEmpty()) {
            this.head = new SinglyLinksListNode(val)
            this.last = this.head
        } else {
            this.last.next = new SinglyLinksListNode(val)
            this.last = this.last.next
        }
        this.size++
    }

    print() {
        let current = this.head
        while (current) {
            console.log(current.val);
            current = current.next
        }
    }

    remove(val) {
        let current = this.head
        let prev = null
        while (current) {
            if (current.val == val) {
                if (current == this.head) {
                    this.head = current.next
                } else if (current == this.last) {
                    this.last = prev
                }
                else {
                    prev.next = current.next
                }
            }
            perv = current
            current = current.next
        }
    }

    // remove(val) {
    //     let current = this.head
    //     while (current.next) {
    //         if (current.val != val) {
    //             continue
    //         }
    //         if (current == this.head) {
    //             this.head = current.next
    //         }
    //         else if (current.next != null) {
    //             current.next = current.next.next
    //         }
    //     }
    // }
}

class SinglyLinksListNode {
    val = null
    next = null

    constructor(val) {
        this.val = val
    }
}