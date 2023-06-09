function hi() {
    let list = new SinglyLinksList()
    list.insert(1)
    list.insert(2)
    list.insert(12)
    list.remove(1)
    list.insert(3)

    list.print()
}

hi()