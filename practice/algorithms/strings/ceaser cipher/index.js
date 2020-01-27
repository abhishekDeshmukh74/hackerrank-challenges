function caesarCipher(s, k) {

    const smallCaseAlphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    const bigCaseAlphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    let cipher = '';
    for (let i = 0; i < s.length; i++) {

        // Ignore special chars
        if (!smallCaseAlphabets.includes(s.charAt(i)) && !bigCaseAlphabets.includes(s.charAt(i))) {
            cipher += s.charAt(i);
            continue;
        }

        // If char is uppercase else for lowecase
        if (s.charAt(i) == s.charAt(i).toUpperCase()) {
            cipher += bigCaseAlphabets[(bigCaseAlphabets.indexOf(s.charAt(i)) + k) % 26]
        } else {
            cipher += smallCaseAlphabets[(smallCaseAlphabets.indexOf(s.charAt(i)) + k) % 26]
        }

    }

    return cipher;
}

console.log(caesarCipher('middle-Outz', 2));
console.log(caesarCipher('Hello_World!', 4));
console.log(caesarCipher('Ciphering.', 26));
