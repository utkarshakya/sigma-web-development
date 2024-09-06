function reverse(string) {
    let newString = "";
    for(i = length-1; i>= 0; i--){
        newString += string[i]
    }
    return newString;
}

const string = "neP";
const length = string.length;

console.log(string);
console.log(reverse(string));