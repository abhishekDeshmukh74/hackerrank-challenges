function beautifulTriplets(d, array) {

    let count = 0;
    for (let i = 0; i < array.length; i++) {

        const subArray = [array[i], array[i] + d, array[i] + 2 * d]

        if (subArray.every((val) => array.includes(val))) {
            count++
        }
    }
    return count
}

console.log(beautifulTriplets(3, [1, 2, 4, 5, 7, 8, 10]));
