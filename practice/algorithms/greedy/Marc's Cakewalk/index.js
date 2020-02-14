function marcsCakewalk(calories) {

    calories.sort((a, b) => b - a)
    let minimum = 0;

    for (let i = 0; i < calories.length; i++) {
        minimum = minimum + Math.pow(2, i) * calories[i]
    }

    return minimum
}

// best answer
calorie.sort((p, c) => c - p).reduce((p, c, i) => p + c * Math.pow(2, i), 0)

console.log(marcsCakewalk([1, 3, 2]));
console.log(marcsCakewalk([7, 4, 9, 6]));
console.log(marcsCakewalk([504, 378, 291, 380, 728, 630, 797, 212, 32, 792, 895, 635, 850, 853, 859, 127, 653, 655, 476, 748]));
