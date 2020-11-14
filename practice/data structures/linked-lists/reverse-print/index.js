function reversePrint(head) {
    let headCopy = head
    const reverse = []
    while (headCopy) {
        reverse.unshift(headCopy.data)
        headCopy = headCopy.next
    }
    reverse.forEach(element => {
        console.log(element)
    });
}

reversePrint({
    data: 16,
    next: {
        data: 12,
        next: {
            data: 4,
            next: {
                data: 2,
                next: {
                    data: 5,
                    next: null
                }
            }
        }
    }
})
