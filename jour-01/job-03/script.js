function myIsInString(str, substring) {
    return str.includes(substring);
}

// Exemple d'utilisation
console.log(myIsInString("hello world", "world")); // true
console.log(myIsInString("hello world", "planet")); // false
