function myArraySum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Exemple d'utilisation
console.log(myArraySum([1, 2, 3, 4])); // 10
