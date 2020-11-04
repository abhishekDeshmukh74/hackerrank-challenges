// find-hackerrank
function processData(input) {
    const [total, ...array] = input.split('\n');
    for (let i = 0; i < total; i++) {
        if (/^hackerrank$/.test(array[i])) {
            console.log(0);
            continue;
        }
        if (/hackerrank$/.test(array[i])) {
            console.log(2);
            continue;
        }
        if (/^hackerrank/.test(array[i])) {
            console.log(1);
            continue;
        }
        console.log(-1);
    }
}

// utopian-identification-number
function processData(input) {
    const [total, ...array] = input.split('\n');
    for (let i = 0; i < total; i++) {
        if (/^[a-z]{0,3}[0-9]{2,8}[A-Z]{3,}$/.test(array[i])) {
            console.log('VALID');
        } else {
            console.log('INVALID');
        }
    }
}

// hackerrank-tweets
function processData(input) {
    const [total, ...array] = input.split('\n');
    let count = 0
    for (let i = 0; i < total; i++) {
        if (/hackerrank/i.test(array[i])) {
            count++
        }
    }
    console.log(count);
}

// valid-pan-format
function processData(input) {
    const [total, ...array] = input.split('\n');
    let count = 0
    for (let i = 0; i < total; i++) {
        if (/[A-Z]{5}[0-9]{4}[A-z]/.test(array[i])) {
            console.log('YES');
        } else {
            console.log('NO');
        }
    }
}

// hackerrank-language
function processData(input) {
    const [total, ...array] = input.split('\n');
    let count = 0
    for (let i = 0; i < total; i++) {
        if (/^\d+ (C|CPP|JAVA|PYTHON|PERL|PHP|RUBY|CSHARP|HASKELL|CLOJURE|BASH|SCALA|ERLANG|CLISP|LUA|BRAINFUCK|JAVASCRIPT|GO|D|OCAML|R|PASCAL|SBCL|DART|GROOVY|OBJECTIVEC)$/.test(array[i])) {
            console.log('VALID');
        } else {
            console.log('INVALID');
        }
    }
}

// split-number
function processData(input) {
    const [total, ...array] = input.split('\n');
    const regex = /(\d+)[- ](\d+)[- ](\d+)/;
    for (const item of array) {
        const match = item.match(regex)
        console.log('CountryCode=' + match[1] + ',LocalAreaCode=' + match[2] + ',Number=' + match[3]);
    }
}

// alien-username
function processData(input) {
    const [total, ...array] = input.split('\n');
    for (const item of array) {
        if (/^[_\.][0-9]+[a-zA-Z]*[_]?$/.test(item)) {
            console.log('VALID');
        } else {
            console.log('INVALID');
        }
    }
}
