function myCountChar(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}

// Exemple d'utilisation
console.log(myCountChar("hello world", "l")); // 3
