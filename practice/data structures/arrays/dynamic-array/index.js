function dynamicArray(n, queries) {

    let seqList = new Array(n);
    for (let i = 0; i < n; i++) {
        seqList[i] = new Array();
    }
    let lastAnswer = 0;
    let result = [];
    for (let i = 0; i < queries.length; i++) {
        let x = queries[i][1];
        let y = queries[i][2];

        if (queries[i][0] == 1) {
            let index = ((x ^ lastAnswer) % n);
            seqList[index].push(y);
        }
        if (queries[i][0] == 2) {
            let ind = ((x ^ lastAnswer) % n);
            let size = seqList[ind].length;
            lastAnswer = y % size;
            result.push(seqList[ind][lastAnswer]);
            lastAnswer = seqList[ind][lastAnswer];
        }
    }
    return result;
}

console.log('dynamicArray:', dynamicArray(2, [[1, 0, 5], [1, 1, 7], [1, 0, 3], [2, 1, 0], [2, 1, 1]]))
