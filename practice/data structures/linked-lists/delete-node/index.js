function deleteNode(head, position) {
    if (position === 0) return head.next
    let node = head
    for (let i = 0; i < position - 1; i++, node = node.next) { }
    node.next = node.next.next;
    return head
}

console.log(deleteNode({
    data: 20,
    next: {
        data: 6,
        next: {
            data: 2,
            next: {
                data: 19,
                next: {
                    data: 7,
                    next: {
                        data: 4,
                        next: {
                            data: 15,
                            next: {
                                data: 9,
                                next: null
                            }
                        }
                    }
                }
            }
        }
    }
}, 3))
