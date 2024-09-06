// Uncomment the multiline comment to know about specific topic.



/*
// What is IIFE?
async function sleep(){
    return new Promise(()=>{
        console.log("Hola");
    }, 1000);
};
// Let say I want to call the above sleep function
// let a = await sleep(); // This will generated error because await can only be called inside the async function
// So to overcome this problem I can simply make an async function and then call it
// but here is one more way known as IIFE - Imidiatly Invoked Function Expression, see below
(async function main(){
    let a = await sleep();
    console.log(a);
})() // This one is a IIFE and work you don't need to call this funcion
*/



/*
// What Is Destructuring?
let [a, b, ...c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);
// Above a = 1, b = 2 and c become the array of the remaining values
// And This is called destructuring.
// We can also perform it on objects like,
let obj = {
    x: 1,
    y: 2,
    l: 3
};
let {x, y} = obj; // This says that give me the value of x and y from the object
console.log(x, y);
// Note: In case of object the variable must defined inside the object
*/



/*
// What is Spread Syntex?
function sum(a, b, c){
    return (a + b + c);
}
let arr = [2, 3, 5];
console.log(sum(arr[0], arr[1], arr[2])) // This is a normal way
console.log(sum(...arr)) // This is a spread syntex, these ... are spread operator, this basically spread the values and provide them to the function

// Here is one more usecase
let object = {...arr}; // This will simply create an object from the value of array and make there index as keys
console.log(object);
*/



/*
// What is Hoisting?
// Hoisting refers to the process whereby the interpreter appears to move the declarations to the top of the code before execution.
// For example:
console.log(king); // Although king is now defined it still not give error because
var king = 3; // it is defined here with var so javascript make it defined like var king; before we use it, and return undefined
// But Note if we do the same with let OR const then it gives an error.
// This hoisting can also be used in case of function
kingpin("Hello kingpin");
function kingpin(a){
    console.log(a)
}
// This is called Hoisting In JavaScript.
*/