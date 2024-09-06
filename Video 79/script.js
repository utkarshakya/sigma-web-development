let a = "34";
let b = "6";

// Try catching error
try {
    console.log(c);
} catch (error) {
    console.log("This is unexpectible");
}
finally{ // This will run even after the retun statement in any function
    console.log("I always run");
}

// Try throwing error
let c = a + b; // contatination
let d = "Kingpin" + parseInt(a) + parseInt(b); // converts a and b to integers
// Now console.log(d) will not give any error in this case it simply returns NaN because a string can be added to number
if(isNaN(d)){
    throw TypeError("Sorry We Con't Add String To A Number")
}