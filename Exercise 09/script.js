let num1 = prompt("Enter First Number ")
let operation = prompt("Enter The Operation")
let num2 = prompt("Enter Second Number ")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}

let random = Math.random() /* Returns a random number between 0 and 1 */
console.log(random);
if(random > 0.1){
    console.log(`The Result is ${num1} ${operation} ${num2}`);
    alert(`The Result Of ${num1} ${operation} ${num2} = ${eval(`${num1} ${operation} ${num2}`)}`)
}
else{
    operation = obj[operation]
    console.log(`The Result is ${num1} ${operation} ${num2}`)
    alert(`The Result Of ${num1} ${operation} ${num2} = ${eval(`${num1} ${operation} ${num2}`)}`)
}