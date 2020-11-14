function rotateLeft(d, arr) {
    const rotations = d % arr.length;
    const result = []
    for (let i = 0; i < arr.length; i++) {
        if (i < arr.length - rotations) {
            result.push(arr[i + rotations]);
        } else {
            result.push(arr[rotations + i - arr.length]);
        }
    }
    return result
}

console.log(rotateLeft(4, [1, 2, 3, 4, 5]))
console.log(rotateLeft(2, [1, 2, 3, 4, 5]))
