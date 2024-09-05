function mySquareArray(arr) {
    let squared = [];
    for (let i = 0; i < arr.length; i++) {
        squared.push(arr[i] ** 2);
    }
    return squared;
}

// Exemple d'utilisation
console.log(mySquareArray([1, 2, 3, 4])); // [1, 4, 9, 16]
