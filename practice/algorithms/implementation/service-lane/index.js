function serviceLane(width, cases) {

    const answers = []

    for (let i = 0; i < cases.length; i++) {
        answers.push(Math.min(...width.slice(cases[i][0], cases[i][1] + 1)))
    }
    return answers
}

console.log(serviceLane([2, 3, 1, 2, 3, 2, 3, 3], [[0, 3], [4, 6], [6, 7], [3, 5], [0, 7]]));
