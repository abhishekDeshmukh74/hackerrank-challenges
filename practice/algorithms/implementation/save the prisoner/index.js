function saveThePrisoner(n, m, s) {
    return (s - 1 + m) % n || n
}

console.log(saveThePrisoner(7, 19, 2));
console.log(saveThePrisoner(3, 7, 3));
