function equalizeArray(arr) {

    const map = new Map()

    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1);
        } else {
            map.set(arr[i], 1);
        }
    }
    return arr.length - Math.max(...map.values())
}

console.log(equalizeArray([1, 2, 3, 1, 2, 3, 3, 3]));
