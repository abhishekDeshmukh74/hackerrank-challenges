function insertNodeAtTail(head, data) {
    if (!head) {
        head = { data, next: null }
        return head
    }
    let trueHead = head;
    while (head.next) {
        head = head.next;
    }
    head.next = { data, next: null }
    return trueHead
}

console.log(insertNodeAtTail(null, 141))
