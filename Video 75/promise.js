console.log("Initiated...");

let first = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Hello");
        reject("Sorry for inconvinience")
    }, 2000);
})

first.then((a) => {
    console.log("Our Promise Resolved Succesfully");
    console.log(a);
}).catch((err) => {
    console.log(err);
})

// There are two Consumers:
// 1. .then() for getting the resolve value
// 2. .catch() for error handing