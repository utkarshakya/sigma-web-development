function sumTillNegative(array) {
    let sum = 0;
    let i = 0;
    while (array[i] >= 0) {
        sum += array[i];
        i++;
    }
    return sum
}

let array = [1, 2, 3, 5, 4, -1, 10]
console.log(`Sum Of All Numbers Before A Negative Comes = ${sumTillNegative(array)}`);