function myNearZero(arr) {
    let nearest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (Math.abs(arr[i]) < Math.abs(nearest) || (Math.abs(arr[i]) === Math.abs(nearest) && arr[i] > nearest)) {
            nearest = arr[i];
        }
    }
    return nearest;
}

// Exemple d'utilisation
console.log(myNearZero([3, -1, 2, -2])); // -1
