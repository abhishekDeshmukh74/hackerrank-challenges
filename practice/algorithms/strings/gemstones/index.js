function gemstones(arr) {
    let gemstones = 0
    for (const [testGem] of new Set(arr[0]).entries()) {
        if (arr.every(mineral => mineral.includes(testGem))) gemstones++
    }
    return gemstones
}

console.log(gemstones(['abcdde', 'baccd', 'eeabg']));
