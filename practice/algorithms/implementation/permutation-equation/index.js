function permutationEquation(p) {

    const y = []
    for (let x = 1; x <= p.length; x++) {
        y.push(p.indexOf(p.indexOf(x) + 1) + 1)
    }

    return y

}

console.log(permutationEquation([5, 2, 1, 3, 4]));
